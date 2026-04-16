import ProjectCard from './ProjectCard.jsx'
import { PROJECTS } from '../data/index.js'
import useInView from '../hooks/useInView.js'

export default function ProjectsSection() {
  const [ref, inView] = useInView(0.15);

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(50px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        padding:  '6rem 2rem',
        position: 'relative',
        zIndex:   1,
        maxWidth: '1100px',
        margin:   '0 auto',
      }}
    >
      {/* Heading */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <p className="section-label">Portfolio</p>
        <h2
          style={{
            fontFamily:    "'Syne', sans-serif",
            fontSize:      'clamp(2rem, 4vw, 3rem)',
            fontWeight:    800,
            color:         '#fff',
            letterSpacing: '-0.03em',
          }}
        >
          Featured Projects
        </h2>
      </div>

      {/* Grid */}
      <div
        className="projects-grid"
        style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))',
          gap:                 '1.5rem',
        }}
      >
        {PROJECTS.map(p => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  )
}
