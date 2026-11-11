/**
 * PAGE HEAD — the navy block every page opens with.
 *
 * The homepage has its own larger hero; every other page uses this, so the
 * site reads as one thing: navy at the top, white and pale paper through the
 * middle, navy again at the bottom.
 */

function PageHead({ eyebrow, title, lead, children }) {
  return (
    <section className="page-head">
      <div className="wrap">
        {eyebrow ? <div className="eyebrow rise d1">{eyebrow}</div> : null}
        <h1 className="rise d2">{title}</h1>
        {lead ? <p className="lead rise d3">{lead}</p> : null}
        {children ? <div className="actions rise d4">{children}</div> : null}
      </div>
    </section>
  )
}

export default PageHead
