'use client'
import { useEffect, useRef, useState } from 'react'

const DURATION = 600   // whole effect, start to settled
const LOCK_WINDOW = 0.78 // fraction of it spent locking characters in
const TICK = 45        // ms between reshuffles, slower than a frame so it reads as digits
const DIGITS = '0123456789'

const randDigit = () => DIGITS[(Math.random() * 10) | 0]

/**
 * A proof number that scrambles briefly, then locks in left to right the
 * first time it scrolls into view.
 *
 * Only digits shuffle. Separators like "." "," and the "M" suffix stay put,
 * so the number keeps its shape and width the whole way through.
 *
 * The settled value is what renders on the server, so the real figure is in
 * the HTML for crawlers and for anyone without JS, and the first client
 * paint matches the server exactly.
 */
export default function StatScramble({ children }) {
  const target = String(children)
  const [display, setDisplay] = useState(target)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    let lastTick = 0
    const chars = [...target]
    const digitCount = chars.filter((c) => /\d/.test(c)).length

    const frame = (start) => (now) => {
      const t = Math.min((now - start) / DURATION, 1)

      if (now - lastTick >= TICK || t === 1) {
        lastTick = now
        // how many of the digits have locked by now, left to right
        const locked = Math.floor((t / LOCK_WINDOW) * digitCount)
        let seen = 0
        setDisplay(
          chars
            .map((c) => {
              if (!/\d/.test(c)) return c
              return seen++ < locked ? c : randDigit()
            })
            .join('')
        )
      }

      if (t < 1) raf = requestAnimationFrame(frame(start))
      else setDisplay(target)
    }

    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        io.unobserve(el)
        setDisplay(chars.map((c) => (/\d/.test(c) ? randDigit() : c)).join(''))
        raf = requestAnimationFrame(frame(performance.now()))
      },
      { threshold: 0.4 }
    )
    io.observe(el)

    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [target])

  return (
    <div className="proof-n" ref={ref}>
      {display}
    </div>
  )
}
