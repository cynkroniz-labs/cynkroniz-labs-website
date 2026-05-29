'use client'
import { useEffect } from 'react'

export default function NavScrollEffect() {
  useEffect(() => {
    const nav = document.getElementById('nav')
    if (!nav) return
    const check = () => nav.classList.toggle('on', window.scrollY > 16)
    window.addEventListener('scroll', check, { passive: true })
    check()
    return () => window.removeEventListener('scroll', check)
  }, [])
  return null
}
