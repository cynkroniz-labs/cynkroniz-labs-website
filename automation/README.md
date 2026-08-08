# Lead automation

What happens when someone submits the consultation form.

```
consultation form (browser, anon key)
        ↓
Supabase · public.audit_leads          source of truth — every submission, permanently
        ↓  database webhook on INSERT
n8n · "New Lead" workflow              router
        ├──→ Airtable · Leads          the CRM you work in
        └──→ Resend                    "you have a lead" email
```

Airtable is a **projection**, not the record. If it gets mangled, replay from
`audit_leads`. Lead status lives only in Airtable and never syncs back — one-way
flow, far less to break.

## 1. Airtable

Base: **Cynkroniz CRM** · Table: **Leads**

| Field | Type | Notes |
|---|---|---|
| `Supabase ID` | Single line text | Dedupe key — the upsert matches on this |
| `Name` | Single line text | |
| `Business` | Single line text | |
| `Email` | Email | |
| `Website` | URL | Blank when the lead skipped it |
| `Bottleneck` | Single select | **Enable Typecast on the n8n node** — see below |
| `Stage` | Single select | `New`, `Contacted`, `Booked`, `Won`, `Lost` |
| `Submitted` | Date (with time) | From `created_at` |
| `Follow-up` | Date | Yours to set |
| `Notes` | Long text | Yours to fill |

Only the first eight are written by automation; `Follow-up` and `Notes` are for you.

**Typecast:** the form's bottleneck options have already changed once — the May 2026
lead recorded *"Not enough visibility or traffic"*, which no longer exists in the
form. Without typecast, a value Airtable hasn't seen makes the insert fail and the
lead never lands. In the Airtable node's **Options**, add **Typecast → on** so new
options are created automatically.

Views worth adding: Kanban grouped by `Stage`, Calendar on `Follow-up`.

## 2. n8n

Import `n8n/new-lead.workflow.json`.

Node versions differ between n8n releases — if a node imports with warnings, open
it and re-pick the fields. The logic is what matters, not the exact typeVersions.

Then set:

- **Airtable node** — replace `REPLACE_WITH_AIRTABLE_BASE_ID` with your base ID
  (from the API docs URL: `airtable.com/appXXXXXXXX/api/docs`), attach an Airtable
  Personal Access Token credential with `data.records:read` + `data.records:write`.
- **Resend node** — attach a Header Auth credential: name `Authorization`, value
  `Bearer re_your_key`.
- **Webhook node** — attach a Header Auth credential (e.g. `x-webhook-secret`) so
  the endpoint isn't open to anyone who finds the URL. Supabase sends the matching
  header in step 3.
- **Env vars** on the n8n instance: `LEAD_NOTIFY_TO` (your inbox),
  `LEAD_NOTIFY_FROM` (verified sender, or `onboarding@resend.dev` while testing —
  that sender can only mail your own Resend account address).

Copy the **production** webhook URL once activated.

## 3. Supabase database webhook

Dashboard → Database → Webhooks → Create:

- Table `public.audit_leads`, event **Insert** only
- Type: HTTP Request, method `POST`
- URL: the n8n production webhook URL
- HTTP header: the shared secret matching the n8n Header Auth credential

## 4. Test

Submit the form on the site, then check, in order: the row in `audit_leads`, the
n8n execution log, the Airtable record, your inbox. Whichever is the first one
missing tells you which hop broke.

## Known gap

The form inserts straight from the browser with the publishable key, so **anyone
holding that key can write rows into `audit_leads` from anywhere** — no rate limit,
no captcha. Every junk row becomes an Airtable record and an email. Worth adding a
captcha or moving the insert server-side before this gets any traffic.
