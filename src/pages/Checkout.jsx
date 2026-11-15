/**
 * CHECKOUT  —  /checkout/:planId
 *
 * This is the real checkout LAYOUT, built ahead of the payment integration so
 * the design is settled before the plumbing goes in.
 *
 * Every input is deliberately `disabled` and the page says plainly, twice,
 * that payment is not live. A page that looks like a working checkout and
 * accepts a card number while nothing is connected would let someone believe
 * they had paid. Until a provider is wired up, this collects nothing.
 *
 * WHEN PAYMENTS GO LIVE:
 *   1. Remove `disabled` from the fields and drop the <PreviewNotice /> block.
 *   2. Mount the provider's hosted fields inside `.co-card-fields` — do not
 *      hand-roll card inputs, it drags you into PCI scope for no benefit.
 *   3. Grant access on the SERVER after the provider confirms payment, via a
 *      webhook. Never from this component — the browser can be lied to.
 *
 * For Kuwait the realistic providers are MyFatoorah or Tap Payments, because
 * both support KNET, which most Kuwaiti customers expect to see. Stripe does
 * not support KNET.
 */

import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Lock, Mail, CreditCard, ShieldCheck } from 'lucide-react'
import { getPlan } from '../data/plans'
import PageHead from '../components/academy/PageHead'

/* KWD is a three-decimal currency — 1 dinar is 1000 fils. Showing 3.00 instead
   of 3.000 is the kind of detail a Kuwaiti customer notices immediately. */
function kwd(amount) {
  return `${amount.toFixed(3)} KWD`
}

function PreviewNotice() {
  return (
    <div className="co-preview">
      <strong>Payment is not live yet.</strong> This page shows how checkout will
      look. The fields below are switched off — nothing is collected, nothing is
      sent, and you cannot be charged here.
    </div>
  )
}

