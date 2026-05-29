import { createBrowserClient } from '@supabase/ssr'

/**
 * Browser-side Supabase client.
 * Safe to call from any 'use client' component.
 * Uses the publishable key — no secrets on the client.
 */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
  )
}
