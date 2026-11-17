/**
 * ROTATOR — the outcome lines under the hero headline.
 *
 * It never stops. A visitor can swipe it or tap a bar, and it simply carries
 * on from wherever they put it. Hovering holds the current line while it is
 * being read; moving away restarts its timer.
 *
 * Pointer events cover mouse, touch and pen in one code path.
 */

import { useCallback, useEffect, useRef, useState } from 'react'

const INTERVAL = 4000
const SWIPE = 40 // px before a drag counts as a swipe

function Rotator({ lines }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  // bumping `run` restarts the timer and the bar fill, even on the same line
  const [run, setRun] = useState(0)
  const startX = useRef(null)
  const viewRef = useRef(null)

  const go = useCallback(
    (next) => {
      setIndex((next + lines.length) % lines.length)
      setRun((n) => n + 1)
    },
    [lines.length],
  )

  useEffect(() => {
    if (paused) return undefined
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined

    const id = setTimeout(() => go(index + 1), INTERVAL)
    return () => clearTimeout(id)
  }, [paused, index, run, go])

  function onPointerDown(event) {
    startX.current = event.clientX
    viewRef.current?.setPointerCapture?.(event.pointerId)
  }

  function onPointerUp(event) {
    if (startX.current === null) return
    const dx = event.clientX - startX.current
    startX.current = null
    if (Math.abs(dx) > SWIPE) go(index + (dx < 0 ? 1 : -1))
  }

  return (
    <div
      className={paused ? 'rot paused' : 'rot'}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        setPaused(false)
        setRun((n) => n + 1)
      }}
    >
      <ul
        className="rot-view"
        ref={viewRef}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => {
          startX.current = null
        }}
      >
        {lines.map((line, i) => (
          <li
            key={line}
            className={i === index ? 'on' : i < index ? 'out' : undefined}
            aria-hidden={i !== index}
          >
            {line}
          </li>
        ))}
      </ul>

      <div className="rot-bars">
        {lines.map((line, i) => (
          <button
            // the key changes with `run`, which remounts the active bar and
            // restarts its fill animation from zero
            key={i === index ? `${line}-${run}` : line}
            type="button"
            aria-label={`Show line ${i + 1}`}
            className={i === index ? 'on' : i < index ? 'done' : undefined}
            onClick={() => go(i)}
          >
            <i />
          </button>
        ))}
      </div>
    </div>
  )
}

export default Rotator
