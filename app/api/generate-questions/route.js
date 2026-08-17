import { NextResponse } from 'next/server';
import { generateQuestionsForTopic } from '@/lib/gemini';

export async function POST(req) {
  try {
    const body = await req.json();
    const topic = body.topic || body.subtopic || 'General';
    const count = Number(body.count) || 20;

    const questions = await generateQuestionsForTopic(topic, count);

    return NextResponse.json({ questions });
  } catch (err) {
    return NextResponse.json({ error: err.message || String(err) }, { status: 500 });
  }
}
