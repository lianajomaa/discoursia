/**
 * TIER — one package card. The whole card is a link to its checkout.
 *
 * `compact` shows the first two features only: that is the glimpse used on
 * the home page. The packages page shows the full list.
 *
 * The recommended tier is navy, stands a little taller and carries the
 * badge. Which tier that is, and what the badge says, comes from plans.js
 * (`highlighted` and `badge`), not from here.
 */

import { Link } from 'react-router-dom'
import { ArrowRight, Check, Minus, Sparkles } from 'lucide-react'
import CountUp from './CountUp'
import Reveal from './Reveal'

function Tier({ plan, compact = false, delay = 0 }) {
  const best = Boolean(plan.highlighted)
  const features = compact ? plan.features.slice(0, 2) : plan.features
  const missing = compact ? [] : plan.notIncluded

  return (
    <Reveal delay={delay} className={best ? 'fill tier-wrap--best' : 'fill'}>
      <Link to={`/checkout/${plan.id}`} className={best ? 'tier tier--best' : 'tier'}>
        {best ? (
          <span className="seal-badge">
            <Sparkles size={12} aria-hidden="true" />
            {plan.badge || 'Best value'}
          </span>
        ) : null}

        <span className="name">{plan.name}</span>

        <div className="price">
          {plan.price === 0 ? (
            'Free'
          ) : (
            <>
              <CountUp to={plan.price} />
              <small>KWD</small>
            </>
          )}
        </div>

        <p className="blurb">{plan.tagline}</p>
        <div className="rule" />

        <ul>
          {features.map((feature) => (
            <li key={feature}>
              <Check size={14} aria-hidden="true" />
              {feature}
            </li>
          ))}
          {missing.map((feature) => (
            <li className="off" key={feature}>
              <Minus size={14} aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        <span className="go">
          {plan.cta}
          <span className="orb" aria-hidden="true">
            <ArrowRight size={16} />
          </span>
        </span>
      </Link>
    </Reveal>
  )
}

export default Tier
