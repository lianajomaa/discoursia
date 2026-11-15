/**
 * ROTATOR — the outcome lines under the hero headline.
 *
 * Plays on its own, but a visitor can take over: drag left or right, or tap a
 * bar. The moment they do, auto-play stops for good — nothing is more
 * irritating than a carousel that yanks itself forward while you are reading.
 *
 * Pointer events cover mouse, touch and pen in one code path, so there is no
 * separate touch handling to keep in sync.
 */

import { useCallback, useEffect, useRef, useState } from 'react'

const INTERVAL = 4000
const SWIPE = 40 // px before a drag counts as a swipe

function Rotator({ lines }) {
  const [index, setIndex] = useState(0)
  const [auto, setAuto] = useState(true)
  const [paused, setPaused] = useState(false)
  const startX = useRef(null)
  const viewRef = useRef(null)

  const go = useCallback(
    (next) => setIndex((next + lines.length) % lines.length),
    [lines.length],
  )

  useEffect(() => {
    if (!auto || paused) return undefined
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined

    const id = setTimeout(() => go(index + 1), INTERVAL)
    return () => clearTimeout(id)
  }, [auto, paused, index, go])

  function takeOver(next) {
    setAuto(false)
    go(next)
  }

  function onPointerDown(event) {
    startX.current = event.clientX
    viewRef.current?.setPointerCapture?.(event.pointerId)
  }

  function onPointerUp(event) {
    if (startX.current === null) return
    const dx = event.clientX - startX.current
    startX.current = null
    if (Math.abs(dx) > SWIPE) takeOver(index + (dx < 0 ? 1 : -1))
  }

  return (
    <div className="rot">
      <ul
        className="rot-view"
        ref={viewRef}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => { startX.current = null }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
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
            key={line}
            type="button"
            aria-label={`Show line ${i + 1}`}
            className={i === index ? (auto && !paused ? 'on' : 'done') : i < index ? 'done' : undefined}
            onClick={() => takeOver(i)}
          >
            <i />
          </button>
        ))}
      </div>

      <p className="rot-hint">Swipe, or tap a bar</p>
    </div>
  )
}

export default Rotator
