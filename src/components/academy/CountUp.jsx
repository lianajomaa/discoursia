/**
 * COUNT UP — runs a number from zero to its value the first time it is seen.
 * Used for prices. With reduced motion, or no observer, it shows the final
 * value straight away.
 */

import { useEffect, useRef, useState } from 'react'

const DURATION = 900

// True when there is nothing to animate: reduced motion, or no observer.
function skipMotion() {
  return (
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ||
    !('IntersectionObserver' in window)
  )
}

function CountUp({ to }) {
  const ref = useRef(null)
  const [still] = useState(skipMotion)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node || still) return undefined

    let frame
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now) => {
          const t = Math.min(1, (now - start) / DURATION)
          const eased = 1 - (1 - t) ** 3
          setValue(Math.round(to * eased))
          if (t < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [to, still])

  return <span ref={ref}>{still ? to : value}</span>
}

export default CountUp
