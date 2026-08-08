'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase'

// Matches the address already published in the site footer.
const CONTACT_EMAIL = 'hello@cynkronizlabs.cloud'

export default function ConsultationForm() {
  const [fields, setFields] = useState({ name: '', business: '', website: '', email: '', bottleneck: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState(false)

  function set(key) {
    return (e) => {
      setFields((prev) => ({ ...prev, [key]: e.target.value }))
      setErrors((prev) => ({ ...prev, [key]: false }))
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const newErrors = {}
    if (!fields.name.trim()) newErrors.name = true
    if (!fields.business.trim()) newErrors.business = true
    if (!fields.email.trim()) newErrors.email = true
    if (!fields.bottleneck) newErrors.bottleneck = true
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return }

    setLoading(true)
    setServerError(false)
    try {
      const supabase = createClient()
      const { error } = await supabase.from('audit_leads').insert({
        name: fields.name,
        business: fields.business,
        website: fields.website || null,
        email: fields.email,
        bottleneck: fields.bottleneck,
      })
      if (error) throw error
      setSubmitted(true)
    } catch (err) {
      console.error('Supabase insert error:', err)
      setServerError(true)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="form-success">
        <h3>Got it.</h3>
        <p>{"I'll email you within one business day with a couple of times for your audit."}</p>
      </div>
    )
  }

  const errStyle = (key) => (errors[key] ? { borderColor: '#dc2626' } : {})

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: 'grid', gap: '14px' }}>
      <div className="frow">
        <div className="fld">
          <label htmlFor="f-name">Your Name</label>
          <input id="f-name" type="text" placeholder="Jane Doe" value={fields.name} onChange={set('name')} style={errStyle('name')} />
        </div>
        <div className="fld">
          <label htmlFor="f-biz">Business Name</label>
          <input id="f-biz" type="text" placeholder="Acme Plumbing" value={fields.business} onChange={set('business')} style={errStyle('business')} />
        </div>
      </div>
      <div className="fld">
        <label htmlFor="f-url">Website URL</label>
        <input id="f-url" type="url" placeholder="https://yourbusiness.com" value={fields.website} onChange={set('website')} />
      </div>
      <div className="fld">
        <label htmlFor="f-email">Email Address</label>
        <input id="f-email" type="email" placeholder="you@yourbusiness.com" value={fields.email} onChange={set('email')} style={errStyle('email')} />
      </div>
      <div className="fld">
        <label htmlFor="f-bottleneck">What&apos;s Slipping Right Now</label>
        <select id="f-bottleneck" value={fields.bottleneck} onChange={set('bottleneck')} style={errStyle('bottleneck')}>
          <option value="" disabled>Choose one</option>
          <option>We post when we remember, which isn&apos;t often</option>
          <option>Nobody finds us on Google</option>
          <option>The website doesn&apos;t turn visitors into calls</option>
          <option>We miss calls and never call back</option>
          <option>Leads come in and then go quiet</option>
          <option>Past customers never hear from us again</option>
          <option>Not sure, I need fresh eyes</option>
        </select>
      </div>
      {/* On failure the submission is not stored anywhere, so always give the visitor
          a way through rather than a dead end. */}
      {serverError && (
        <p className="form-error">
          That didn&apos;t send. Please try again, or email{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> directly and I&apos;ll pick it up from there.
        </p>
      )}
      <div className="form-footer">
        <span className="form-note">↳ Free. No pitch.</span>
        <button type="submit" className="btn btn-p btn-sm" disabled={loading}>
          {loading ? 'Sending…' : <>Book my audit <span className="arrow">→</span></>}
        </button>
      </div>
    </form>
  )
}
