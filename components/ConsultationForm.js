'use client'
import { useState } from 'react'

// Matches the address already published in the site footer.
const CONTACT_EMAIL = 'hello@cynkronizlabs.cloud'

// Bands follow the ideal-customer range (roughly 5 to 55+ people) so leads can
// be sorted by fit at a glance.
const TEAM_SIZES = ['1–4', '5–15', '16–55', '56+']

// The "Talk to us" form, for visitors who already know which workflow needs
// fixing. Anyone unsure goes to the audit request (a Google Form) instead.
export default function ConsultationForm() {
  const [fields, setFields] = useState({ name: '', email: '', business: '', teamSize: '', workflow: '', website: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState(false)
  // Spam trap. Hidden from people; bots that autofill it are dropped server-side.
  const [honeypot, setHoneypot] = useState('')

  function set(key) {
    return (e) => {
      setFields((prev) => ({ ...prev, [key]: e.target.value }))
      setErrors((prev) => ({ ...prev, [key]: false }))
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const newErrors = {}
    for (const key of ['name', 'email', 'business', 'teamSize', 'workflow']) {
      if (!fields[key].trim()) newErrors[key] = true
    }
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return }

    setLoading(true)
    setServerError(false)
    try {
      // The server route stores the lead and emails the notification.
      const res = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, company_url_hp: honeypot }),
      })
      if (!res.ok) throw new Error(`Submit failed: ${res.status}`)
      setSubmitted(true)
    } catch (err) {
      console.error('Lead submit error:', err)
      setServerError(true)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="form-success">
        <h3>Got it.</h3>
        <p>We&apos;ll read through how the workflow runs today and get back to you.</p>
      </div>
    )
  }

  const errStyle = (key) => (errors[key] ? { borderColor: '#dc2626' } : {})

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: 'grid', gap: '14px' }}>
      <h3>Tell us about the workflow</h3>
      <p className="form-intro">A few details and a plain description is plenty.</p>
      <div className="frow">
        <div className="fld">
          <label htmlFor="f-name">Your Name</label>
          <input id="f-name" type="text" autoComplete="name" placeholder="Jane Doe" value={fields.name} onChange={set('name')} style={errStyle('name')} />
        </div>
        <div className="fld">
          <label htmlFor="f-email">Work Email</label>
          <input id="f-email" type="email" autoComplete="email" placeholder="jane@yourfirm.com" value={fields.email} onChange={set('email')} style={errStyle('email')} />
        </div>
      </div>
      <div className="frow">
        <div className="fld">
          <label htmlFor="f-biz">Company</label>
          <input id="f-biz" type="text" autoComplete="organization" placeholder="Acme Advisory" value={fields.business} onChange={set('business')} style={errStyle('business')} />
        </div>
        <div className="fld">
          <label htmlFor="f-size">Team Size</label>
          <select id="f-size" value={fields.teamSize} onChange={set('teamSize')} style={errStyle('teamSize')}>
            <option value="" disabled>Choose one</option>
            {TEAM_SIZES.map((s) => <option key={s} value={s}>{s} people</option>)}
          </select>
        </div>
      </div>
      <div className="fld">
        <label htmlFor="f-workflow">What workflow is causing the most friction right now?</label>
        <textarea
          id="f-workflow"
          rows={4}
          placeholder="e.g. New client onboarding. Intake comes in by email, someone copies it into the CRM, then builds the project folder by hand."
          value={fields.workflow}
          onChange={set('workflow')}
          style={errStyle('workflow')}
        />
      </div>
      <div className="fld">
        <label htmlFor="f-url">Website URL (optional)</label>
        <input id="f-url" type="url" autoComplete="url" placeholder="https://yourfirm.com" value={fields.website} onChange={set('website')} />
      </div>
      <input
        type="text"
        name="company_url_hp"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
      />
      {/* On failure the submission is not stored anywhere, so always give the visitor
          a way through rather than a dead end. */}
      {serverError && (
        <p className="form-error">
          That didn&apos;t send. Please try again, or email{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> directly and we&apos;ll pick it up from there.
        </p>
      )}
      <div className="form-footer">
        <span className="form-note">↳ No obligation.</span>
        <button type="submit" className="btn btn-p btn-sm" disabled={loading}>
          {loading ? 'Sending…' : <>Send it over <span className="arrow">→</span></>}
        </button>
      </div>
    </form>
  )
}
