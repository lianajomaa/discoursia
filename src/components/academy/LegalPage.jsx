/**
 * Shared layout for Terms and Privacy.
 *
 * Shows a visible "draft" notice while the real text is unwritten, so nobody
 * mistakes placeholder copy for an actual policy.
 */

import PageHead from './PageHead'

function LegalPage({ title, sections }) {
  return (
    <>
      <PageHead eyebrow="Legal" title={title} />

      <section className="band band--surface">
        <div className="wrap">
          <div className="prose">
            <p className="note">
              <strong>Draft.</strong> This page is a placeholder and is not a binding
              policy. It must be written properly before the platform takes payments or
              collects personal data.
            </p>

            {sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default LegalPage
