import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="px-8 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-serif text-5xl font-medium text-navy/25">404</p>
        <h1 className="mt-4 font-serif text-3xl font-medium text-navy md:text-4xl">
          Page not found
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-navy/75">
          That page doesn&apos;t exist, or it has moved.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="rounded-md bg-navy px-6 py-3 text-sm font-medium text-white transition hover:bg-navy/90"
          >
            Go home
          </Link>
          <Link to="/courses" className="text-[13px] text-navy/70 hover:underline">
            Browse courses
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFound
