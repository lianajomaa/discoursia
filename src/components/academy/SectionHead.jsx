/**
 * SECTION HEAD — the numbered rule every section opens with.
 *
 *   ──────────────────────────────────────
 *   01   THE IDEA
 *
 *   Big title here.          Short lead here.
 *
 * The rule and the number are what make a page read as one composed document
 * rather than a stack of unrelated blocks. Used on every page, so the whole
 * site shares one structure.
 */

function SectionHead({ no, label, title, lead, children }) {
  return (
    <div className="sec">
      <div className="sec-meta">
        {no ? <span className="no">{no}</span> : null}
        <span className="lb">{label}</span>
      </div>
      <div className="sec-body">
        <h2 className="title">{title}</h2>
        <div>
          {lead ? <p className="lead">{lead}</p> : null}
          {children}
        </div>
      </div>
    </div>
  )
}

export default SectionHead
