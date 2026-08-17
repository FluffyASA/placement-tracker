-- Run this in the Supabase SQL editor (Project > SQL Editor > New query)
-- Single-user app: no auth/RLS complexity for now. Add RLS later if this
-- ever needs to serve more than one person.

create table if not exists companies (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text,                          -- e.g. "SDE Intern", "Analyst"
  raw_message text,                   -- original pasted WhatsApp text, for reference
  application_deadline timestamptz,
  test_date timestamptz,
  status text default 'tracking',     -- tracking | applied | test_scheduled | rejected | offer
  notes text,
  created_at timestamptz default now()
);

create table if not exists resumes (
  id uuid primary key default gen_random_uuid(),
  company_id uuid references companies(id) on delete cascade,
  file_name text not null,
  storage_path text not null,         -- path inside the 'resumes' storage bucket
  version_label text default 'v1',
  created_at timestamptz default now()
);

-- Storage bucket for resume files.
-- Create this once from the Supabase dashboard: Storage > New bucket > "resumes" (private).
-- Or run:
-- insert into storage.buckets (id, name, public) values ('resumes', 'resumes', false);

create index if not exists idx_companies_deadline on companies(application_deadline);
create index if not exists idx_resumes_company on resumes(company_id);
