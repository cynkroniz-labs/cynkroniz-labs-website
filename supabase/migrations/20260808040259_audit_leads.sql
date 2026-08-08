-- audit_leads — the consultation form's only table.
--
-- Written after the August 2026 unpause, when it turned out the schema existed
-- nowhere but inside the Supabase instance itself. This file is the record.
-- Everything below was verified against the live table, not inferred, so it is
-- safe to treat as authoritative.
--
-- Written to be re-runnable: applying it to a database that already has the
-- table is a no-op rather than an error.

create table if not exists public.audit_leads (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  business    text not null,
  email       text not null,
  bottleneck  text not null,
  website     text,          -- optional; the client sends null when left blank
  created_at  timestamptz not null default now()
);

alter table public.audit_leads enable row level security;

-- The form submits straight from the browser with the publishable (anon) key, so
-- anon must be able to INSERT. It deliberately gets nothing else: with no select
-- policy, submitted leads are readable only via the service role (dashboard or
-- server-side code), never by visitors.
--
-- Dropping first keeps this re-runnable — create policy has no "if not exists".
drop policy if exists "anon can submit leads" on public.audit_leads;

create policy "anon can submit leads"
  on public.audit_leads
  for insert
  to anon, authenticated
  with check (true);
