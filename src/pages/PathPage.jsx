/**
 * PATH PAGE  —  /students  and  /professionals
 *
 * One template, two audiences. App.jsx passes the audience:
 *
 *   <Route path="/students"      element={<PathPage audience="students" />} />
 *   <Route path="/professionals" element={<PathPage audience="professionals" />} />
 *
 * A third audience needs a new entry in `paths` (courses.js) and one route —
 * no new page component.
 */

import { Link, Navigate } from 'react-router-dom'
import { ArrowRight, Briefcase, Check, GraduationCap, Layers } from 'lucide-react'
import { getCoursesByAudience, getPath } from '../data/courses'
import CourseCard from '../components/academy/CourseCard'
import PageHead from '../components/academy/PageHead'
import Reveal from '../components/academy/Reveal'
import SectionHead from '../components/academy/SectionHead'
import markWhite from '../assets/mark-white.png'

function PathPage({ audience }) {
  const path = getPath(audience)
  const audienceCourses = getCoursesByAudience(audience)

  // Guard against a bad audience prop rather than rendering a blank page.
  if (!path) return <Navigate to="/" replace />

  const featured = audienceCourses[0] || null
  const others = audienceCourses.slice(1)
  const forStudents = audience === 'students'

  return (
    <>
      <PageHead eyebrow={path.label} title={path.heroTitle} lead={path.heroSubtitle}>
        <Link className="btn btn--light btn--sm" to="/courses">
          Browse all courses<span className="arw">&rarr;</span>
        </Link>
        <Link className="btn btn--outline-light btn--sm" to="/packages">
          See packages
        </Link>
      </PageHead>

      {/* ---------------- 01 FEATURED COURSE ---------------- */}
      <section className="band band--surface">
        <div className="wrap">
          <SectionHead
            no="01"
            label="Featured course"
            title={<>Start <em>here</em>.</>}
            lead="The core course for this path, with everything it covers."
          />

          {featured ? (
            <div className="feature">
              <Reveal className="fill">
                <CourseCard course={featured} featured />
              </Reveal>

              <div>
                <Reveal>
                  <h3 className="sub">What you&apos;ll be able to do</h3>
                </Reveal>
                <ul className="ticks">
                  {featured.outcomes.map((outcome, i) => (
                    <Reveal as="li" key={outcome} delay={i * 55}>
                      <span className="tk">
                        <Check size={13} aria-hidden="true" />
                      </span>
                      {outcome}
                    </Reveal>
                  ))}
                </ul>

                <Reveal>
                  <h3 className="sub" style={{ marginTop: '32px', fontSize: '1.1rem', fontFamily: 'var(--body)', fontWeight: 600 }}>
                    Course includes
                  </h3>
                  <ul className="chips">
                    {featured.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <Link className="btn btn--solid" style={{ marginTop: '28px' }} to={`/courses/${featured.slug}`}>
                    Start learning<span className="arw">&rarr;</span>
                  </Link>
                </Reveal>
              </div>
            </div>
          ) : (
            <p className="section-sub">Courses for this path are coming soon.</p>
          )}
        </div>
      </section>

      {/* ---------------- MORE COURSES (empty today, ready for course 3) ---------------- */}
      {others.length > 0 && (
        <section className="band band--paper">
          <div className="wrap">
            <SectionHead no="02" label="More courses" title="Keep going." />
            <div className="courses">
              {others.map((course, i) => (
                <Reveal key={course.slug} delay={i * 90} className="fill">
                  <CourseCard course={course} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------------- WHERE NEXT ---------------- */}
      <section className="band band--paper">
        <div className="wrap">
          <SectionHead
            no={others.length > 0 ? '03' : '02'}
            label="Where next"
            title={<>Not sure this is the <em>right</em> path?</>}
            lead="Compare the other path, or see what each package includes."
          />

          <div className="aud">
            <Reveal className="fill">
              <Link to={forStudents ? '/professionals' : '/students'}>
                <div className="top">
                  <span className="tag">{forStudents ? 'Professionals' : 'University students'}</span>
                  <span className="ic">
                    {forStudents ? <Briefcase size={21} aria-hidden="true" /> : <GraduationCap size={21} aria-hidden="true" />}
                  </span>
                </div>
                <h3>{forStudents ? 'Stay ahead at work.' : 'Feel confident in your own work.'}</h3>
                <p>
                  {forStudents
                    ? 'Better workplace communication, sharper AI use, stronger research and digital skills.'
                    : 'Research assignments, presentations, AI tools and academic projects.'}
                </p>
                <span className="more">
                  See the other path
                  <span className="orb" aria-hidden="true">
                    <ArrowRight size={16} />
                  </span>
                </span>
              </Link>
            </Reveal>

            <Reveal className="fill" delay={110}>
              <Link to="/packages">
                <div className="top">
                  <span className="tag">Packages</span>
                  <span className="ic">
                    <Layers size={21} aria-hidden="true" />
                  </span>
                </div>
                <h3>Start free. Upgrade when it is worth it.</h3>
                <p>Four packages from free to the full library, each with its certificate.</p>
                <span className="more">
                  Compare packages
                  <span className="orb" aria-hidden="true">
                    <ArrowRight size={16} />
                  </span>
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- CLOSING ---------------- */}
      <section className="closing">
        <div className="glow" aria-hidden="true" />
        <div className="wrap">
          <img src={markWhite} alt="" aria-hidden="true" />
          <h2>
            Questions before you <em>begin</em>?
          </h2>
          <p>Tell us what you are trying to learn and we will point you to the right start.</p>
          <div className="actions">
            <Link className="btn btn--light" to="/contact">
              Ask us<span className="arw">&rarr;</span>
            </Link>
            <Link className="btn btn--outline-light" to="/courses">
              Browse courses
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default PathPage
