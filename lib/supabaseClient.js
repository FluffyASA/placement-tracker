import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // Fails loudly at build/runtime instead of silently returning null data.
  console.warn(
    "Supabase env vars are missing. Copy .env.local.example to .env.local and fill them in."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
