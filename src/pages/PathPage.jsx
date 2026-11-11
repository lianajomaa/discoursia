/**
 * PATH PAGE  —  /students  and  /professionals
 *
 * Both pages are the same template with different data. App.jsx passes the
 * audience:
 *
 *   <Route path="/students"      element={<PathPage audience="students" />} />
 *   <Route path="/professionals" element={<PathPage audience="professionals" />} />
 *
 * A future third audience needs a new entry in `paths` (courses.js) and one
 * route — no new page component.
 */

import { Link, Navigate } from 'react-router-dom'
import { Check } from 'lucide-react'
import { getCoursesByAudience, getPath } from '../data/courses'
import CourseCard from '../components/academy/CourseCard'
import PageHead from '../components/academy/PageHead'
import markWhite from '../assets/mark-white.png'

function PathPage({ audience }) {
  const path = getPath(audience)
  const audienceCourses = getCoursesByAudience(audience)

  // Guard against a bad audience prop rather than rendering a blank page.
  if (!path) return <Navigate to="/" replace />

  const featured = audienceCourses[0] || null
  const others = audienceCourses.slice(1)

  return (
    <>
      <PageHead eyebrow={path.label} title={path.heroTitle} lead={path.heroSubtitle}>
        <Link className="btn btn--light" to="/courses">
          Browse all courses<span className="arw">&rarr;</span>
        </Link>
        <Link className="btn btn--outline-light" to="/packages">
          See packages
        </Link>
      </PageHead>

      {/* ---------------- FEATURED COURSE ---------------- */}
      <section className="band band--paper">
        <div className="wrap">
          <div className="eyebrow">Featured course</div>

          {featured ? (
            <div className="feature">
              <CourseCard course={featured} featured />

              <div>
                <h2 className="section-title" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)' }}>
                  What you&apos;ll learn
                </h2>
                <p className="section-sub" style={{ marginTop: '14px' }}>
                  By the end of this course, you will be able to:
                </p>

                <ul className="ticks">
                  {featured.outcomes.map((outcome) => (
                    <li key={outcome}>
                      <Check size={17} className="ico" aria-hidden="true" />
                      {outcome}
                    </li>
                  ))}
                </ul>

                <h3 style={{ marginTop: '34px', fontFamily: 'var(--body)', fontSize: '1.02rem', fontWeight: 600 }}>
                  Course includes
                </h3>
                <ul className="chips">
                  {featured.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <Link className="btn btn--solid" style={{ marginTop: '32px' }} to={`/courses/${featured.slug}`}>
                  Start learning<span className="arw">&rarr;</span>
                </Link>
              </div>
            </div>
          ) : (
            <p className="section-sub">Courses for this path are coming soon.</p>
          )}
        </div>
      </section>

      {/* ---------------- MORE COURSES (empty today, ready for course 3) ---------------- */}
      {others.length > 0 && (
        <section className="band band--surface">
          <div className="wrap">
            <div className="eyebrow">More courses</div>
            <h2 className="section-title">Keep going.</h2>
            <div className="courses">
              {others.map((course) => (
                <CourseCard key={course.slug} course={course} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------------- CLOSING ---------------- */}
      <section className="band closing">
        <div className="wrap">
          <img src={markWhite} alt="" aria-hidden="true" />
          <h2>Not sure this is the right path?</h2>
          <p>Compare both learning paths and choose what fits your goals.</p>
          <div className="actions">
            <Link
              className="btn btn--light"
              to={audience === 'students' ? '/professionals' : '/students'}
            >
              See the other path<span className="arw">&rarr;</span>
            </Link>
            <Link className="btn btn--outline-light" to="/contact">
              Ask us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default PathPage
