/**
 * REVEAL — fades a block up into place the first time it scrolls into view.
 *
 * The hidden state is applied by this component, not written into the page,
 * so if the script never runs the content is simply visible. It also shows
 * immediately when the browser has no IntersectionObserver, or the visitor
 * has asked for reduced motion.
 *
 * `delay` (ms) staggers siblings: <Reveal delay={i * 90}>.
 */

import { useEffect, useRef, useState } from 'react'

// True when there is nothing to animate: reduced motion, or no observer.
function skipMotion() {
  return (
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ||
    !('IntersectionObserver' in window)
  )
}

function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)
  // decided once, up front, so a visitor who cannot be animated for never
  // gets a hidden frame first
  const [shown, setShown] = useState(skipMotion)

  useEffect(() => {
    const node = ref.current
    if (!node || shown) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [shown])

  return (
    <Tag
      ref={ref}
      className={`rv${shown ? ' in' : ''}${className ? ` ${className}` : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default Reveal
