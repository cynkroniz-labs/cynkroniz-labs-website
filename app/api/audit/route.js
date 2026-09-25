import { createClient } from '@supabase/supabase-js'

// "Talk to us" submissions: store the lead in Supabase, then email a
// notification through Resend. The lead is the record; the email is a
// courtesy, so an email failure never fails the submission.

const REQUIRED = ['name', 'email', 'business', 'teamSize', 'workflow']
const NOTIFY_TO = process.env.LEAD_NOTIFY_TO || 'hello@cynkronizlabs.cloud'

const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

async function notify(lead) {
  const key = process.env.RESEND_API_KEY
  if (!key) {
    console.warn('RESEND_API_KEY not set; lead saved but no email sent.')
    return
  }

  const rows = [
    ['Name', lead.name],
    ['Email', lead.email],
    ['Company', lead.business],
    ['Team size', lead.team_size],
    ['Website', lead.website || '(none)'],
    ['Workflow', lead.bottleneck],
  ]
  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n\n')
  const html = `<table cellpadding="6" style="font-family:sans-serif;font-size:14px">${rows
    .map(([k, v]) => `<tr><td style="color:#666;vertical-align:top"><b>${k}</b></td><td style="white-space:pre-wrap">${escapeHtml(v)}</td></tr>`)
    .join('')}</table><p style="font-family:sans-serif;font-size:13px;color:#666">Hit reply to answer ${escapeHtml(lead.name)} directly.</p>`

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      // resend.dev only delivers to the Resend account's own address, which is
      // NOTIFY_TO. Switch to a verified cynkronizlabs.cloud sender to change that.
      from: 'Cynkroniz Leads <onboarding@resend.dev>',
      to: [NOTIFY_TO],
      reply_to: lead.email,
      subject: `New lead: ${lead.name}, ${lead.business} (${lead.team_size})`,
      text,
      html,
    }),
  })
  if (!res.ok) console.error('Resend error:', res.status, await res.text())
}

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Invalid request' }, { status: 400 })
  }

  // Honeypot: a field real visitors never see. Bots that fill it get a normal
  // success response and nothing is stored or sent.
  if (body.company_url_hp) return Response.json({ ok: true })

  if (REQUIRED.some((k) => !String(body[k] ?? '').trim())) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const lead = {
    name: body.name.trim(),
    email: body.email.trim(),
    business: body.business.trim(),
    team_size: body.teamSize,
    // `bottleneck` predates this form; it holds the workflow description.
    bottleneck: body.workflow.trim(),
    website: body.website?.trim() || null,
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
  )
  const { error } = await supabase.from('audit_leads').insert(lead)
  if (error) {
    console.error('Supabase insert error:', error)
    return Response.json({ error: 'Database error' }, { status: 500 })
  }

  try {
    await notify(lead)
  } catch (err) {
    console.error('Lead notification failed:', err)
  }

  return Response.json({ ok: true })
}
