/**
 * HOMEPAGE  —  /
 *
 * A glimpse of the whole business in seven numbered sections. Every section
 * opens on a rule with a number and a label, so the page reads as one
 * document rather than a stack of blocks.
 *
 * Rules this page follows:
 *   · one idea per section, said once
 *   · anything that was a title with a paragraph under it is an accordion
 *   · packages are a condensed strip here; the full cards live on /packages
 *   · navy lands three times — top, middle, close
 */

import { Link } from 'react-router-dom'
import { courses, getCourseStats } from '../data/courses'
import { plans, institutions } from '../data/plans'
import markWhite from '../assets/mark-white.png'
import Rotator from '../components/academy/Rotator'
import SectionHead from '../components/academy/SectionHead'

const outcomes = [
  'Write a research question you can actually answer.',
  'Turn a vague prompt into one that gets usable output.',
  'Tell a strong source from a weak one, quickly.',
  'Present your work so people remember it.',
]

const steps = [
  { n: '01', title: 'Watch', short: 'Short video lessons' },
  { n: '02', title: 'Practice', short: 'Hands-on activities' },
  { n: '03', title: 'Check', short: 'Short quizzes' },
  { n: '04', title: 'Apply', short: 'Real scenarios' },
]

const disciplines = [
  {
    title: 'AI & Prompt Engineering',
    text: 'Write effective prompts, structure conversations with AI, and refine outputs — so you get usable work back instead of generic text.',
  },
  {
    title: 'Research Skills',
    text: 'Go from an idea to a well-structured project: research questions, literature search, source evaluation and methodology.',
  },
  {
    title: 'Communication',
    text: 'Strengthen how you write, present, collaborate and communicate in academic and professional settings.',
  },
  {
    title: 'Digital Communication',
    text: 'Understand how language, tone and platform shape a message in an AI-driven digital world.',
  },
  {
    title: 'Corporate training',
    text: 'Workshops built around real workplace needs — AI at work, prompt engineering, ethical AI and professional communication. Delivered for teams and institutions.',
  },
]

const audiences = [
  {
    tag: 'University students',
    title: 'Feel confident in your own work.',
    text: 'Research assignments, presentations, AI tools and academic projects — skills you can use this semester.',
    to: '/students',
    cta: 'Explore student learning',
  },
  {
    tag: 'Professionals',
    title: 'Stay ahead at work.',
    text: 'Better workplace communication, sharper AI use, stronger research and digital skills.',
    to: '/professionals',
    cta: 'Explore professional learning',
  },
]

const included = [
  { title: 'Short video lessons', text: 'Focused, so a course gets finished.' },
  { title: 'Knowledge checks', text: 'Quizzes that lock in the concepts.' },
  { title: 'Practical exercises', text: 'Apply it, don’t just watch it.' },
  { title: 'Downloadable resources', text: 'Worksheets, templates, materials.' },
  { title: 'Real-world scenarios', text: 'Situations from study and work.' },
  { title: 'Certificate', text: 'Awarded when you finish.' },
]

const ticker = [
  'Prompt engineering', 'Research questions', 'Source evaluation', 'AI at work',
  'Academic writing', 'Presentation skills', 'Literature search',
  'Workplace communication', 'Responsible AI',
]

// one line each, so the condensed strip stays a strip
const blurbs = {
  free: 'Selected lessons and course previews.',
  'basic-student': 'One full course, with certificate.',
  'pro-student': 'Both paths, all modules, every certificate.',
  'premium-student': 'Everything, plus new courses as released.',
}

