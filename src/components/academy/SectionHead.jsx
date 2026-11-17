/**
 * SECTION HEAD — the numbered rule every section opens with.
 *
 *   ──────────────────────────────────────────────────
 *   01 | THE IDEA                         ABOUT US (→)
 *
 *   Big title here.              Short lead here.
 *
 * Pass `to` and the whole head becomes one click target: a single real <a>
 * on the title, stretched over the block. Not a <div onClick>, which
 * keyboards and screen readers cannot use; not everything wrapped in an
 * anchor, which would nest links.
 *
 * A head with `to` must not hold its own links in `children` — the stretched
 * overlay would swallow them. Put those in the body underneath.
 *
 * `title` may be a string or JSX, so a phrase can be set in <em>.
 */

import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

function SectionHead({ no, label, title, lead, to, go = 'View page', children }) {
  return (
    <Reveal>
      <div className={to ? 'sec sec--link' : 'sec'}>
        <div className="sec-meta">
          {no ? <span className="no">{no}</span> : null}
          {no ? <span className="bar" aria-hidden="true" /> : null}
          <span className="lb">{label}</span>
          {to ? (
            <span className="goto" aria-hidden="true">
              {go}
              <span className="orb">
                <ArrowRight size={14} />
              </span>
            </span>
          ) : null}
        </div>

        <h2 className="title">
          {to ? (
            <Link className="sec-hit" to={to}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>

        {lead || children ? (
          <div className="sec-aside">
            {lead ? <p className="lead">{lead}</p> : null}
            {children}
          </div>
        ) : null}
      </div>
    </Reveal>
  )
}

export default SectionHead
