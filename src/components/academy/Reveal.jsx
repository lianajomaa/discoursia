/**
 * REVEAL — fades content in as it scrolls into view.
 *
 * Three safeguards, because content that stays invisible is far worse than
 * content that simply doesn't animate:
 *
 *   1. Nothing is hidden until JS has attached the observer, so a failed or
 *      blocked script leaves the page fully visible.
 *   2. A timeout reveals everything after a short delay regardless of
 *      scrolling — covers printing, odd viewports, and anything that renders
 *      the whole page without a scroll event.
 *   3. prefers-reduced-motion disables the movement entirely (see index.css).
 */

import { useEffect, useRef, useState } from 'react'

/** After this long, show the content whether or not it was scrolled to. */
const FAILSAFE_MS = 1500

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const [armed, setArmed] = useState(false)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') return

    setArmed(true)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect() // animate once, not on every scroll past
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(node)

    const failsafe = window.setTimeout(() => {
      setShown(true)
      observer.disconnect()
    }, FAILSAFE_MS)

    return () => {
      observer.disconnect()
      window.clearTimeout(failsafe)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`${armed ? 'reveal' : ''} ${shown ? 'reveal-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}

export default Reveal
