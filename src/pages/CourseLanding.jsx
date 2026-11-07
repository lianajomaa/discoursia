/**
 * COURSE LANDING PAGE  —  /courses/:slug
 * Specification section 12.
 *
 * ONE template for every course, present and future. Everything comes from
 * courses.js, so adding course 3 needs no change to this file.
 */

import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  Award,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  Download,
  FileText,
  GraduationCap,
  PenLine,
  PlayCircle,
} from 'lucide-react'
import { getCourse, getCourseStats } from '../data/courses'
import { useProgress } from '../context/ProgressContext'

/* Small label describing what a lesson contains. */
function LessonTags({ lesson }) {
  const tags = []
  tags.push({ icon: PlayCircle, label: `Video — ${lesson.durationMinutes} min` })
  if (lesson.quiz) tags.push({ icon: CheckCircle2, label: 'Knowledge Check' })
  if (lesson.resource) tags.push({ icon: FileText, label: 'Worksheet' })
  if (lesson.exercise) tags.push({ icon: PenLine, label: 'Practical Exercise' })

  return (
    <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1">
      {tags.map(({ icon: Icon, label }) => (
        <span key={label} className="flex items-center gap-1.5 text-[12px] text-navy/60">
          <Icon size={13} aria-hidden="true" />
          {label}
        </span>
      ))}
    </div>
  )
}

