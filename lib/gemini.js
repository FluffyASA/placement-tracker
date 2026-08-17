import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Use a model name that is currently available in Gemini API / AI Studio.
// If your account doesn't show this exact model, use the latest Flash option from the model list.
const extractModel = genAI.getGenerativeModel({ model: "gemini-3.5-flash" });

// Slightly stronger model for open-ended reasoning (resume feedback).
const reasoningModel = genAI.getGenerativeModel({ model: "gemini-3.5-flash" });

/**
 * Pulls structured company/deadline info out of a pasted WhatsApp message.
 * Returns null fields when something isn't mentioned — never guesses dates.
 */
export async function extractPlacementInfo(rawText) {
  const prompt = `You are extracting placement/recruitment details from a message
forwarded from a college placement WhatsApp group. Read the message and return
ONLY a JSON object (no markdown fences, no commentary) with this exact shape:

{
  "company_name": string | null,
  "role": string | null,
  "application_deadline": string | null,  // ISO 8601 date, e.g. "2026-08-20", null if not mentioned
  "test_date": string | null,             // ISO 8601 date, null if not mentioned
  "summary": string                       // one sentence plain-English summary of the message
}

Rules:
- If a date has no year mentioned, assume the current year (2026) unless the month has clearly already passed this year, in which case assume next year.
- If you cannot find a field, use null. Never fabricate a date.
- Return raw JSON only.

Message:
"""
${rawText}
"""`;

  const result = await extractModel.generateContent(prompt);
  const text = result.response.text().trim();
  const cleaned = text.replace(/^```json\s*|```$/g, "").trim();

  try {
    return JSON.parse(cleaned);
  } catch (err) {
    throw new Error("Gemini returned non-JSON output: " + text);
  }
}

/**
 * Compares resume text against a job description and returns targeted,
 * actionable suggestions rather than a generic rewrite.
 */
export async function getResumeFeedback(resumeText, jobDescription) {
  const prompt = `You are a career coach reviewing a resume against a specific
job description. Be concrete and specific — reference actual lines from the
resume and actual requirements from the JD. Do not write generic advice like
"use action verbs" unless you point to exactly where.

Return ONLY a JSON object (no markdown fences) with this shape:

{
  "match_summary": string,        // 2-3 sentences on overall fit
  "strengths": string[],          // specific resume points that map well to the JD
  "gaps": string[],               // specific JD requirements the resume doesn't address
  "suggested_edits": string[]     // concrete, actionable rewrite suggestions, referencing resume content
}

Job description:
"""
${jobDescription}
"""

Resume text:
"""
${resumeText}
"""`;

  const result = await reasoningModel.generateContent(prompt);
  const text = result.response.text().trim();
  const cleaned = text.replace(/^```json\s*|```$/g, "").trim();

  try {
    return JSON.parse(cleaned);
  } catch (err) {
    throw new Error("Gemini returned non-JSON output: " + text);
  }
}

/**
 * Generate `count` multiple-choice questions for a given topic.
 * Returns an array of { id, question, options: string[], answer }
 */
export async function generateQuestionsForTopic(topic, count = 20) {
  const prompt = `You are an exam question generator for interview practice. Produce exactly ${count} multiple-choice questions about the topic "${topic}".

Return ONLY a JSON array (no commentary, no markdown fences) with ${count} objects, each with this shape:
{
  "id": string,
  "question": string,
  "options": ["optA", "optB", "optC", "optD"],
  "answer": "<the-correct-option-string-from-options>"
}

Requirements:
- Provide four options per question.
- Keep questions concise (one sentence) and clear.
  - The answer value must exactly match one of the strings in the \`options\` array.
- Use unique ids (short strings) for each question.
`;

  const result = await reasoningModel.generateContent(prompt);
  const text = result.response.text().trim();
  const cleaned = text.replace(/^```json\s*|```$/g, "").trim();

  try {
    const parsed = JSON.parse(cleaned);
    if (!Array.isArray(parsed)) throw new Error("Expected JSON array");
    return parsed;
  } catch (err) {
    throw new Error("Gemini generateQuestions returned non-JSON output: " + text);
  }
}
