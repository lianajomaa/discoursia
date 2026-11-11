/**
 * ABOUT  —  /about
 *
 * Opens on the navy page head, like every page other than the homepage, then
 * white and pale paper bands, then the navy closing. Same rhythm as the rest
 * of the site.
 */

import { Link } from 'react-router-dom'
import PageHead from '../components/academy/PageHead'
import markWhite from '../assets/mark-white.png'

const beliefs = [
  {
    title: 'Practical over theoretical',
    text: 'Every lesson ends with something you can apply the same day.',
  },
  {
    title: 'Short and focused',
    text: 'No filler. Courses are built to be finished, not abandoned.',
  },
  {
    title: 'Human-centred',
    text: 'Technology supports learning; it does not replace critical thinking.',
  },
  {
    title: 'Quality over quantity',
    text: 'A small number of courses done properly, rather than a large catalogue.',
  },
]

function About() {
  return (
    <>
      <PageHead
        eyebrow="About"
        title="Learning built for real life, not just the classroom."
        lead="We build short, practical courses for university students and working professionals — the skills people actually use to study, work and communicate better."
      />

      <section className="band band--surface">
        <div className="wrap split">
          <div>
            <div className="eyebrow">What is Discoursia.ai</div>
            <h2>One platform. Four skills. Real-world impact.</h2>
          </div>
          <div className="col-b">
            <p>
              AI is changing the way we study, research, work and communicate. We bring
              together AI skills, prompt engineering, research and communication to help
              people use technology more effectively.
            </p>
            <p>
              Whether you are a university student working on your first research project or
              a professional looking to work more effectively with AI, we help you turn
              knowledge into practice.
            </p>
          </div>
        </div>
      </section>

      <section className="band band--paper">
        <div className="wrap">
          <div className="eyebrow">What we believe</div>
          <h2 className="section-title">Four things we will not compromise on.</h2>

          <div className="pair">
            {beliefs.map((belief) => (
              <div key={belief.title}>
                <h3>{belief.title}</h3>
                <p>{belief.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--surface">
        <div className="wrap">
          <div className="eyebrow">Mission &amp; vision</div>
          <div className="grid grid--2" style={{ marginTop: '46px' }}>
            <div className="cell">
              <span className="idx">Our mission</span>
              <h3>
                To make AI, research and communication skills more practical, accessible and
                relevant.
              </h3>
              <p>
                We want students and professionals to feel more confident navigating an
                increasingly digital and AI-driven world.
              </p>
            </div>
            <div className="cell">
              <span className="idx">Our vision</span>
              <h3>
                A future where people do not simply use technology — they understand how to
                use it well.
              </h3>
              <p>
                AI should support human thinking, not replace it. That belief shapes every
                course and every workshop we build.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band closing">
        <div className="wrap">
          <img src={markWhite} alt="" aria-hidden="true" />
          <h2>Ready to start learning?</h2>
          <p>Browse the courses and choose where to begin.</p>
          <div className="actions">
            <Link className="btn btn--light" to="/courses">
              Browse courses<span className="arw">&rarr;</span>
            </Link>
            <Link className="btn btn--outline-light" to="/contact">
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
