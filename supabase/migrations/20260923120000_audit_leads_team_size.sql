-- audit_leads.team_size — added when the site repositioned to AI workflow
-- systems (September 2026). The "Talk to us" form now asks for team size so
-- leads can be sorted by fit against the 5–55+ person target range.
--
-- Nullable on purpose: every row written before this change has no team size,
-- and the form enforces it on new submissions instead.
--
-- Must be applied before the new form goes live, or its inserts fail on an
-- unknown column. Re-runnable: a second run is a no-op.

alter table public.audit_leads add column if not exists team_size text;
