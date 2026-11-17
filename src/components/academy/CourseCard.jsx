/**
 * COURSE CARD — home, path pages, the course list and later the dashboard.
 *
 * Reads its numbers from the course object, so a new course in courses.js
 * renders correctly with no changes here. The whole card is one link (a real
 * anchor on the title, stretched over the card). Once a learner has started,
 * it shows a progress bar and the label changes to "Continue".
 */

import { Link } from 'react-router-dom'
import { ArrowRight, Award, BookOpen, Clock, GraduationCap } from 'lucide-react'
import { getCourseStats } from '../../data/courses'
import { useProgress } from '../../context/ProgressContext'

function CourseCard({ course, featured = false }) {
  const { getCourseProgress, isEnrolled } = useProgress()

  const stats = getCourseStats(course)
  const progress = getCourseProgress(course)
  // Wording follows enrolment; the progress bar follows real progress.
  const enrolled = isEnrolled(course.slug)
  const started = progress.percent > 0

  const meta = [
    { icon: GraduationCap, label: course.level },
    { icon: Clock, label: course.duration.replace('Approximately', 'About') },
    { icon: BookOpen, label: `${stats.lessons} lessons` },
    { icon: Award, label: 'Certificate' },
  ]

  return (
    <article className={featured ? 'xcard course course--featured' : 'xcard course'}>
      <div className="top">
        <span className="aud-tag">
          {course.audience === 'students' ? 'University students' : 'Professionals'}
        </span>
        <span className="ic" aria-hidden="true">
          <BookOpen size={19} />
        </span>
      </div>

      <h3>
        <Link to={`/courses/${course.slug}`}>{course.title}</Link>
      </h3>
      <p className="desc">{course.description}</p>

      <ul className="meta">
        {meta.map(({ icon: Icon, label }) => (
          <li key={label}>
            <Icon size={15} aria-hidden="true" />
            {label}
          </li>
        ))}
      </ul>

      {started ? (
        <div className="bar">
          <div className="row">
            <span>{progress.percent}% complete</span>
            <span>
              {progress.completed} of {progress.total}
            </span>
          </div>
          <div
            className="track"
            role="progressbar"
            aria-valuenow={progress.percent}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${course.title} progress`}
          >
            <div className="fill" style={{ width: `${progress.percent}%` }} />
          </div>
        </div>
      ) : null}

      <div className="foot">
        <span>
          {enrolled ? 'Continue' : 'View course'}
          {enrolled && progress.resumeLesson ? (
            <span className="next"> · next: {progress.resumeLesson.title}</span>
          ) : null}
        </span>
        <span className="orb" aria-hidden="true">
          <ArrowRight size={16} />
        </span>
      </div>
    </article>
  )
}

export default CourseCard
