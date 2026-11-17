/**
 * EXPLORER — a list on the left, a live navy panel on the right.
 *
 * Hovering or focusing a row previews it in the panel; clicking the row goes
 * to its page. Because the panel is a fixed size, nothing changes height and
 * the page never jumps under the cursor — the usual problem with accordions
 * that open on hover.
 *
 * On a phone there is no hover, so the same items render as a tap-to-open
 * accordion with the link inside each one.
 */

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function Explorer({ items, kicker = 'Discipline' }) {
  const [active, setActive] = useState(0)
  const current = items[active]
  const Icon = current.icon

  return (
    <>
      {/* desktop */}
      <div className="exp">
        <div className="exp-list">
          {items.map((item, i) => (
            <Link
              key={item.title}
              to={item.to}
              className={i === active ? 'on' : undefined}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <span className="ix">{String(i + 1).padStart(2, '0')}</span>
              <span className="h">{item.title}</span>
              <ArrowRight className="ar" size={17} aria-hidden="true" />
            </Link>
          ))}
        </div>

        <div className="exp-panel">
          <div className="glow" aria-hidden="true" />
          {/* the key remounts the body, which replays its entrance */}
          <div className="exp-body" key={current.title}>
            <span className="ic">
              <Icon size={23} aria-hidden="true" />
            </span>
            <span className="k">
              {kicker} {String(active + 1).padStart(2, '0')}
            </span>
            <h3>{current.title}</h3>
            <p>{current.text}</p>
            <span className="spacer" />
            <Link className="btn btn--light btn--sm" to={current.to}>
              {current.cta}
              <span className="arw">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>

      {/* phone */}
      <div className="acc acc--mobile">
        {items.map((item, i) => (
          <details key={item.title} open={i === 0}>
            <summary>
              <span className="ix">{String(i + 1).padStart(2, '0')}</span>
              <span className="h">{item.title}</span>
            </summary>
            <div className="body">
              {item.text}
              <br />
              <Link to={item.to}>
                {item.cta} <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </details>
        ))}
      </div>
    </>
  )
}

export default Explorer
