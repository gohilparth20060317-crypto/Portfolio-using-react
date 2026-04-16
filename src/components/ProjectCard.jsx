import { useState } from 'react'
import Card3D from './Card3D.jsx'

/** Convert #rrggbb → "r,g,b" for rgba() usage */
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `${r},${g},${b}`
}

export default function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false)
  const { title, desc, tags, color, accent, year, link, thumbnail } = project

  return (
    <Card3D
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? `linear-gradient(135deg, rgba(${hexToRgb(color)},0.14), rgba(${hexToRgb(color)},0.04))`
          : 'rgba(255,255,255,0.03)',
        border:        `1px solid ${hovered ? color + '44' : 'rgba(255,255,255,0.07)'}`,
        borderRadius:  '16px',
        padding:       '1.25rem',
        backdropFilter:'blur(12px)',
        cursor:        'pointer',
        transition:    'background 0.4s ease, border 0.4s ease',
        position:      'relative',
        overflow:      'hidden',
        display:       'flex',
        flexDirection: 'row',
        alignItems:    'stretch',
        gap:           '1.25rem',
      }}
    >
      {/* Corner glow */}
      <div
        style={{
          position:     'absolute',
          top:          '-40px',
          right:        '-40px',
          width:        '100px',
          height:       '100px',
          borderRadius: '50%',
          background:   `radial-gradient(circle, ${color}22, transparent 70%)`,
          transition:   'all 0.4s ease',
          transform:    hovered ? 'scale(2)' : 'scale(1)',
          pointerEvents:'none',
        }}
      />

      {/* Thumbnail */}
      {thumbnail && (
        <div
          style={{
            flexShrink: 0,
            width: '200px',
            borderRadius: '12px',
            overflow: 'hidden',
            position: 'relative',
            background: '#000',
          }}
        >
          {link && !link.includes('github.com') ? (
            <div
              style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <iframe
                src={link}
                title={title}
                scrolling="no"
                sandbox="allow-same-origin allow-scripts"
                style={{
                  width: '200%',
                  height: '200%',
                  border: 'none',
                  transform: 'scale(0.5)',
                  transformOrigin: 'top left',
                  pointerEvents: 'none',
                  transition: 'transform 0.5s ease',
                  ...(hovered ? { transform: 'scale(0.54)' } : {}),
                }}
              />
            </div>
          ) : (
            <img
              src={thumbnail}
              alt={title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s ease',
                transform: hovered ? 'scale(1.08)' : 'scale(1)',
              }}
            />
          )}
          {/* Subtle overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)`,
              opacity: hovered ? 0.2 : 0.6,
              transition: 'opacity 0.4s ease',
              pointerEvents: 'none',
            }}
          />
        </div>
      )}

      {/* Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {/* Header: Title + Year */}
        <div
          style={{
            display:        'flex',
            justifyContent: 'space-between',
            alignItems:     'center',
            marginBottom:   '0.5rem',
          }}
        >
          <h3
            style={{
              fontFamily:   "'Syne', sans-serif",
              fontSize:     '1.25rem',
              fontWeight:   700,
              color:        '#fff',
              letterSpacing:'-0.02em',
            }}
          >
            {title}
          </h3>
          <span
            style={{
              fontSize:   '0.7rem',
              color:      'rgba(255,255,255,0.4)',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {year}
          </span>
        </div>

        {/* Description */}
        <p
          style={{
            color:        'rgba(255,255,255,0.6)',
            fontSize:     '0.85rem',
            lineHeight:   1.5,
            fontFamily:   "'Inter', sans-serif",
            marginBottom: '1rem',
          }}
        >
          {desc}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '1rem' }}>
          {tags.map(tag => (
            <span
              key={tag}
              style={{
                padding:      '3px 10px',
                borderRadius: '999px',
                fontSize:     '0.68rem',
                fontFamily:   "'Inter', sans-serif",
                fontWeight:   600,
                letterSpacing:'0.04em',
                background:   `${color}18`,
                color:        accent,
                border:       `1px solid ${color}33`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop:  'auto',
            display:    'flex',
            alignItems: 'center',
          }}
        >
          <button
            style={{
              background:   'transparent',
              border:       `1px solid ${hovered ? accent : 'rgba(255,255,255,0.1)'}`,
              color:        hovered ? accent : 'rgba(255,255,255,0.5)',
              padding:      '6px 14px',
              borderRadius: '999px',
              fontSize:     '0.75rem',
              fontFamily:   "'Inter', sans-serif",
              cursor:       'pointer',
              fontWeight:   500,
              letterSpacing:'0.02em',
              transition:   'all 0.3s ease',
            }}
            onClick={() => window.open(link, '_blank')}
          >
            View Project →
          </button>
        </div>
      </div>
    </Card3D>
  )
}