/* One expandable module in the curriculum. */
function ModuleRow({ module, index, slug, isLessonComplete, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen)
  const done = module.lessons.filter((l) => isLessonComplete(slug, l.id)).length

  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <div>
          <span className="text-[11px] tracking-[0.18em] text-navy/50">
            MODULE {index + 1}
          </span>
          <h3 className="mt-1 text-base font-medium text-navy md:text-lg">{module.title}</h3>
        </div>

        <div className="flex flex-shrink-0 items-center gap-4">
          <span className="hidden text-[12px] text-navy/60 sm:inline">
            {done > 0 ? `${done}/${module.lessons.length} done` : `${module.lessons.length} lessons`}
          </span>
          <ChevronDown
            size={18}
            className={`text-navy transition-transform ${open ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </div>
      </button>

      {open && (
        <ul className="pb-4">
          {module.lessons.map((lesson, i) => {
            const complete = isLessonComplete(slug, lesson.id)
            return (
              <li key={lesson.id}>
                <Link
                  to={`/courses/${slug}/lessons/${lesson.id}`}
                  className="flex gap-4 rounded-lg px-3 py-3 transition hover:bg-slate-50"
                >
                  <span
                    className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border text-[10px] ${
                      complete
                        ? 'border-navy bg-navy text-white'
                        : 'border-slate-300 text-navy/50'
                    }`}
                    aria-hidden="true"
                  >
                    {complete ? <Check size={12} /> : i + 1}
                  </span>

                  <div>
                    <span className="text-sm font-medium text-navy">{lesson.title}</span>
                    <LessonTags lesson={lesson} />
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

function CourseLanding() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const course = getCourse(slug)
  const { enroll, isEnrolled, isLessonComplete, getCourseProgress, getAssessment, getCertificate } =
    useProgress()

  // Unknown slug — don't crash, offer a way back.
  if (!course) {
    return (
      <section className="px-8 py-24 md:px-12">
        <div className="mx-auto max-w-5xl">
          <h1 className="font-serif text-3xl font-medium text-navy">Course not found</h1>
          <p className="mt-3 text-sm text-navy/70">
            That course doesn&apos;t exist or has been moved.
          </p>
          <Link
            to="/courses"
            className="mt-6 inline-block rounded-md bg-navy px-5 py-2.5 text-sm font-medium text-white"
          >
            Browse courses
          </Link>
        </div>
      </section>
    )
  }

  const stats = getCourseStats(course)
  const progress = getCourseProgress(course)
  // "Enrolled" drives the button wording; actual progress drives the bar.
  // A learner part-way through lesson 1 has enrolled but is still at 0%.
  const enrolled = isEnrolled(course.slug)
  const started = progress.percent > 0
  const assessment = getAssessment(course.slug)
  const certificate = getCertificate(course.slug)

  const info = [
    { icon: GraduationCap, label: 'Level', value: course.level },
    { icon: Clock, label: 'Duration', value: `${course.durationHours} hours` },
    { icon: BookOpen, label: 'Lessons', value: stats.lessons },
    { icon: CheckCircle2, label: 'Quizzes', value: stats.quizzes },
    { icon: PenLine, label: 'Exercises', value: stats.exercises },
    { icon: Award, label: 'Certificate', value: course.hasCertificate ? 'Yes' : 'No' },
  ]

  /* Enrol, then jump to where the learner should be. */
  const startCourse = () => {
    enroll(course.slug)
    const target = progress.resumeLesson || progress.nextLesson
    if (target) navigate(`/courses/${course.slug}/lessons/${target.id}`)
  }

  return (
    <>
      {/* ============================================================
       * TOP COURSE HEADER
       * ============================================================ */}
      <section className="border-b border-slate-100 bg-white px-8 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-0.5 w-6 bg-navy" />
            <Link
              to={course.audience === 'students' ? '/students' : '/professionals'}
              className="text-xs tracking-[0.2em] text-navy hover:underline"
            >
              {course.audience === 'students' ? 'UNIVERSITY STUDENTS' : 'PROFESSIONALS'}
            </Link>
          </div>

          <h1 className="max-w-3xl font-serif text-4xl font-medium leading-[1.1] tracking-tight text-navy md:text-5xl">
            {course.title}
          </h1>

          {course.subtitle && (
            <p className="mt-5 max-w-xl text-base font-medium text-navy md:text-lg">
              {course.subtitle}
            </p>
          )}

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-navy/80 md:text-base">
            {course.longDescription || course.description}
          </p>

          {/* Course information — horizontal cards */}
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {info.map(({ icon: Icon, label, value }) => (
              <li key={label} className="rounded-lg border border-slate-200 bg-white px-4 py-3">
                <div className="flex items-center gap-1.5 text-[11px] tracking-wide text-navy/50">
                  <Icon size={13} aria-hidden="true" />
                  {label}
                </div>
                <div className="mt-1 text-sm font-medium text-navy">{value}</div>
              </li>
            ))}
          </ul>

          {/* progress bar once started */}
          {started && (
            <div className="mt-8 max-w-md">
              <div className="mb-1.5 flex items-center justify-between text-[12px] text-navy/70">
                <span>{progress.percent}% complete</span>
                <span>
                  {progress.completed} of {progress.total}
                </span>
              </div>
              <div
                className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100"
                role="progressbar"
                aria-valuenow={progress.percent}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="h-full rounded-full bg-navy transition-all"
                  style={{ width: `${progress.percent}%` }}
                />
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={startCourse}
              className="rounded-md bg-navy px-6 py-3 text-sm font-medium text-white transition hover:bg-navy/90 md:text-base"
            >
              {enrolled ? 'Continue Course' : 'Start Course'}
            </button>
            {enrolled && progress.resumeLesson && (
              <span className="text-[13px] text-navy/60">
                Next: {progress.resumeLesson.title}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* ============================================================
       * WHAT YOU'LL LEARN
       * ============================================================ */}
      <section className="border-b border-slate-100 bg-slate-50 px-8 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-navy md:text-4xl">
            What You&apos;ll Learn
          </h2>
          <p className="mt-3 text-sm text-navy/70 md:text-base">
            By the end of the course, you will be able to:
          </p>

          <ul className="mt-8 grid gap-x-10 gap-y-3 md:grid-cols-2">
            {course.outcomes.map((outcome) => (
              <li key={outcome} className="flex gap-3 text-sm leading-relaxed text-navy/80">
                <Check size={16} className="mt-0.5 flex-shrink-0 text-navy" aria-hidden="true" />
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================================================
       * COURSE STRUCTURE
       * ============================================================ */}
      <section className="border-b border-slate-100 bg-white px-8 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-navy md:text-4xl">
            Course Structure
          </h2>
          <p className="mt-3 text-sm text-navy/70 md:text-base">
            {stats.modules} modules · {stats.lessons} lessons · {course.duration}
          </p>

          <div className="mt-8 max-w-3xl rounded-xl border border-slate-200 px-5 md:px-7">
            {course.modules.map((module, index) => (
              <ModuleRow
                key={module.id}
                module={module}
                index={index}
                slug={course.slug}
                isLessonComplete={isLessonComplete}
                defaultOpen={index === 0}
              />
            ))}
          </div>

          {/* FINAL ASSESSMENT */}
          {course.finalAssessment && (
            <div className="mt-8 max-w-3xl rounded-xl border border-navy/20 bg-baby/40 p-6 md:p-7">
              <span className="text-[11px] tracking-[0.18em] text-navy/60">FINAL ASSESSMENT</span>
              <h3 className="mt-1.5 text-lg font-medium text-navy">
                {course.finalAssessment.title}
              </h3>

              {course.finalAssessment.description && (
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-navy/80">
                  {course.finalAssessment.description}
                </p>
              )}

              <p className="mt-3 text-[13px] text-navy/70">
                Passing requirement: {course.finalAssessment.passingScore}%
                {assessment && (
                  <span className={assessment.passed ? 'text-navy' : 'text-navy/70'}>
                    {' '}· Your score: {assessment.percentage}%{' '}
                    {assessment.passed ? '(passed)' : '(not yet passed)'}
                  </span>
                )}
              </p>

              <Link
                to={`/courses/${course.slug}/assessment`}
                className="mt-5 inline-block rounded-md bg-navy px-5 py-2.5 text-sm font-medium text-white transition hover:bg-navy/90"
              >
                {assessment ? 'Retake Final Assessment' : 'Start Final Assessment'}
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ============================================================
       * COURSE RESOURCES
       * ============================================================ */}
      {course.resources.length > 0 && (
        <section className="border-b border-slate-100 bg-slate-50 px-8 py-16 md:px-12 md:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-navy md:text-4xl">
              Course Resources
            </h2>
            <p className="mt-3 text-sm text-navy/70 md:text-base">
              Downloadable materials to use alongside the lessons.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {course.resources.map((resource) => {
                // No file uploaded yet — show the card, but don't fake a link.
                const ready = Boolean(resource.file)
                return (
                  <div
                    key={resource.id}
                    className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5"
                  >
                    <div>
                      <FileText size={20} className="text-navy" aria-hidden="true" />
                      <h3 className="mt-3 text-sm font-medium leading-snug text-navy">
                        {resource.title}
                      </h3>
                    </div>

                    {ready ? (
                      <a
                        href={resource.file}
                        download
                        className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-navy hover:underline"
                      >
                        <Download size={14} aria-hidden="true" />
                        Download {resource.type}
                      </a>
                    ) : (
                      <span className="mt-5 text-[12px] text-navy/45">Coming soon</span>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
       * CERTIFICATE
       * ============================================================ */}
      {course.hasCertificate && (
        <section className="bg-navy px-8 py-16 md:px-12 md:py-20">
          <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="max-w-xl">
              <Award size={24} className="text-white" aria-hidden="true" />
              <h2 className="mt-3 font-serif text-2xl font-medium text-white md:text-3xl">
                {course.certificate.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                {course.certificate.description}
              </p>
            </div>

            {certificate ? (
              <Link
                to={`/certificate/${course.slug}`}
                className="flex-shrink-0 rounded-md bg-white px-6 py-3 text-sm font-medium text-navy transition hover:bg-baby"
              >
                View Certificate
              </Link>
            ) : (
              <span className="flex-shrink-0 rounded-md border border-white/30 px-6 py-3 text-sm text-white/70">
                {progress.percent}% complete
              </span>
            )}
          </div>
        </section>
      )}
    </>
  )
}

export default CourseLanding
