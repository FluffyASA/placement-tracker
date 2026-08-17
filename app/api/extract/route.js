import { NextResponse } from "next/server";
import { extractPlacementInfo } from "@/lib/gemini";
import { supabase } from "@/lib/supabaseClient";

export async function POST(request) {
  try {
    const { rawText } = await request.json();

    if (!rawText || rawText.trim().length < 5) {
      return NextResponse.json(
        { error: "Paste the WhatsApp message text first." },
        { status: 400 }
      );
    }

    const extracted = await extractPlacementInfo(rawText);

    const { data, error } = await supabase
      .from("companies")
      .insert({
        name: extracted.company_name || "Unknown company",
        role: extracted.role,
        raw_message: rawText,
        application_deadline: extracted.application_deadline,
        test_date: extracted.test_date,
        status: "tracking",
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ company: data, extracted });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: err.message || "Extraction failed" },
      { status: 500 }
    );
  }
}
