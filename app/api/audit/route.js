import { createClient } from '@supabase/supabase-js'

// Server-side fallback route — not used by the client form (which writes directly
// via the browser Supabase client), but kept for future server-side integrations.
export async function POST(request) {
  const { name, business, website, email, bottleneck } = await request.json()

  if (!name || !business || !email || !bottleneck) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
  )

  const { error } = await supabase
    .from('audit_leads')
    .insert({ name, business, website: website || null, email, bottleneck })

  if (error) {
    console.error('Supabase insert error:', error)
    return Response.json({ error: 'Database error' }, { status: 500 })
  }

  return Response.json({ ok: true })
}
