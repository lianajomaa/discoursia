/**
 * PAGE HEAD — the short navy banner every inner page opens with.
 *
 * Deliberately brief: a label, a title, one line. The page's real content
 * should be visible without scrolling. `tight` trims it further for pages
 * like checkout, where the form is the page.
 */

function PageHead({ eyebrow, title, lead, tight, children }) {
  return (
    <section className={tight ? 'page-head page-head--tight' : 'page-head'}>
      <div className="glow" aria-hidden="true" />
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
