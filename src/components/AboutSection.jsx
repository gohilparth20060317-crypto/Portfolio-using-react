import Card3D from './Card3D.jsx'
import { EXPERTISE } from '../data/index.js'
import useInView from '../hooks/useInView.js'

export default function AboutSection() {
  const [ref, inView] = useInView(0.15);

  return (
    <section
      id="about"
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(50px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        padding: '6rem 2rem',
        position: 'relative',
        zIndex: 1,
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      <div
        className="about-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {/* ── Left: Copy ── */}
        <div>
          <p className="section-label">About Me</p>

          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '1.5rem',
            }}
          >
            Crafting code that
            <br />
            <span className="gradient-text-animated">leaves an impression</span>
          </h2>

          <p
            style={{
              color: 'rgba(255,255,255,0.55)',
              fontSize: '1rem',
              lineHeight: 1.8,
              fontFamily: "'Inter', sans-serif",
              marginBottom: '1rem',
            }}
          >
            Passionate about building modern web applications and continuously learning new technologies. I focus on writing clean, efficient code and creating user-friendly interfaces where both performance and design matter.
          </p>

          <p
            style={{
              color: 'rgba(255,255,255,0.4)',
              fontSize: '0.95rem',
              lineHeight: 1.8,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Based in India. Seeking opportunities to start my career as a developer. In my free time, I focus on improving my skills, working on personal projects, and learning from the developer community.
          </p>
        </div>

        {/* ── Right: Expertise grid ── */}
        <Card3D
          style={{
            background: 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(79,70,229,0.04))',
            border: '1px solid rgba(167,139,250,0.15)',
            borderRadius: '24px',
            padding: '2rem',
            backdropFilter: 'blur(12px)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
            }}
          >
            {EXPERTISE.map(item => (
              <div
                key={item.label}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '14px',
                  padding: '1rem',
                }}
              >
                <div style={{ fontSize: '1.3rem', marginBottom: '6px' }}>
                  {item.icon}
                </div>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 600,
                    color: '#e2e2ff',
                    fontSize: '0.88rem',
                    marginBottom: '4px',
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontSize: '0.72rem',
                    color: 'rgba(255,255,255,0.35)',
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: 1.5,
                  }}
                >
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </Card3D>
      </div>
    </section>
  )
}
