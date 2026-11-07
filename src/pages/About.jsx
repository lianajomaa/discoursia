/**
 * ABOUT  —  /about
 *
 * Placeholder copy. Replace the body text once the business positioning and
 * name are settled; the layout needs no changes.
 */

import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <section className="border-b border-slate-100 bg-white px-8 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-0.5 w-6 bg-navy" />
              <span className="text-xs tracking-[0.2em] text-navy">ABOUT</span>
            </div>

            <h1 className="font-serif text-4xl font-medium leading-[1.1] tracking-tight text-navy md:text-5xl">
              Learning built for real life, not just the classroom.
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-navy/80 md:text-base">
              We build short, practical courses for university students and working
              professionals — the skills people actually use to study, work and
              communicate better.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-slate-50 px-8 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-navy md:text-4xl">
            What we believe
          </h2>

          <div className="mt-8 grid max-w-3xl gap-x-12 gap-y-8 sm:grid-cols-2">
            <div>
              <h3 className="text-base font-medium text-navy">Practical over theoretical</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/80">
                Every lesson ends with something you can apply the same day.
              </p>
            </div>
            <div>
              <h3 className="text-base font-medium text-navy">Short and focused</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/80">
                No filler. Courses are built to be finished, not abandoned.
              </p>
            </div>
            <div>
              <h3 className="text-base font-medium text-navy">Human-centred</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/80">
                Technology supports learning; it doesn&apos;t replace critical thinking.
              </p>
            </div>
            <div>
              <h3 className="text-base font-medium text-navy">Quality over quantity</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/80">
                A small number of courses done properly, rather than a large catalogue.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy px-8 py-16 md:px-12">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-serif text-2xl font-medium text-white md:text-3xl">
              Ready to start learning?
            </h2>
            <p className="mt-2 text-sm text-white/80">
              Browse the courses and choose where to begin.
            </p>
          </div>
          <Link
            to="/courses"
            className="flex-shrink-0 rounded-md bg-white px-6 py-3 text-sm font-medium text-navy transition hover:bg-baby"
          >
            Browse Courses
          </Link>
        </div>
      </section>
    </>
  )
}

export default About
