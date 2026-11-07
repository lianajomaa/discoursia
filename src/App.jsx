import { Routes, Route } from 'react-router-dom'

import AcademyLayout from './components/academy/AcademyLayout'

import AcademyHome from './pages/AcademyHome'
import PathPage from './pages/PathPage'
import CoursesIndex from './pages/CoursesIndex'
import Packages from './pages/Packages'
import CourseLanding from './pages/CourseLanding'
import LessonPage from './pages/LessonPage'
import QuizPage from './pages/QuizPage'
import ExercisePage from './pages/ExercisePage'
import AssessmentPage from './pages/AssessmentPage'
import Dashboard from './pages/Dashboard'
import CertificatePage from './pages/CertificatePage'
import Checkout from './pages/Checkout'
import About from './pages/About'
import Contact from './pages/Contact'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'

/**
 * Standalone learning platform.
 *
 * Unlike the version that lived inside the portfolio, the academy homepage is
 * now the site root — there is no second site to share routes with, so every
 * page sits under one layout.
 */
function App() {
  return (
    <Routes>
      <Route element={<AcademyLayout />}>
        <Route path="/" element={<AcademyHome />} />

        <Route path="/students" element={<PathPage audience="students" />} />
        <Route path="/professionals" element={<PathPage audience="professionals" />} />

        <Route path="/courses" element={<CoursesIndex />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/courses/:slug" element={<CourseLanding />} />
        <Route path="/courses/:slug/lessons/:lessonId" element={<LessonPage />} />
        <Route path="/courses/:slug/lessons/:lessonId/quiz" element={<QuizPage />} />
        <Route path="/courses/:slug/lessons/:lessonId/exercise" element={<ExercisePage />} />
        <Route path="/courses/:slug/assessment" element={<AssessmentPage />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/certificate/:slug" element={<CertificatePage />} />
        <Route path="/checkout/:planId" element={<Checkout />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />

        {/* anything else */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
