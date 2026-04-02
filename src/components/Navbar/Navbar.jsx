import { useEffect, useState } from 'react'
import './Navbar.css'

const navItems = [
  { label: 'Education', targetId: 'home-next-section' },
  { label: 'Skills', targetId: 'skills-section' },
  { label: 'Portfolio', targetId: 'portfolio-section' },
  { label: 'Achievements', targetId: 'achievements-section' },
  { label: 'Positions', targetId: 'positions-section' },
]

const ALL_SECTION_IDS = [...navItems.map((item) => item.targetId), 'contact-section']

function Navbar() {
  const [activeSection, setActiveSection] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const getActiveSection = () => {
      const markerY = window.scrollY + 140 // aligns active switch with sticky navbar area
      let currentSection = ''

      ALL_SECTION_IDS.forEach((id) => {
        const el = document.getElementById(id)
        if (!el) return
        const top = el.getBoundingClientRect().top + window.scrollY

        if (top <= markerY) {
          currentSection = id
        }
      })

      setActiveSection(currentSection)
    }

    getActiveSection()

    window.addEventListener('scroll', getActiveSection, { passive: true })
    return () => window.removeEventListener('scroll', getActiveSection)
  }, [])

  useEffect(() => {
    const closeMenuOnDesktop = () => {
      if (window.innerWidth > 840) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', closeMenuOnDesktop)
    return () => window.removeEventListener('resize', closeMenuOnDesktop)
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const el = document.getElementById(targetId)
    if (!el) return
    // Offset for the fixed navbar height (~90px) + some breathing room
    const navbarHeight = 100
    const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight
    window.scrollTo({ top, behavior: 'smooth' })
    setActiveSection(targetId)
    setIsMenuOpen(false)
  }

  return (
    <header className="navbar">
      <a className="brand" href="#home" aria-label="Anupam Poddar home">
        <img
          className="brand__logo"
          src="/heroImg/logo.png"
          alt="Anupam Poddar logo"
        />
      </a>

      <button
        type="button"
        className={`nav__toggle ${isMenuOpen ? 'nav__toggle--open' : ''}`}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span className="nav__toggle-line" />
        <span className="nav__toggle-line" />
        <span className="nav__toggle-line" />
      </button>

      <nav
        id="primary-navigation"
        className={`nav ${isMenuOpen ? 'nav--open' : ''}`}
        aria-label="Primary navigation"
      >
        {navItems.map((item) => (
          <a
            key={item.targetId}
            className={`nav__link ${activeSection === item.targetId ? 'nav__link--active' : ''}`}
            href={`#${item.targetId}`}
            onClick={(e) => handleNavClick(e, item.targetId)}
            aria-current={activeSection === item.targetId ? 'location' : undefined}
          >
            {item.label}
          </a>
        ))}
        
        <a
          className={`nav__cta ${activeSection === 'contact-section' ? 'nav__cta--active' : ''}`}
          href="#contact-section"
          onClick={(e) => handleNavClick(e, 'contact-section')}
          aria-current={activeSection === 'contact-section' ? 'location' : undefined}
        >
          Contact Me
        </a>
      </nav>
    </header>
  )
}

export default Navbar