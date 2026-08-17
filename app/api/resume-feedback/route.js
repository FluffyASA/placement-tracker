import { NextResponse } from "next/server";
import { getResumeFeedback } from "@/lib/gemini";

export async function POST(request) {
  try {
    const { resumeText, jobDescription } = await request.json();

    if (!resumeText || !jobDescription) {
      return NextResponse.json(
        { error: "Both resumeText and jobDescription are required." },
        { status: 400 }
      );
    }

    const feedback = await getResumeFeedback(resumeText, jobDescription);
    return NextResponse.json({ feedback });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: err.message || "Resume feedback failed" },
      { status: 500 }
    );
  }
}