function Checkout() {
  const { planId } = useParams()
  const plan = getPlan(planId)

  /* unknown plan in the URL */
  if (!plan) {
    return (
      <>
        <PageHead
          eyebrow="Checkout"
          title="Package not found."
          lead="That package does not exist, or it has been renamed since the link was made."
        >
          <Link className="btn btn--light" to="/packages">
            View packages<span className="arw">&rarr;</span>
          </Link>
        </PageHead>
      </>
    )
  }

  const isFree = plan.price === 0

  /* ------------------------------------------------------------------ free */
  if (isFree) {
    return (
      <>
        <PageHead
          eyebrow="Checkout"
          title="Start learning for free."
          lead="No payment, no card, no trial that quietly turns into a subscription. Open a course and begin."
        >
          <Link className="btn btn--light" to="/courses">
            Browse courses<span className="arw">&rarr;</span>
          </Link>
          <Link className="btn btn--outline-light" to="/packages">
            Compare packages
          </Link>
        </PageHead>

        <section className="band band--surface">
          <div className="wrap">
            <div className="eyebrow">What you get on Free</div>
            <h2 className="section-title">{plan.tagline}</h2>

            <div className="grid grid--3" style={{ marginTop: '44px' }}>
              {plan.features.map((feature) => (
                <div className="cell" key={feature}>
                  <h3 style={{ fontSize: '1.2rem' }}>{feature}</h3>
                </div>
              ))}
            </div>

            <p className="section-sub" style={{ marginTop: '36px' }}>
              Not included on Free: {plan.notIncluded.join(', ').toLowerCase()}. You can
              upgrade at any point without losing your progress.
            </p>
          </div>
        </section>
      </>
    )
  }

  /* ------------------------------------------------------------------ paid */
  return (
    <>
      <PageHead
        tight
        eyebrow="Checkout"
        title="Complete your enrolment."
        lead={`You are enrolling on ${plan.name}. One payment, immediate access, cancel whenever you like.`}
      />

      <section className="band band--surface" style={{ paddingTop: 'clamp(34px, 4vw, 52px)' }}>
        <div className="wrap">
          <Link className="co-back" to="/packages">
            <ArrowLeft size={15} aria-hidden="true" />
            Back to packages
          </Link>

          <div className="checkout">
            <PreviewNotice />

            {/* ------------------------------ left: the form ------------------ */}
            <div>
              {/* step 1 */}
              <div className="co-step">
                <div className="co-step-head">
                  <span className="n">1</span>
                  <h2>Your details</h2>
                </div>

                <div className="co-fields">
                  <label className="co-field">
                    <span>Full name</span>
                    <input type="text" placeholder="Jana Saab" disabled />
                  </label>

                  <label className="co-field">
                    <span>Email address</span>
                    <input type="email" placeholder="you@example.com" disabled />
                    <small>Your receipt and certificate are sent here.</small>
                  </label>

                  <label className="co-field">
                    <span>University or organisation <em>optional</em></span>
                    <input type="text" placeholder="Kuwait University" disabled />
                  </label>
                </div>
              </div>

              {/* step 2 */}
              <div className="co-step">
                <div className="co-step-head">
                  <span className="n">2</span>
                  <h2>Payment</h2>
                </div>

                <div className="co-methods" role="group" aria-label="Payment method">
                  <label className="co-method is-on">
                    <input type="radio" name="method" defaultChecked disabled />
                    <span className="mk">KNET</span>
                    <span className="ms">Kuwaiti debit card</span>
                  </label>
                  <label className="co-method">
                    <input type="radio" name="method" disabled />
                    <span className="mk">
                      <CreditCard size={15} aria-hidden="true" /> Card
                    </span>
                    <span className="ms">Visa or Mastercard</span>
                  </label>
                </div>

                <div className="co-card-fields">
                  <label className="co-field">
                    <span>Card number</span>
                    <input type="text" inputMode="numeric" placeholder="•••• •••• •••• ••••" disabled />
                  </label>

                  <div className="co-row">
                    <label className="co-field">
                      <span>Expiry</span>
                      <input type="text" placeholder="MM / YY" disabled />
                    </label>
                    <label className="co-field">
                      <span>Security code</span>
                      <input type="text" placeholder="•••" disabled />
                    </label>
                  </div>
                </div>

                <p className="co-secure">
                  <Lock size={14} aria-hidden="true" />
                  Card details will be handled by the payment provider, never stored by
                  Discoursia.ai.
                </p>
              </div>

              {/* step 3 */}
              <div className="co-step">
                <div className="co-step-head">
                  <span className="n">3</span>
                  <h2>Confirm</h2>
                </div>

                <label className="co-check">
                  <input type="checkbox" disabled />
                  <span>
                    I agree to the <Link to="/terms">terms &amp; conditions</Link> and the{' '}
                    <Link to="/privacy">privacy policy</Link>.
                  </span>
                </label>

                <button type="button" className="btn btn--solid co-pay" disabled>
                  Pay {kwd(plan.price)}
                </button>

                <p className="co-fine">
                  Payment is not connected yet, so this button does nothing. No card details
                  have been collected on this page.
                </p>
              </div>

              {/* the honest route to actually enrolling, today */}
              <div className="b2b" style={{ marginTop: '34px' }}>
                <div>
                  <h3>Want to enrol now?</h3>
                  <p>
                    Until online payment is live, get in touch and we will arrange your
                    enrolment on {plan.name} directly.
                  </p>
                </div>
                <Link className="btn btn--solid" to="/contact">
                  <Mail size={15} aria-hidden="true" />
                  Contact us
                </Link>
              </div>
            </div>

            {/* ------------------------------ right: the summary -------------- */}
            <aside className="summary">
              <div className="summary-head">Order summary</div>

              <div className="summary-body">
                <div className="summary-plan">
                  <span className="pn">{plan.name}</span>
                  <span className="pp">{kwd(plan.price)}</span>
                </div>
                {plan.tagline ? <p className="summary-tag">{plan.tagline}</p> : null}

                <ul className="summary-list">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <div className="summary-rows">
                  <div className="summary-row">
                    <span>Subtotal</span>
                    <span>{kwd(plan.price)}</span>
                  </div>
                  <div className="summary-row">
                    <span>Tax</span>
                    <span>—</span>
                  </div>
                </div>

                <div className="summary-total">
                  <span>Total due today</span>
                  <span className="t">{kwd(plan.price)}</span>
                </div>

                <Link className="summary-change" to="/packages">
                  Change package
                </Link>
              </div>

              <div className="summary-foot">
                <ShieldCheck size={16} aria-hidden="true" />
                <span>
                  <strong>Full access immediately.</strong> Every lesson, worksheet and
                  certificate in your package, as soon as payment clears.
                </span>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

export default Checkout
