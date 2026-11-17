/**
 * PACKAGES  —  /packages
 *
 * The full comparison. The home and course pages show the same cards in
 * their compact form; this page lists everything each one includes.
 */

import { Link } from 'react-router-dom'
import { ArrowUpRight, Award, Building2, ShieldCheck } from 'lucide-react'
import { plans, institutions } from '../data/plans'
import PageHead from '../components/academy/PageHead'
import Reveal from '../components/academy/Reveal'
import SectionHead from '../components/academy/SectionHead'
import Tier from '../components/academy/Tier'

const notes = [
  {
    icon: ShieldCheck,
    title: 'Start free, upgrade later',
    text: 'The free package gives you selected lessons and previews, so you can see how a course works before paying for anything.',
    to: '/checkout/free',
  },
  {
    icon: Award,
    title: 'Certificates',
    text: 'Paid packages include a Certificate of Completion once you finish all lessons and pass the final assessment.',
    to: '/courses',
  },
  {
    icon: Building2,
    title: 'Teams and universities',
    text: 'Organisations are quoted rather than charged per seat. Tell us your team size and what you need.',
    to: '/contact',
  },
]

function Packages() {
  return (
    <>
      <PageHead
        eyebrow="Packages"
        title={<>Choose your <em>package</em>.</>}
        lead="Start free, or unlock full access to every course, worksheet and certificate."
      />

      <section className="band band--surface">
        <div className="wrap">
          <SectionHead
            no="01"
            label="The packages"
            title={<>Four ways <em>in</em>.</>}
            lead="Every paid package includes the certificate. No trial that quietly becomes a subscription."
          />

          <div className="tiers">
            {plans.map((plan, i) => (
              <Tier key={plan.id} plan={plan} delay={i * 90} />
            ))}
          </div>

          <Reveal>
            <div className="b2b" style={{ marginTop: '44px' }}>
              <div>
                <h3>{institutions.title}</h3>
                <p>{institutions.description}</p>
              </div>
              <Link className="btn btn--solid" to="/contact">
                {institutions.cta}<span className="arw">&rarr;</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* the questions people actually ask before paying */}
      <section className="band band--paper">
        <div className="wrap">
          <SectionHead
            no="02"
            label="Before you choose"
            title={<>Good to <em>know</em>.</>}
            lead="The three questions people ask most before paying."
          />

          <div className="pillars">
            {notes.map((note, i) => (
              <Reveal key={note.title} delay={i * 90} className="fill">
                <Link to={note.to} className="xcard pillar">
                  <div className="top">
                    <span className="ic">
                      <note.icon size={21} aria-hidden="true" />
                    </span>
                    <span className="orb" aria-hidden="true">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                  <h3>{note.title}</h3>
                  <p>{note.text}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Packages
