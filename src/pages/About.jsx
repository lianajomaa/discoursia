/**
 * ABOUT  —  /about
 *
 * Four numbered sections, same grid as every other page. The beliefs were
 * four stacked title-and-paragraph boxes; they are an accordion now.
 */

import { Link } from 'react-router-dom'
import PageHead from '../components/academy/PageHead'
import SectionHead from '../components/academy/SectionHead'
import markWhite from '../assets/mark-white.png'

const beliefs = [
  {
    title: 'Practical over theoretical',
    text: 'Every lesson ends with something you can apply the same day. If a concept cannot be used, it does not earn a place in the course.',
  },
  {
    title: 'Short and focused',
    text: 'No filler. Courses are built to be finished, not abandoned — which is why each one fits inside an afternoon.',
  },
  {
    title: 'Human-centred',
    text: 'Technology supports learning; it does not replace critical thinking. We teach judgement alongside the tools.',
  },
  {
    title: 'Quality over quantity',
    text: 'A small number of courses done properly, rather than a large catalogue nobody finishes.',
  },
]

function About() {
  return (
    <>
      <PageHead
        eyebrow="About"
        title="Learning built for real life, not just the classroom."
        lead="Short, practical courses for university students and working professionals — the skills people actually use to study, work and communicate."
      />

      <section className="band band--surface">
        <div className="wrap">
          <SectionHead
            no="01"
            label="The idea"
            title="Most people were never taught how to use AI well."
            lead="We teach the skills underneath it — research, judgement and clear communication — so technology makes your work better, not just faster."
          />
        </div>
      </section>

      <section className="band band--paper">
        <div className="wrap">
          <SectionHead
            no="02"
            label="What we believe"
            title="Four things we will not compromise on."
            lead="Open any one to see what it means in practice."
          />

          <div className="acc">
            {beliefs.map((belief, i) => (
              <details key={belief.title} open={i === 0}>
                <summary>
                  <span className="ix">{String(i + 1).padStart(2, '0')}</span>
                  <span className="h">{belief.title}</span>
                </summary>
                <div className="body">{belief.text}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--surface">
        <div className="wrap">
          <SectionHead
            no="03"
            label="Mission and vision"
            title="Technology should make people sharper, not lazier."
            lead="Our mission is to make AI, research and communication skills practical and accessible. Our vision is a future where people do not simply use technology — they understand how to use it well."
          />
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
