'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase'

export default function AuditForm() {
  const [fields, setFields] = useState({ name: '', business: '', website: '', email: '', bottleneck: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState('')

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
    setServerError('')
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
      setServerError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="form-success">
        <h3>Audit request received.</h3>
        <p>{"We'll review your situation and send your personalized findings within 48 hours."}</p>
      </div>
    )
  }

  const errStyle = (key) => (errors[key] ? { borderColor: 'rgba(255,100,100,0.7)' } : {})

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: 'grid', gap: '14px' }}>
      <div className="frow">
        <div className="fld">
          <label htmlFor="f-name">Your Name</label>
          <input id="f-name" type="text" placeholder="Jane Doe" value={fields.name} onChange={set('name')} style={errStyle('name')} />
        </div>
        <div className="fld">
          <label htmlFor="f-biz">Business Name</label>
          <input id="f-biz" type="text" placeholder="Acme Co." value={fields.business} onChange={set('business')} style={errStyle('business')} />
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
        <label htmlFor="f-bottleneck">Biggest Bottleneck Right Now</label>
        <select id="f-bottleneck" value={fields.bottleneck} onChange={set('bottleneck')} style={errStyle('bottleneck')}>
          <option value="" disabled>Choose one</option>
          <option>Not enough visibility or traffic</option>
          <option>Inconsistent content and social presence</option>
          <option>Website doesn&apos;t convert visitors</option>
          <option>Leads fall through the cracks</option>
          <option>Slow follow-up and response time</option>
          <option>Unclear messaging or positioning</option>
          <option>Not sure — I need fresh eyes</option>
        </select>
      </div>
      {serverError && <p style={{ color: 'rgba(255,100,100,0.9)', fontSize: '13px' }}>{serverError}</p>}
      <div className="form-footer">
        <span className="form-note">↳ Returned within 48 hours.</span>
        <button type="submit" className="btn btn-p" disabled={loading}>
          {loading ? 'Sending…' : <>Request My Free Audit <span className="arrow">→</span></>}
        </button>
      </div>
    </form>
  )
}
