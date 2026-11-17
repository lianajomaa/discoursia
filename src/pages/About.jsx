/**
 * ABOUT  —  /about
 *
 * Short banner, three numbered sections, a quote, the close. Same structure
 * and the same card behaviour as every other page.
 */

import { Link } from 'react-router-dom'
import {
  ArrowRight, ArrowUpRight, Award, MessagesSquare, Scale, Search, Target, Timer, Users,
} from 'lucide-react'
import PageHead from '../components/academy/PageHead'
import Reveal from '../components/academy/Reveal'
import SectionHead from '../components/academy/SectionHead'
import markWhite from '../assets/mark-white.png'

const pillars = [
  { icon: Search, title: 'Research', text: 'Ask better questions, and judge what you find.', to: '/courses/academic-research-writing' },
  { icon: Scale, title: 'Judgement', text: 'Know when to trust a tool — and when not to.', to: '/courses' },
  { icon: MessagesSquare, title: 'Communication', text: 'Say it clearly, to people and to machines.', to: '/professionals' },
]

const beliefs = [
  { icon: Target, title: 'Practical over theoretical', text: 'Every lesson ends with something you can apply the same day.', to: '/courses' },
  { icon: Timer, title: 'Short and focused', text: 'No filler. Courses are built to be finished, not abandoned.', to: '/courses' },
  { icon: Users, title: 'Human-centred', text: 'Technology supports learning; it does not replace thinking.', to: '/students' },
  { icon: Award, title: 'Quality over quantity', text: 'A few courses done properly, not a catalogue nobody finishes.', to: '/packages' },
]

function About() {
  return (
    <>
      <PageHead
        eyebrow="About"
        title={<>Learning built for real life, not just the <em>classroom</em>.</>}
        lead="Short, practical courses for university students and working professionals."
      />

      <section className="band band--surface">
        <div className="wrap">
          <SectionHead
            no="01"
            label="The idea"
            title={<>Most people were never taught how to use AI <em>well</em>.</>}
            lead="We teach the skills underneath it — research, judgement and clear communication — so technology makes your work better, not just faster."
          />

          <div className="pillars">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 90} className="fill">
                <Link to={pillar.to} className="xcard pillar">
                  <div className="top">
                    <span className="ic">
                      <pillar.icon size={21} aria-hidden="true" />
                    </span>
                    <span className="orb" aria-hidden="true">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--paper">
        <div className="wrap">
          <SectionHead
            no="02"
            label="What we believe"
            to="/courses"
            go="See courses"
            title={<>Four things we will <em>not</em> compromise on.</>}
            lead="They decide what goes into a course, and what gets left out."
          />

          <div className="pillars pillars--4">
            {beliefs.map((belief, i) => (
              <Reveal key={belief.title} delay={i * 80} className="fill">
                <Link to={belief.to} className="xcard pillar">
                  <div className="top">
                    <span className="ic">
                      <belief.icon size={21} aria-hidden="true" />
                    </span>
                    <span className="orb" aria-hidden="true">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                  <h3>{belief.title}</h3>
                  <p>{belief.text}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--surface">
        <div className="wrap">
          <SectionHead
            no="03"
            label="Mission and vision"
            title={<>Technology should make people <em>sharper</em>, not lazier.</>}
            lead="Where we are going, and what we do every day to get there."
          />

          <div className="duo">
            <Reveal className="fill">
              <Link to="/courses" className="xcard">
                <span className="k">Our mission</span>
                <h3>
                  To make AI, research and communication skills practical, accessible and
                  relevant.
                </h3>
                <p>
                  So students and professionals feel confident in an increasingly digital,
                  AI-driven world.
                </p>
                <span className="more">
                  See the courses
                  <span className="orb" aria-hidden="true">
                    <ArrowRight size={16} />
                  </span>
                </span>
              </Link>
            </Reveal>
            <Reveal className="fill" delay={110}>
              <Link to="/contact" className="xcard">
                <span className="k">Our vision</span>
                <h3>
                  A future where people do not simply use technology — they understand how to
                  use it well.
                </h3>
                <p>
                  AI should support human thinking, not replace it. That belief shapes every
                  course and workshop.
                </p>
                <span className="more">
                  Work with us
                  <span className="orb" aria-hidden="true">
                    <ArrowRight size={16} />
                  </span>
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="closing">
        <div className="glow" aria-hidden="true" />
        <div className="wrap">
          <img src={markWhite} alt="" aria-hidden="true" />
          <h2>
            Ready to start <em>learning</em>?
          </h2>
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
