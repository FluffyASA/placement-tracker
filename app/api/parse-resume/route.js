import { getResumeFeedback } from '@/lib/gemini';
import { supabase } from '@/lib/supabaseClient';

export const runtime = 'nodejs';

export async function POST(req) {
  try {
    const form = await req.formData();
    const file = form.get('file');
    const storagePath = form.get('storagePath');
    const jobDescription = form.get('jobDescription') || '';

    if (!file && !storagePath) {
      return new Response(JSON.stringify({ error: 'No file uploaded and no storagePath provided' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    let buffer;
    let name = '';
    let type = '';

    // If caller provided a storagePath, download it from Supabase storage
    if (storagePath) {
      const { data, error: dlError } = await supabase.storage.from('resumes').download(storagePath);
      if (dlError) {
        return new Response(JSON.stringify({ error: 'Failed to download stored resume: ' + String(dlError) }), { status: 500, headers: { 'Content-Type': 'application/json' } });
      }
      const arrayBuffer = await data.arrayBuffer();
      buffer = Buffer.from(arrayBuffer);
      name = storagePath.split('/').pop() || '';
      type = name.toLowerCase().endsWith('.pdf') ? 'application/pdf' : '';
    } else {
      const arrayBuffer = await file.arrayBuffer();
      buffer = Buffer.from(arrayBuffer);
      name = file.name || '';
      type = file.type || '';
    }

    let text = '';

    try {
      if (type.includes('pdf') || name.toLowerCase().endsWith('.pdf')) {
        const pdfParse = (await import('pdf-parse')).default;
        const data = await pdfParse(buffer);
        text = data.text || '';
      } else if (name.toLowerCase().endsWith('.docx') || type.includes('officedocument') || type.includes('word')) {
        const mammoth = (await import('mammoth')).default;
        const { value } = await mammoth.extractRawText({ buffer });
        text = value || '';
      } else {
        // try PDF first, then DOCX
        try {
          const pdfParse = (await import('pdf-parse')).default;
          const data = await pdfParse(buffer);
          text = data.text || '';
        } catch (e) {}

        if (!text) {
          const mammoth = (await import('mammoth')).default;
          const { value } = await mammoth.extractRawText({ buffer });
          text = value || '';
        }
      }
    } catch (err) {
      return new Response(JSON.stringify({ error: 'Failed to parse file: ' + String(err) }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    try {
      const feedback = await getResumeFeedback(text, jobDescription);
      return new Response(JSON.stringify({ feedback }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (err) {
      return new Response(JSON.stringify({ error: 'Feedback failed: ' + String(err) }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
