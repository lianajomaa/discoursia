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
import { Mail, ExternalLink } from 'lucide-react'
import PageHead from '../components/academy/PageHead'

const EMAIL = 'janamsaab15@gmail.com'

function Contact() {
  return (
    <>
      <PageHead
        eyebrow="Contact"
        title="Get in touch."
        lead="Questions about a course, enrolling, or a package for your university or organisation? Send us a message and we will come back to you."
      />

      <section className="band band--surface">
        <div className="wrap">
          <div className="eyebrow">How to reach us</div>
          <h2 className="section-title">Two ways, both go to a person.</h2>

          <div className="rows">
            <a href={`mailto:${EMAIL}`}>
              <Mail size={20} className="ico" aria-hidden="true" />
              <span>
                <span className="k">Email</span>
                <span className="v">{EMAIL}</span>
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/jana-saab/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={20} className="ico" aria-hidden="true" />
              <span>
                <span className="k">LinkedIn</span>
                <span className="v">Connect with us</span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
