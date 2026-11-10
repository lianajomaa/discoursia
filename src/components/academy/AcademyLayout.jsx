/**
 * SITE LAYOUT — header, mobile menu, footer.
 *
 * The header is navy site-wide, so the logo and the menu use their white
 * colourways. Styling comes from the design system in index.css.
 */

import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

import markWhite from '../../assets/mark-white.png'
import wordWhite from '../../assets/wordmark-white.png'

const links = [
  { name: 'Home', path: '/', end: true },
  { name: 'About', path: '/about' },
  { name: 'Students', path: '/students' },
  { name: 'Professionals', path: '/professionals' },
  { name: 'Courses', path: '/courses' },
  { name: 'Packages', path: '/packages' },
]

const footerColumns = [
  {
    heading: 'Learn',
    items: [
      { name: 'Courses', path: '/courses' },
      { name: 'Students', path: '/students' },
      { name: 'Professionals', path: '/professionals' },
    ],
  },
  {
    heading: 'Company',
    items: [
      { name: 'About', path: '/about' },
      { name: 'Packages', path: '/packages' },
      { name: 'Contact', path: '/contact' },
    ],
  },
]

function Brand({ onClick }) {
  return (
    <Link to="/" className="brand" onClick={onClick} aria-label="Discoursia.ai home">
      <img className="mark" src={markWhite} alt="" />
      <img className="word" src={wordWhite} alt="Discoursia.ai" />
    </Link>
  )
}

function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  // Close the menu and return to the top whenever the route changes.
  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [pathname])

  // Escape closes it; widening past the breakpoint closes it too, so the
  // panel can't be left open behind the desktop nav.
  useEffect(() => {
    if (!menuOpen) return

    const onKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth > 880) setMenuOpen(false)
    }

    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [menuOpen])

  return (
    <>
      <header className="site-header">
        <div className="wrap">
          <Brand onClick={() => setMenuOpen(false)} />

          <nav className="nav">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.end}
                aria-current={undefined}
                className={({ isActive }) => (isActive ? 'is-active' : undefined)}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <Link className="btn btn--light btn--sm" to="/packages">
            Get started<span className="arw">&rarr;</span>
          </Link>

          <button
            type="button"
            className="menu-btn"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span /><span /><span />
          </button>
        </div>

        {menuOpen && (
          <nav className="mobile-nav" id="mobile-nav">
            <div className="wrap">
              {links.map((link) => (
                <Link key={link.name} className="m-link" to={link.path}>
                  {link.name}
                  <span className="chev">&rarr;</span>
                </Link>
              ))}
              <Link className="btn btn--light" to="/packages">
                Get started<span className="arw">&rarr;</span>
              </Link>
            </div>
          </nav>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="wrap">
          <div className="foot-top">
            <div>
              <img src={wordWhite} alt="Discoursia.ai" style={{ height: '19px', width: 'auto' }} />
              <p style={{ marginTop: '16px', maxWidth: '30ch', fontSize: '14.5px', lineHeight: 1.7 }}>
                AI, research and communication skills for university students and professionals.
              </p>
            </div>

            <div className="foot-links">
              {footerColumns.map((column) => (
                <div key={column.heading}>
                  <span className="h">{column.heading}</span>
                  {column.items.map((item) => (
                    <Link key={item.name} to={item.path}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="foot-bottom">
            <span>© {new Date().getFullYear()} Discoursia.ai. All rights reserved. Kuwait.</span>
            <nav>
              <Link to="/terms">Terms &amp; conditions</Link>
              <Link to="/privacy">Privacy policy</Link>
              <a
                href="https://www.linkedin.com/in/jana-saab/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  )
}

export default SiteLayout
