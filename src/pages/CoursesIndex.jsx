/**
 * ALL COURSES  —  /courses
 *
 * Groups courses by audience so the page stays readable as the catalogue
 * grows. Same rhythm as every other page: navy head, alternating bands, a
 * navy closing in the footer's place.
 */

import { Link } from 'react-router-dom'
import { courses, paths } from '../data/courses'
import CourseCard from '../components/academy/CourseCard'
import PageHead from '../components/academy/PageHead'

function CoursesIndex() {
  return (
    <>
      <PageHead
        eyebrow="Courses"
        title="All courses."
        lead="Focused courses. Short lessons. Practical application — with a certificate at the end of each one."
      />

      {paths.map((path, index) => {
        const list = courses.filter((course) => course.audience === path.id)
        if (list.length === 0) return null

        return (
          <section
            key={path.id}
            className={`band ${index % 2 === 0 ? 'band--surface' : 'band--paper'}`}
          >
            <div className="wrap">
              <div className="eyebrow">{path.label}</div>
              <div className="courses" style={{ marginTop: '36px' }}>
                {list.map((course) => (
                  <CourseCard key={course.slug} course={course} />
                ))}
              </div>
            </div>
          </section>
        )
      })}

      <section className="band band--surface">
        <div className="wrap">
          <div className="b2b" style={{ marginTop: 0 }}>
            <div>
              <h3>Not sure which package you need?</h3>
              <p>
                Compare what each package includes — from free previews through to the full
                course library.
              </p>
            </div>
            <Link className="btn btn--solid" to="/packages">
              See packages<span className="arw">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default CoursesIndex
