# Placement Tracker — base project

A base you can hand to Claude Code / Cursor and build on. Tracks companies,
applying deadlines, and test dates extracted from pasted WhatsApp messages,
and stores per-company resumes with AI feedback against a job description.

Built as a **PWA** (installable on Android and desktop via "Install app" in
Chrome/Edge) rather than a separate native app — same codebase, no
Android Studio needed for this stage.

## What's already built

- Paste a WhatsApp placement message → Gemini extracts company, role,
  applying deadline, test date → saved to Supabase
- Dashboard sorted by nearest deadline, with an urgency indicator
- Status tracker per company (tracking / applied / test scheduled / rejected / offer)
- Resume upload per company, stored in Supabase Storage, downloadable
- AI feedback comparing a pasted resume against a pasted job description

## What's intentionally NOT built yet (your enhancement list)

- Reminder notifications (email/push) a day or two before deadlines
- Automated outbound WhatsApp messages (needs WhatsApp Business API —
  see note below, don't reach for whatsapp-web.js/ToS-violating libraries)
- Resume editing in-app / multi-format export (currently: upload + download only)
- DSA / OS / Networks practice question bank + streaks
- Auth (currently single-user, no login — add Supabase Auth if this needs
  to support more than one person)

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Create a Supabase project
1. Go to https://supabase.com → New project (free tier)
2. In the SQL Editor, paste and run everything in `supabase/schema.sql`
3. Go to Storage → New bucket → name it `resumes`, keep it **private**
4. Go to Settings → API → copy the Project URL and the `anon public` key

### 3. Get a Gemini API key (free)
1. Go to https://aistudio.google.com/apikey
2. Create an API key (no credit card needed)

### 4. Environment variables
```bash
cp .env.local.example .env.local
```
Fill in the three values from steps 2 and 3.

### 5. Run it
```bash
npm run dev
```
Open http://localhost:3000

## Installing as an app (Android / desktop)

Once deployed (e.g. to Vercel — free, connects directly to this repo):
- **Android**: open the deployed URL in Chrome → menu → "Add to Home screen"
- **Desktop**: open in Chrome/Edge → address bar → install icon, or menu →
  "Install Placement Tracker"

Both give you a standalone app window/icon, no browser chrome.

## Deploying

Easiest path: push this to GitHub, then import the repo at
https://vercel.com/new. Add the same three env vars in Vercel's project
settings. Free tier is enough for this.

## Project structure

```
app/
  page.js                 — dashboard
  add/page.js              — paste message → extract → save
  resume/page.js           — upload resume, get AI feedback
  api/extract/route.js     — Gemini extraction endpoint
  api/resume-feedback/route.js — Gemini resume-vs-JD endpoint
lib/
  supabaseClient.js         — Supabase client
  gemini.js                 — Gemini prompts + calls
supabase/schema.sql          — run this once in Supabase SQL editor
public/manifest.json         — PWA config
```

## A note on the WhatsApp-out reminders

There's no official API for reading/sending from a *personal* WhatsApp
number. Automating it via browser-session libraries works but risks the
number getting banned, and isn't something to build this app around. For
real WhatsApp-out reminders, look at the official WhatsApp Business
Platform via a provider like Twilio or Gupshup — it requires business
verification and template approval, so budget a few days for that, not
a few hours. Email or push notifications are the fast path for v1.
