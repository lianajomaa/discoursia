/**
 * HOMEPAGE  —  /
 *
 * A short landing page: a glimpse of each part of the business, and a way
 * through to the page that holds the rest. Courses and the full "inside every
 * course" list live on their own pages now, not here.
 *
 * Rules this page follows:
 *   · the banner is short — the first section is visible without scrolling
 *   · one idea per section, said once
 *   · everything that looks clickable is, and goes to its own page
 *   · navy appears at the top and at the close, and inside one panel
 */

import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, ArrowUpRight, Briefcase, Building2, Check, Globe,
  GraduationCap, MessagesSquare, Scale, Search, Sparkles,
} from 'lucide-react'
import { plans } from '../data/plans'
import markWhite from '../assets/mark-white.png'
import Explorer from '../components/academy/Explorer'
import Reveal from '../components/academy/Reveal'
import Rotator from '../components/academy/Rotator'
import SectionHead from '../components/academy/SectionHead'
import Tier from '../components/academy/Tier'

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

const pillars = [
  { icon: Search, title: 'Research', text: 'Ask better questions, and judge what you find.' },
  { icon: Scale, title: 'Judgement', text: 'Know when to trust a tool — and when not to.' },
  { icon: MessagesSquare, title: 'Communication', text: 'Say it clearly, to people and to machines.' },
]

const disciplines = [
  {
    icon: Sparkles,
    title: 'AI & Prompt Engineering',
    text: 'Write effective prompts, structure conversations with AI, and refine outputs — so you get usable work back instead of generic text.',
    to: '/courses/prompt-engineering',
    cta: 'See the course',
  },
  {
    icon: Search,
    title: 'Research Skills',
    text: 'Go from an idea to a well-structured project: research questions, literature search, source evaluation and methodology.',
    to: '/courses/academic-research-writing',
    cta: 'See the course',
  },
  {
    icon: MessagesSquare,
    title: 'Communication',
    text: 'Strengthen how you write, present, collaborate and communicate in academic and professional settings.',
    to: '/professionals',
    cta: 'For professionals',
  },
  {
    icon: Globe,
    title: 'Digital Communication',
    text: 'Understand how language, tone and platform shape a message in an AI-driven digital world.',
    to: '/about',
    cta: 'Our approach',
  },
  {
    icon: Building2,
    title: 'Corporate training',
    text: 'Workshops built around real workplace needs — AI at work, prompt engineering, ethical AI and professional communication, for teams and institutions.',
    to: '/contact',
    cta: 'Talk to us',
  },
]

