import useTypewriter from '../hooks/useTypewriter.js'
import { STATS, TITLES } from '../data/index.js'
import Card3D from './Card3D.jsx'
import profileImg from '../assets/Profile.jpeg'

export default function HeroSection() {
  const typed = useTypewriter(TITLES)

  const scrollTo = id =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '8rem 2rem 4rem 2rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Ambient glow orb */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '10%',
          transform: 'translate(0%, -50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          animation: 'orb-drift 8s ease-in-out infinite',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap-reverse',
          gap: '4rem',
        }}
      >
        {/* ── LEFT: Text Content ── */}
        <div style={{ flex: 1, minWidth: '300px', textAlign: 'left' }}>
          {/* Available badge */}
          <div
            className="fade-up"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '999px',
              border: '1px solid rgba(167,139,250,0.3)',
              background: 'rgba(124,58,237,0.1)',
              fontSize: '0.75rem',
              color: '#c4b5fd',
              fontFamily: "'Inter', sans-serif",
              marginBottom: '2rem',
              letterSpacing: '0.08em',
              fontWeight: 500,
              textTransform: 'uppercase',
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: '#a78bfa',
                display: 'inline-block',
                animation: 'pulse 2s infinite',
              }}
            />
            Available for work
          </div>

          {/* Name */}
          <h1
            className="fade-up"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(3rem, 8vw, 5.5rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              color: '#fff',
              letterSpacing: '-0.04em',
              marginBottom: '0.5rem',
              animationDelay: '0.1s',
            }}
          >
            Parth Gohil
          </h1>

          {/* Typewriter */}
          <div
            className="fade-up gradient-text-animated"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(1.2rem, 3vw, 2rem)',
              fontWeight: 600,
              height: '2.4rem',
              marginBottom: '1.5rem',
              animationDelay: '0.2s',
            }}
          >
            {typed}
            <span
              style={{
                animation: 'blink 1s step-end infinite',
                WebkitTextFillColor: '#a78bfa',
              }}
            >
              |
            </span>
          </div>

          {/* Bio */}
          <p
            className="fade-up"
            style={{
              maxWidth: '540px',
              color: 'rgba(255,255,255,0.5)',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              fontFamily: "'Inter', sans-serif",
              marginBottom: '2.5rem',
              animationDelay: '0.3s',
            }}
          >
            I turn ideas into interactive digital experiences, blending design and development to build applications that are both functional and engaging.
          </p>

          {/* CTA buttons */}
          <div
            className="fade-up hero-buttons"
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              animationDelay: '0.4s',
            }}
          >
            <button
              className="btn-primary"
              onClick={() => scrollTo('projects')}
              style={{
                padding: '12px 32px',
                borderRadius: '999px',
                background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                border: 'none',
                color: '#fff',
                fontSize: '0.95rem',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 0 40px rgba(124,58,237,0.4)',
              }}
            >
              View My Work ↓
            </button>

            <button
              className="btn-ghost"
              onClick={() => scrollTo('contact')}
              style={{
                padding: '12px 32px',
                borderRadius: '999px',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'rgba(255,255,255,0.8)',
                fontSize: '0.95rem',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                cursor: 'pointer',
              }}
            >
              Contact Me →
            </button>
          </div>
        </div>

        {/* ── RIGHT: Interactive Image ── */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Card3D maxTilt={15}>
            <div
              className="profile-3d"
              style={{
                width: '320px',
                height: '400px',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '4px solid rgba(167,139,250,0.3)',
                position: 'relative',
              }}
            >
              <img
                src={profileImg}
                alt="Parth Gohil Profile"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'contrast(1.1) brightness(0.9)',
                  opacity: 0.8, // Added transparency
                  mixBlendMode: 'screen', // Blends dark backgrounds into the site's dark theme
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(6,4,18,0.5), transparent)',
                  pointerEvents: 'none'
                }}
              />
            </div>
          </Card3D>
        </div>
      </div>

      {/* Stats */}
      <div
        className="fade-up stats-strip"
        style={{
          display: 'flex',
          gap: '3rem',
          marginTop: '5rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          animationDelay: '0.5s',
        }}
      >
        {STATS.map(s => (
          <div key={s.label} style={{ textAlign: 'center' }}>
            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '2.2rem',
                fontWeight: 800,
                color: '#fff',
                lineHeight: 1,
              }}
            >
              {s.val}
            </div>
            <div
              style={{
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.4)',
                fontFamily: "'Inter', sans-serif",
                marginTop: '4px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
