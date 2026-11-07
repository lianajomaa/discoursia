/**
 * Shared layout for Terms and Privacy.
 *
 * Shows a visible "draft" notice while the real text is unwritten, so nobody
 * mistakes placeholder copy for an actual policy.
 */

function LegalPage({ title, sections }) {
  return (
    <section className="px-8 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight text-navy md:text-5xl">
          {title}
        </h1>

        <div className="mt-6 rounded-lg border border-navy/20 bg-baby/40 px-4 py-3">
          <p className="text-[13px] leading-relaxed text-navy/80">
            <strong className="font-medium">Draft.</strong> This page is a placeholder
            and is not a binding policy. It must be written properly before the
            platform takes payments or collects personal data.
          </p>
        </div>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-base font-medium text-navy">{section.heading}</h2>
              <p className="mt-2 text-sm leading-relaxed text-navy/75">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LegalPage
