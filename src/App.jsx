import { useState } from 'react'
import Particles      from './components/Particles.jsx'
import NavBar         from './components/NavBar.jsx'
import HeroSection    from './components/HeroSection.jsx'
import AboutSection   from './components/AboutSection.jsx'
import SkillsSection  from './components/SkillsSection.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer         from './components/Footer.jsx'

export default function App() {
  const [active, setActive] = useState('Home')

  return (
    <div style={{ background: '#060412', minHeight: '100vh', overflowX: 'hidden' }}>
      <Particles />
      <NavBar active={active} setActive={setActive} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
