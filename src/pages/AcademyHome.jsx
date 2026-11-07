/**
 * HOMEPAGE  —  /
 *
 * A glimpse of the whole business: what Discoursia is, the four service areas,
 * corporate training, who it is for, how the learning works, what a course
 * includes, the courses themselves, the packages, the approach, and the
 * mission. Each block links deeper.
 *
 * Copy is from the Discoursia.ai content document. Styling comes from the
 * design system in index.css.
 */

import { Link } from 'react-router-dom'
import { courses, getCourseStats } from '../data/courses'
import { plans, institutions, formatPrice } from '../data/plans'
import markNavy from '../assets/mark-navy.png'
import markWhite from '../assets/mark-white.png'

const services = [
  {
    title: 'AI & Prompt Engineering',
    text: 'Write effective prompts, structure conversations with AI, refine outputs and use AI tools more strategically.',
  },
  {
    title: 'Research Skills',
    text: 'Go from an idea to a well-structured project — research questions, literature search, source evaluation and methodology.',
  },
  {
    title: 'Communication',
    text: 'Strengthen the way you write, present, collaborate and communicate in academic and professional settings.',
  },
  {
    title: 'Digital Communication',
    text: 'Understand how language, tone and platforms shape messages in an AI-driven digital world.',
  },
]

const audiences = [
  {
    tag: 'University students',
    title: 'For students who want to feel more confident.',
    text: 'From research assignments to presentations, AI tools and academic projects, Discoursia.ai helps students develop skills they can actually use.',
    to: '/students',
    cta: 'Explore student learning',
  },
  {
    tag: 'Professionals',
    title: 'For professionals who want to stay ahead.',
    text: 'Improve workplace communication, use AI more effectively, and strengthen your research and digital skills — designed around real professional needs.',
    to: '/professionals',
    cta: 'Explore professional learning',
  },
]

const steps = [
  { n: '01', title: 'Watch', text: 'Short, focused video lessons.' },
  { n: '02', title: 'Practice', text: 'Apply each concept through practical activities.' },
  { n: '03', title: 'Check', text: 'Test your understanding with short quizzes.' },
  { n: '04', title: 'Apply', text: 'Complete tasks based on realistic situations.' },
]

const included = [
  { title: 'Short video lessons', text: 'Focused lessons designed to make learning manageable.' },
  { title: 'Knowledge checks', text: 'Short quizzes that reinforce the key concepts.' },
  { title: 'Practical exercises', text: 'Apply what you learn instead of only watching videos.' },
  { title: 'Downloadable resources', text: 'Worksheets, templates and course materials.' },
  { title: 'Real-world scenarios', text: 'Practise with situations from university and the workplace.' },
  { title: 'Certificate of completion', text: 'Awarded once you finish the course requirements.' },
]

const ticker = [
  'Prompt engineering', 'Research questions', 'Source evaluation', 'AI at work',
  'Academic writing', 'Presentation skills', 'Literature search',
  'Workplace communication', 'Responsible AI',
]

function Home() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="hero">
        <img className="watermark" src={markNavy} alt="" aria-hidden="true" />
        <div className="wrap">
          <div className="eyebrow rise d1">AI · Research · Digital communication</div>

          <h1 className="rise d2">
            Learn smarter. <em>Communicate better.</em> Work with AI.
          </h1>

          <p className="lede rise d3">
            Discoursia.ai helps university students and professionals build practical skills
            in AI, prompt engineering, research and digital communication — so they can
            study, work and communicate with greater confidence.
          </p>

          <div className="actions rise d4">
            <Link className="btn btn--solid" to="/courses">
              Explore courses<span className="arw">&rarr;</span>
            </Link>
            <Link className="btn btn--ghost" to="/about">
              Explore our services
            </Link>
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

      {/* ---------------- WHAT IS ---------------- */}
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

      {/* ---------------- SERVICES ---------------- */}
      <section className="band band--paper">
        <div className="wrap">
          <div className="eyebrow">What we do</div>
          <h2 className="section-title">Learn. Research. Create. Communicate.</h2>

          <div className="grid grid--2">
            {services.map((service, i) => (
              <div className="cell" key={service.title}>
                <span className="idx">0{i + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            ))}
          </div>

          <div className="b2b" style={{ marginTop: '24px' }}>
            <div>
              <h3>Corporate training</h3>
              <p>
                Workshops built around practical workplace needs — AI at work, prompt
                engineering, ethical AI, digital and professional communication, and
                AI-supported productivity.
              </p>
            </div>
            <Link className="btn btn--solid" to="/contact">
              Talk to us about training<span className="arw">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- WHO WE HELP ---------------- */}
      <section className="band band--surface">
        <div className="wrap">
          <div className="eyebrow">Who we help</div>
          <h2 className="section-title">Built for where you are now.</h2>

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

      {/* ---------------- HOW LEARNING WORKS ---------------- */}
      <section className="band band--paper">
        <div className="wrap">
          <div className="eyebrow">How learning works</div>
          <h2 className="section-title">Learn. Practice. Apply.</h2>
          <p className="section-sub">
            Every course follows the same four-step path, so you always know where you are
            and what comes next.
          </p>

          <div className="steps">
            {steps.map((step) => (
              <div className="step" key={step.n}>
                <div className="n">{step.n}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- WHAT'S INCLUDED ---------------- */}
      <section className="band band--surface">
        <div className="wrap">
          <div className="eyebrow">What&apos;s included</div>
          <h2 className="section-title">Everything you need to learn effectively.</h2>

          <div className="grid grid--3">
            {included.map((item) => (
              <div className="cell" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- COURSES ---------------- */}
      <section className="band band--paper">
        <div className="wrap">
          <div className="eyebrow">Courses</div>
          <h2 className="section-title">Start learning.</h2>
          <p className="section-sub">Focused courses. Short lessons. Practical application.</p>

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
                    <li>{stats.quizzes} quizzes</li>
                    <li>{stats.exercises} practical exercises</li>
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

      {/* ---------------- PACKAGES ---------------- */}
      <section className="band band--surface">
        <div className="wrap">
          <div className="eyebrow">Packages</div>
          <h2 className="section-title">Choose your package.</h2>
          <p className="section-sub">Start free, or unlock full access to the courses.</p>

          <div className="plans">
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

      {/* ---------------- APPROACH ---------------- */}
      <section className="band band--paper">
        <div className="wrap split">
          <div>
            <div className="eyebrow">Our approach</div>
            <h2>We don&apos;t just teach tools. We teach you how to think with them.</h2>
          </div>
          <div className="col-b">
            <p>
              Technology changes quickly. Skills last longer. That is why our approach
              focuses on critical thinking, practical application, communication and
              responsible use of AI.
            </p>
            <p>
              We believe the best results happen when human expertise and technology work
              together.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- MISSION & VISION ---------------- */}
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

      {/* ---------------- CLOSING ---------------- */}
      <section className="band closing">
        <div className="wrap">
          <img src={markWhite} alt="" aria-hidden="true" />
          <h2>Ready to learn differently?</h2>
          <p>
            Explore our courses, services, events and resources — and find the skills you
            need for your next step.
          </p>
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
