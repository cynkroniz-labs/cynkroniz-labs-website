'use client'
import { useEffect, useRef, useState } from 'react'

const DURATION = 1500

const format = (n, decimals, suffix) =>
  n.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }) + suffix

/**
 * A proof number that counts up once, the first time it scrolls into view.
 *
 * Renders the finished value on the server so the real figure is in the HTML
 * for crawlers and for anyone without JS. Only after mount does it drop to
 * zero and animate, which also keeps the server and client markup identical
 * on first paint.
 */
export default function CountStat({ value, decimals = 0, suffix = '' }) {
  const [display, setDisplay] = useState(() => format(value, decimals, suffix))
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Anyone who asked for less motion just keeps the final number.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    setDisplay(format(0, decimals, suffix))

    const run = (start) => {
      const step = (now) => {
        const t = Math.min((now - start) / DURATION, 1)
        // easeOutExpo: fast out of the gate, long settle on the real number
        const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
        setDisplay(format(value * eased, decimals, suffix))
        if (t < 1) raf = requestAnimationFrame(step)
      }
      raf = requestAnimationFrame(step)
    }

    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        io.unobserve(el)
        run(performance.now())
      },
      { threshold: 0.4 }
    )
    io.observe(el)

    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value, decimals, suffix])

  return (
    <div className="proof-n" ref={ref}>
      {display}
    </div>
  )
}