const audiences = [
  {
    icon: GraduationCap,
    tag: 'University students',
    title: 'Feel confident in your own work.',
    text: 'Research assignments, presentations, AI tools and academic projects — skills you can use this semester.',
    to: '/students',
    cta: 'Explore student learning',
  },
  {
    icon: Briefcase,
    tag: 'Professionals',
    title: 'Stay ahead at work.',
    text: 'Better workplace communication, sharper AI use, stronger research and digital skills.',
    to: '/professionals',
    cta: 'Explore professional learning',
  },
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
        <div className="glow" aria-hidden="true" />
        <div className="wrap">
          <div className="kicker rise d1">AI · Research · Digital communication</div>

          {/* three spans: one line on a desktop, one sentence per line on a phone */}
          <h1>
            <span>Learn smarter.</span>{' '}
            <span>
              <em>Communicate better.</em>
            </span>{' '}
            <span>Work with AI.</span>
          </h1>

          <p className="tagline rise d3">From research to real insights</p>
          <p className="tagsub rise d3">
            Discoursia.ai bridges the gap between research and business.
          </p>

          <div className="rise d4">
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

      {/* ---------------- HOW EVERY COURSE WORKS ---------------- */}
      <Link className="how" to="/courses" aria-label="How every course works — see the courses">
        <div className="wrap">
          <div className="how-lb">How every course works</div>
          <div className="how-steps">
            {/* kept flat (a Fragment, no wrapper): the reveal order is driven by
                each node's position among its siblings */}
            {steps.map((step, i) => (
              <Fragment key={step.n}>
                <div className="hs">
                  <span className="dot">{step.n}</span>
                  <div className="tx">
                    <h4>{step.title}</h4>
                    <p>{step.short}</p>
                  </div>
                </div>
                <span className={`hl l${i + 1}`} aria-hidden="true" />
              </Fragment>
            ))}
            <div className="hs hs--cert">
              <span className="dot">
                <Check size={15} aria-hidden="true" />
              </span>
              <div className="tx">
                <h4>Certificate of Completion</h4>
                <p>Once all four are done</p>
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* ---------------- 01 THE IDEA ---------------- */}
      <section className="band band--paper">
        <div className="wrap">
          <SectionHead
            no="01"
            label="The idea"
            to="/about"
            go="About us"
            title={<>Most people were never taught how to use AI <em>well</em>.</>}
            lead="We teach the skills underneath it — research, judgement and clear communication — so technology makes your work better, not just faster."
          />

          <div className="pillars">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 90} className="fill">
                <Link to="/about" className="xcard pillar">
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

      {/* ---------------- 02 DISCIPLINES ---------------- */}
      <section className="band band--surface">
        <div className="wrap">
          <SectionHead
            no="02"
            label="Disciplines"
            to="/courses"
            go="All courses"
            title={<>Four disciplines, <em>one</em> way of thinking.</>}
            lead="See what each one covers, then go straight to it."
          />

          <Reveal>
            <Explorer items={disciplines} />
          </Reveal>
        </div>
      </section>

      {/* ---------------- 03 WHO IT IS FOR ---------------- */}
      <section className="band band--paper">
        <div className="wrap">
          <SectionHead
            no="03"
            label="Who it is for"
            title={<>Built for where you are <em>now</em>.</>}
            lead="Two paths. Same standard of teaching, different starting point."
          />

          <div className="aud">
            {audiences.map((audience, i) => (
              <Reveal key={audience.tag} delay={i * 110} className="fill">
                <Link to={audience.to}>
                  <div className="top">
                    <span className="tag">{audience.tag}</span>
                    <span className="ic">
                      <audience.icon size={21} aria-hidden="true" />
                    </span>
                  </div>
                  <h3>{audience.title}</h3>
                  <p>{audience.text}</p>
                  <span className="more">
                    {audience.cta}
                    <span className="orb" aria-hidden="true">
                      <ArrowRight size={16} />
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 04 PACKAGES (a glimpse) ---------------- */}
      <section className="band band--surface">
        <div className="wrap">
          <SectionHead
            no="04"
            label="Packages"
            to="/packages"
            go="Compare all"
            title={<>Start free. Upgrade when it is <em>worth it</em>.</>}
            lead="No trial that quietly becomes a subscription."
          />

          <div className="tiers">
            {plans.map((plan, i) => (
              <Tier key={plan.id} plan={plan} compact delay={i * 90} />
            ))}
          </div>

          <Reveal className="tiers-foot">
            <p>Universities and organisations are priced separately.</p>
            <Link className="btn btn--solid" to="/packages">
              Compare all packages<span className="arw">&rarr;</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------- 05 OUR THINKING ---------------- */}
      <section className="band band--tint">
        <div className="wrap">
          <Reveal className="quote">
            <span className="mark" aria-hidden="true">&ldquo;</span>
            <blockquote>
              We teach you how to think <em>with</em> the tools.
            </blockquote>
            <p className="sub">
              Technology changes quickly; judgement lasts. AI should support human thinking,
              not replace it — and that belief shapes every course we build.
            </p>
            <Link className="link" to="/about">
              Our thinking
              <span className="orb" aria-hidden="true">
                <ArrowRight size={16} />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------- CLOSING ---------------- */}
      <section className="closing">
        <div className="glow" aria-hidden="true" />
        <div className="wrap">
          <img src={markWhite} alt="" aria-hidden="true" />
          <h2>
            Ready to learn <em>differently</em>?
          </h2>
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
