import { useState } from 'react'
import Card3D from './Card3D.jsx'
import { SOCIALS, SOCIAL_LINKS } from '../data/index.js'
import useInView from '../hooks/useInView.js'

const INPUT_STYLE = {
  width:        '100%',
  padding:      '12px 16px',
  background:   'rgba(255,255,255,0.05)',
  border:       '1px solid rgba(255,255,255,0.1)',
  borderRadius: '12px',
  color:        '#fff',
  fontSize:     '0.95rem',
  fontFamily:   "'Inter', sans-serif",
  outline:      'none',
  boxSizing:    'border-box',
  transition:   'border-color 0.2s, box-shadow 0.2s',
}

const LABEL_STYLE = {
  display:       'block',
  fontSize:      '0.75rem',
  color:         'rgba(255,255,255,0.5)',
  fontFamily:    "'Inter', sans-serif",
  marginBottom:  '8px',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
}

const FIELDS = [
  { key: 'name',    label: 'Name',    type: 'text',  placeholder: 'Your name' },
  { key: 'email',   label: 'Email',   type: 'email', placeholder: 'your@email.com' },
]

export default function ContactSection() {
  const [form, setForm]   = useState({ name: '', email: '', message: '' })
  const [sent, setSent]   = useState(false)
  const [focus, setFocus] = useState(null)
  const [ref, inView]     = useInView(0.15)

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(50px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        padding:  '6rem 2rem 8rem',
        position: 'relative',
        zIndex:   1,
        maxWidth: '650px',
        margin:   '0 auto',
      }}
    >
      {/* Heading */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p className="section-label">Contact</p>
        <h2
          style={{
            fontFamily:    "'Syne', sans-serif",
            fontSize:      'clamp(2rem, 4vw, 3rem)',
            fontWeight:    800,
            color:         '#fff',
            letterSpacing: '-0.03em',
            marginBottom:  '0.75rem',
            lineHeight:    1.1,
          }}
        >
          Let's build something
          <br />
          <span className="gradient-text-animated">extraordinary</span>
        </h2>
        <p
          style={{
            color:      'rgba(255,255,255,0.4)',
            fontFamily: "'Inter', sans-serif",
            fontSize:   '0.95rem',
          }}
        >
          Got a project in mind? I'd love to hear from you.
        </p>
      </div>

      {/* Card */}
      <Card3D
        style={{
          background:    'rgba(255,255,255,0.03)',
          border:        '1px solid rgba(167,139,250,0.15)',
          borderRadius:  '24px',
          padding:       '2.5rem',
          backdropFilter:'blur(12px)',
        }}
      >
        {sent ? (
          /* Success state */
          <div
            style={{
              textAlign: 'center',
              padding:   '3rem 0',
              animation: 'fadeUp 0.5s ease both',
            }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize:   '1.3rem',
                color:      '#a78bfa',
                fontWeight: 700,
              }}
            >
              Message sent!
            </div>
            <div
              style={{
                color:      'rgba(255,255,255,0.4)',
                fontFamily: "'Inter', sans-serif",
                marginTop:  '0.5rem',
              }}
            >
              I'll get back to you within 24 hours.
            </div>
          </div>
        ) : (
          /* Form */
          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            {FIELDS.map(f => (
              <div key={f.key}>
                <label style={LABEL_STYLE}>{f.label}</label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  value={form[f.key]}
                  onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                  onFocus={() => setFocus(f.key)}
                  onBlur={() => setFocus(null)}
                  required
                  style={{
                    ...INPUT_STYLE,
                    borderColor: focus === f.key
                      ? 'rgba(167,139,250,0.5)'
                      : 'rgba(255,255,255,0.1)',
                  }}
                />
              </div>
            ))}

            <div>
              <label style={LABEL_STYLE}>Message</label>
              <textarea
                placeholder="Tell me about your project..."
                rows={5}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                onFocus={() => setFocus('message')}
                onBlur={() => setFocus(null)}
                required
                style={{
                  ...INPUT_STYLE,
                  resize:      'vertical',
                  borderColor: focus === 'message'
                    ? 'rgba(167,139,250,0.5)'
                    : 'rgba(255,255,255,0.1)',
                }}
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{
                padding:      '14px',
                borderRadius: '12px',
                background:   'linear-gradient(135deg, #7c3aed, #4f46e5)',
                border:       'none',
                color:        '#fff',
                fontSize:     '1rem',
                fontFamily:   "'Inter', sans-serif",
                fontWeight:   600,
                cursor:       'pointer',
                boxShadow:    '0 0 30px rgba(124,58,237,0.35)',
              }}
            >
              Send Message ✦
            </button>
          </form>
        )}
      </Card3D>

      {/* Social links */}
      <div
        style={{
          display:        'flex',
          justifyContent: 'center',
          gap:            '2rem',
          marginTop:      '3rem',
        }}
      >
        {SOCIALS.map((s) => {
          const url = SOCIAL_LINKS[s.toUpperCase()] || '#'
          
          let icon = null;
          if (s === 'GitHub') {
            icon = (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            )
          } else if (s === 'LinkedIn') {
            icon = (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
            )
          }

          return (
            <a
              key={s}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              style={{
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                color:          'rgba(255,255,255,0.35)',
                textDecoration: 'none',
                transition:     'color 0.2s ease',
              }}
              aria-label={s}
            >
              {icon}
            </a>
          )
        })}
      </div>
    </section>
  )
}
