/**
 * PACKAGES  —  /packages
 *
 * The subscription packages on their own page, as a visitor comparing prices
 * expects. The same block also appears as a section on the homepage.
 */

import { Link } from 'react-router-dom'
import { plans, institutions } from '../data/plans'

function Packages() {
  return (
    <>
      <section className="band band--surface" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="eyebrow">Packages</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
            Choose your package.
          </h1>
          <p className="section-sub">
            Start free, or unlock full access to every course, worksheet and certificate.
          </p>
        </div>
      </section>

      <section className="band band--surface">
        <div className="wrap">
          <div className="plans" style={{ marginTop: '12px' }}>
            {plans.map((plan) => (
              <div
                className={`plan ${plan.highlighted ? 'plan--featured' : ''}`}
                key={plan.id}
              >
                <span className="name">{plan.name}</span>

                <div className="price">
                  {plan.price === 0 ? 'Free' : plan.price}
                  {plan.price !== 0 && <small>KWD</small>}
                </div>

                {plan.tagline && (
                  <p
                    style={{
                      marginTop: '12px',
                      fontSize: '14.5px',
                      color: 'var(--muted)',
                      fontWeight: 300,
                    }}
                  >
                    {plan.tagline}
                  </p>
                )}

                <div className="rule" />

                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                  {plan.notIncluded.map((feature) => (
                    <li className="off" key={feature}>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  className={`btn ${plan.highlighted ? 'btn--solid' : 'btn--ghost'}`}
                  to={`/checkout/${plan.id}`}
                >
                  {plan.cta}
                  {plan.highlighted && <span className="arw">&rarr;</span>}
                </Link>
              </div>
            ))}
          </div>

          <div className="b2b">
            <div>
              <h3>{institutions.title}</h3>
              <p>{institutions.description}</p>
            </div>
            <Link className="btn btn--solid" to="/contact">
              {institutions.cta}<span className="arw">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* questions people actually ask before paying */}
      <section className="band band--paper">
        <div className="wrap">
          <div className="eyebrow">Before you choose</div>
          <h2 className="section-title">Good to know.</h2>

          <div className="grid grid--3">
            <div className="cell">
              <h3>Start free, upgrade later</h3>
              <p>
                The free package gives you selected lessons and previews, so you can see how
                a course works before paying for anything.
              </p>
            </div>
            <div className="cell">
              <h3>Certificates</h3>
              <p>
                Paid packages include a Certificate of Completion once you finish all
                lessons and pass the final assessment.
              </p>
            </div>
            <div className="cell">
              <h3>Teams and universities</h3>
              <p>
                Organisations are quoted rather than charged per seat. Tell us your team
                size and what you need.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Packages