function Home() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="hero">
        <img className="watermark" src={markWhite} alt="" aria-hidden="true" />
        <div className="wrap hero-split">
          <div>
            <div className="eyebrow rise d1">AI · Research · Digital communication</div>

            <h1 className="rise d2">
              Learn smarter. <em>Communicate better.</em> Work with AI.
            </h1>

            <div className="rise d3">
              <Rotator lines={outcomes} />
            </div>

            <div className="actions rise d4">
              <Link className="btn btn--light" to="/courses">
                Explore courses<span className="arw">&rarr;</span>
              </Link>
              <Link className="btn btn--outline-light" to="/packages">
                See packages
              </Link>
            </div>

            <div className="proof rise d4">
              <span>Self-paced</span>
              <span>Start any time</span>
              <span>Certificate included</span>
            </div>
          </div>

          <div className="frame rise d4">
            <div className="frame-bar">
              <i /><i /><i />
              <span>How every course works</span>
            </div>
            <div className="wf">
              <div className="wf-row">
                {steps.map((step) => (
                  <div className="wf-step" key={step.n}>
                    <div className="wf-line" />
                    <div className="wf-dot">{step.n}</div>
                    <div className="wf-tx">
                      <h4>{step.title}</h4>
                      <p>{step.short}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="wf-out">
                <span className="seal">&#10003;</span>
                <span>
                  <span className="t">Certificate of Completion</span>
                  <br />
                  <span className="s">Issued once all four are done</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- TICKER ---------------- */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-row">
          {[...ticker, ...ticker].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>

      {/* ---------------- 01 THE IDEA ---------------- */}
      <section className="band band--surface">
        <div className="wrap">
          <SectionHead
            no="01"
            label="The idea"
            title="Most people were never taught how to use AI well."
            lead="We teach the skills underneath it — research, judgement and clear communication — so technology makes your work better, not just faster."
          >
            <Link className="lead-link" to="/about">
              More about us<span className="arw">&rarr;</span>
            </Link>
          </SectionHead>
        </div>
      </section>

      {/* ---------------- 02 DISCIPLINES ---------------- */}
      <section className="band band--paper">
        <div className="wrap">
          <SectionHead
            no="02"
            label="Disciplines"
            title="Four disciplines, one way of thinking."
            lead="Open any one to see what it covers."
          />

          <div className="acc">
            {disciplines.map((item, i) => (
              <details key={item.title} open={i === 0}>
                <summary>
                  <span className="ix">{String(i + 1).padStart(2, '0')}</span>
                  <span className="h">{item.title}</span>
                </summary>
                <div className="body">{item.text}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 03 WHO IT IS FOR ---------------- */}
      <section className="band band--surface">
        <div className="wrap">
          <SectionHead
            no="03"
            label="Who it is for"
            title="Built for where you are now."
            lead="Two paths. Same standard of teaching, different starting point."
          />

          <div className="aud">
            {audiences.map((audience) => (
              <Link to={audience.to} key={audience.tag}>
                <span className="tag">{audience.tag}</span>
                <h3>{audience.title}</h3>
                <p>{audience.text}</p>
                <span className="more">
                  {audience.cta} <span className="arw">&rarr;</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 04 INSIDE EVERY COURSE (navy, mid-page) ---------- */}
      <section className="band band--navy">
        <div className="wrap">
          <SectionHead
            no="04"
            label="Inside every course"
            title="Everything you need. Nothing you don't."
            lead="The same six things in every course, so you always know what you are getting."
          />

          <div className="grid grid--3 grid--onnavy">
            {included.map((item) => (
              <div className="cell" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 05 COURSES ---------------- */}
      <section className="band band--surface">
        <div className="wrap">
          <SectionHead
            no="05"
            label="Courses"
            title="Two courses. Both finishable in an afternoon."
            lead="Short lessons, real exercises, a certificate at the end."
          />

          <div className="courses">
            {courses.map((course) => {
              const stats = getCourseStats(course)
              return (
                <article className="course" key={course.slug}>
                  <span className="aud-tag">
                    {course.audience === 'students' ? 'University students' : 'Professionals'}
                  </span>
                  <h3>{course.title}</h3>
                  <p className="desc">{course.description}</p>

                  <ul className="meta">
                    <li>{course.level}</li>
                    <li>{course.duration.replace('Approximately', 'About')}</li>
                    <li>{stats.lessons} lessons</li>
                    <li>Certificate</li>
                  </ul>

                  <Link className="btn btn--ghost" to={`/courses/${course.slug}`}>
                    View course<span className="arw">&rarr;</span>
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---------------- 06 PACKAGES (condensed) ---------------- */}
      <section className="band band--paper">
        <div className="wrap">
          <SectionHead
            no="06"
            label="Packages"
            title="Start free. Upgrade when it is worth it."
            lead="No trial that quietly becomes a subscription."
          />

          <div className="pk">
            {plans.map((plan) => (
              <Link
                key={plan.id}
                to={`/checkout/${plan.id}`}
                className={plan.highlighted ? 'best' : undefined}
              >
                {plan.highlighted ? <span className="flag">Most chosen</span> : null}
                <span className="n">{plan.name.replace(' Student', '')}</span>
                <div className="v">
                  {plan.price}
                  <small>KWD</small>
                </div>
                <p className="d">{blurbs[plan.id]}</p>
              </Link>
            ))}
          </div>

          <div className="pk-foot">
            <p>Universities and organisations are priced separately.</p>
            <Link className="btn btn--solid" to="/packages">
              Compare all packages<span className="arw">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- 07 OUR THINKING ---------------- */}
      <section className="band band--surface">
        <div className="wrap">
          <SectionHead
            no="07"
            label="Our thinking"
            title="We teach you how to think with the tools."
            lead="Technology changes quickly; judgement lasts. AI should support human thinking, not replace it — and that belief shapes every course we build."
          />
        </div>
      </section>

      {/* ---------------- CLOSING ---------------- */}
      <section className="band closing">
        <div className="wrap">
          <img src={markWhite} alt="" aria-hidden="true" />
          <h2>Ready to learn differently?</h2>
          <p>Explore the courses and find the skills you need for your next step.</p>
          <div className="actions">
            <Link className="btn btn--light" to="/courses">
              Start exploring<span className="arw">&rarr;</span>
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

export default Home
