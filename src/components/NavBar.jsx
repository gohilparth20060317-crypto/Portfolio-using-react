import { useState, useEffect, Fragment } from 'react'
import { NAV_ITEMS } from '../data/index.js'
import resumePdf from '../Parthresume.pdf'

export default function NavBar({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      style={{
        position:       'fixed',
        top:            0,
        left:           0,
        right:          0,
        zIndex:         100,
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'space-between',
        padding:        '0 2.5rem',
        height:         '64px',
        background:     scrolled ? 'rgba(10,8,20,0.82)' : 'transparent',
        backdropFilter: scrolled ? 'blur(18px)'          : 'none',
        borderBottom:   scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition:     'all 0.4s ease',
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontFamily:             "'Syne', sans-serif",
          fontSize:               '1.3rem',
          fontWeight:             700,
          background:             'linear-gradient(135deg, #a78bfa, #60a5fa)',
          WebkitBackgroundClip:   'text',
          WebkitTextFillColor:    'transparent',
          letterSpacing:          '-0.02em',
        }}
      >
        Parth.dev
      </div>

      {/* Links */}
      <div
        className="nav-links"
        style={{ display: 'flex', gap: '0.25rem' }}
      >
        {NAV_ITEMS.map(n => (
          <Fragment key={n}>
            {n === 'Contact' && (
              <button
                className="nav-link resume-button"
                onClick={() => window.open(resumePdf, '_blank')}
                style={{
                  background:   'linear-gradient(135deg, rgba(167,139,250,0.2), rgba(96,165,250,0.2))',
                  border:       '1px solid rgba(167,139,250,0.4)',
                  color:        '#c4b5fd',
                  padding:      '6px 16px',
                  borderRadius: '999px',
                  fontSize:     '0.82rem',
                  fontFamily:   "'Inter', sans-serif",
                  cursor:       'pointer',
                  fontWeight:   600,
                  letterSpacing:'0.02em',
                  transition:   'all 0.2s ease',
                  display:      'flex',
                  alignItems:   'center',
                  gap:          '6px',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(167,139,250,0.4), rgba(96,165,250,0.4))'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(167,139,250,0.2), rgba(96,165,250,0.2))'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                Resume
              </button>
            )}
            <button
              className="nav-link"
              onClick={() => {
                setActive(n)
                scrollTo(n.toLowerCase())
              }}
              style={{
                background:   active === n ? 'rgba(167,139,250,0.15)' : 'transparent',
                border:       active === n
                  ? '1px solid rgba(167,139,250,0.35)'
                  : '1px solid transparent',
                color:        active === n ? '#c4b5fd' : 'rgba(255,255,255,0.55)',
                padding:      '6px 16px',
                borderRadius: '999px',
                fontSize:     '0.82rem',
                fontFamily:   "'Inter', sans-serif",
                cursor:       'pointer',
                fontWeight:   500,
                letterSpacing:'0.02em',
                transition:   'all 0.2s ease',
              }}
            >
              {n}
            </button>
          </Fragment>
        ))}
      </div>
    </nav>
  )
}
