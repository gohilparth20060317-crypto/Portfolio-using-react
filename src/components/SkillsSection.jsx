import useInView from '../hooks/useInView.js'
import { SKILLS } from '../data/index.js'
import Card3D from './Card3D.jsx'

export default function SkillsSection() {
  const [ref, inView] = useInView(0.2)

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(50px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        padding: '6rem 2rem',
        position: 'relative',
        zIndex: 1,
        maxWidth: '900px',
        margin: '0 auto',
      }}
    >
      {/* Heading */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <p className="section-label">Skills</p>
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '-0.03em',
          }}
        >
          Tech Stack
        </h2>
      </div>

      {/* 3D Skills Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.5rem' }}>
        {SKILLS.map((s, i) => (
          <Card3D key={s.name} maxTilt={15}>
            <div
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                padding: '1.5rem 1rem',
                textAlign: 'center',
                boxShadow: '0 8px 24px -8px rgba(0,0,0,0.5)',
                backdropFilter: 'blur(10px)',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 12px 30px -8px ${s.color}66`;
                e.currentTarget.style.borderColor = s.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px -8px rgba(0,0,0,0.5)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
              }}
            >
              {/* 3D Floating Icon */}
              <div
                style={{
                  fontSize: '2.5rem',
                  marginBottom: '0.8rem',
                  filter: `drop-shadow(0 8px 12px ${s.color}66)`,
                  transform: 'translateZ(25px)',
                }}
              >
                {s.icon}
              </div>

              {/* Name */}
              <h3
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.95rem',
                  color: '#ffffff',
                  marginBottom: '1rem',
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                  transform: 'translateZ(15px)',
                }}
              >
                {s.name}
              </h3>

              {/* Circular Animated Progress */}
              <div
                style={{
                  position: 'relative',
                  width: '64px',
                  height: '64px',
                  transform: 'translateZ(30px)',
                }}
              >
                <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke={s.color}
                    strokeWidth="8"
                    strokeDasharray="251.2"
                    strokeDashoffset={inView ? 251.2 - (251.2 * s.level) / 100 : 251.2}
                    strokeLinecap="round"
                    style={{
                      transition: `stroke-dashoffset 1.5s cubic-bezier(0.25, 1, 0.5, 1) ${i * 0.1}s`,
                      filter: `drop-shadow(0 0 5px ${s.color}88)`,
                    }}
                  />
                </svg>
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    color: s.color,
                    textShadow: `0 0 8px ${s.color}55`,
                  }}
                >
                  {s.level}%
                </div>
              </div>
            </div>
          </Card3D>
        ))}
      </div>
    </section>
  )
}
