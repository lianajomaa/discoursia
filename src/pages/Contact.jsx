/**
 * CONTACT  —  /contact
 *
 * A mailto link rather than a form, deliberately: a form needs a server to
 * send the message, and there isn't one yet. A form that silently discarded
 * enquiries would be worse than no form.
 *
 * Swap in a real form once the backend exists.
 */

// lucide dropped brand icons, so LinkedIn uses the generic external-link mark
import { Link } from 'react-router-dom'
import { ArrowUpRight, ExternalLink, Mail } from 'lucide-react'
import PageHead from '../components/academy/PageHead'
import Reveal from '../components/academy/Reveal'
import SectionHead from '../components/academy/SectionHead'

const EMAIL = 'janamsaab15@gmail.com'

function Contact() {
  return (
    <>
      <PageHead
        eyebrow="Contact"
        title={<>Get in <em>touch</em>.</>}
        lead="Questions about a course, enrolling, or a package for your university or organisation."
      />

      <section className="band band--surface">
        <div className="wrap">
          <SectionHead
            no="01"
            label="How to reach us"
            title={<>Two ways. Both reach a <em>person</em>.</>}
            lead="Write to us directly, or connect on LinkedIn."
          />

          <div className="reach">
            <Reveal className="fill">
              <a className="xcard" href={`mailto:${EMAIL}`}>
                <div className="top">
                  <span className="ic">
                    <Mail size={21} aria-hidden="true" />
                  </span>
                  <span className="orb" aria-hidden="true">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
                <div className="k">Email</div>
                <div className="v">{EMAIL}</div>
                <p className="s">For courses, enrolment and anything else.</p>
              </a>
            </Reveal>

            <Reveal className="fill" delay={110}>
              <a
                className="xcard"
                href="https://www.linkedin.com/in/jana-saab/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="top">
                  <span className="ic">
                    <ExternalLink size={21} aria-hidden="true" />
                  </span>
                  <span className="orb" aria-hidden="true">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
                <div className="k">LinkedIn</div>
                <div className="v">Connect with us</div>
                <p className="s">For partnerships, training and speaking.</p>
              </a>
            </Reveal>
          </div>

          <Reveal>
            <div className="b2b" style={{ marginTop: '18px' }}>
              <div>
                <h3>Buying for a team or a university?</h3>
                <p>Organisations are quoted rather than charged per seat. See what each package includes first.</p>
              </div>
              <Link className="btn btn--solid" to="/packages">
                See packages<span className="arw">&rarr;</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default Contact
