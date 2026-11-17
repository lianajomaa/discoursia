/**
 * ALL COURSES  —  /courses
 *
 * One numbered section per audience, then a glimpse of the packages.
 */

import { Link } from 'react-router-dom'
import { courses, paths } from '../data/courses'
import { plans } from '../data/plans'
import CourseCard from '../components/academy/CourseCard'
import PageHead from '../components/academy/PageHead'
import Reveal from '../components/academy/Reveal'
import SectionHead from '../components/academy/SectionHead'
import Tier from '../components/academy/Tier'

const leads = {
  students: 'Foundations for research, writing and presenting — the work a degree actually asks for.',
  professionals: 'Skills that pay back the same week: clearer prompts, better outputs, sharper communication.',
}

function CoursesIndex() {
  const groups = paths
    .map((path) => ({ path, list: courses.filter((course) => course.audience === path.id) }))
    .filter((group) => group.list.length > 0)

  return (
    <>
      <PageHead
        eyebrow="Courses"
        title={<>Two courses. Both finishable in an <em>afternoon</em>.</>}
        lead="Short lessons, real exercises, and a Certificate of Completion at the end of each."
      />

      {groups.map(({ path, list }, index) => (
        <section
          key={path.id}
          className={`band ${index % 2 === 0 ? 'band--surface' : 'band--paper'}`}
        >
          <div className="wrap">
            <SectionHead
              no={String(index + 1).padStart(2, '0')}
              label={path.label}
              to={`/${path.id}`}
              go="This path"
              title={path.heroTitle}
              lead={leads[path.id]}
            />

            <div className="courses">
              {list.map((course, i) => (
                <Reveal key={course.slug} delay={i * 90} className="fill">
                  <CourseCard course={course} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className={`band ${groups.length % 2 === 0 ? 'band--surface' : 'band--paper'}`}>
        <div className="wrap">
          <SectionHead
            no={String(groups.length + 1).padStart(2, '0')}
            label="Access"
            to="/packages"
            go="Compare all"
            title={<>One course, or <em>everything</em>.</>}
            lead="Start free, take a single course, or open the whole library."
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
    </>
  )
}

export default CoursesIndex
