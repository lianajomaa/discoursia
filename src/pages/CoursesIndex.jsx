/**
 * ALL COURSES  —  /courses
 *
 * Numbered sections, one per audience, then the route to packages.
 */

import { Link } from 'react-router-dom'
import { courses, paths } from '../data/courses'
import CourseCard from '../components/academy/CourseCard'
import PageHead from '../components/academy/PageHead'
import SectionHead from '../components/academy/SectionHead'

const leads = {
  students: 'Foundations for research, writing and presenting — the work a degree actually asks for.',
  professionals: 'Skills that pay back the same week: clearer prompts, better outputs, sharper communication.',
}

function CoursesIndex() {
  return (
    <>
      <PageHead
        eyebrow="Courses"
        title="Two courses. Both finishable in an afternoon."
        lead="Short lessons, real exercises, and a Certificate of Completion at the end of each one."
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
              <SectionHead
                no={String(index + 1).padStart(2, '0')}
                label={path.label}
                title={path.heroTitle}
                lead={leads[path.id]}
              />

              <div className="courses">
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
          <SectionHead
            no="03"
            label="Access"
            title="One course, or everything."
            lead="Start free, take a single course, or open the whole library."
          />

          <div className="pk-foot" style={{ marginTop: '28px' }}>
            <p>Universities and organisations are priced separately.</p>
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
