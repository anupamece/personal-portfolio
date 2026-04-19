import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import './Navbar.css'
import { fadeUp, navbarReveal, staggerFast } from '../../utils/motion'

const navItems = [
  { label: 'Home', targetId: 'home' },
  { label: 'Education', targetId: 'home-next-section' },
  { label: 'Skills', targetId: 'skills-section' },
  { label: 'Portfolio', targetId: 'portfolio-section' },
  { label: 'Achievements', targetId: 'achievements-section' },
  { label: 'Positions', targetId: 'positions-section' },
]

const ALL_SECTION_IDS = [...navItems.map((item) => item.targetId), 'contact-section']

function Navbar({ theme, onToggleTheme }) {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const scrollFrameRef = useRef(null)

  useEffect(() => {
    const sections = ALL_SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean)
      .sort((firstSection, secondSection) => firstSection.offsetTop - secondSection.offsetTop)

    if (sections.length === 0) {
      return undefined
    }

    const updateActiveSection = () => {
      const navbarHeight = document.querySelector('.navbar')?.getBoundingClientRect().height ?? 0
      const scrollThreshold = navbarHeight + 24
      let currentSectionId = sections[0].id

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top

        if (sectionTop <= scrollThreshold) {
          currentSectionId = section.id
        }
      })

      setActiveSection(currentSectionId)
    }

    const handleScroll = () => {
      if (scrollFrameRef.current !== null) {
        return
      }

      scrollFrameRef.current = window.requestAnimationFrame(() => {
        updateActiveSection()
        scrollFrameRef.current = null
      })
    }

    updateActiveSection()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateActiveSection)

      if (scrollFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollFrameRef.current)
      }
    }
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
    const navbarHeight = document.querySelector('.navbar')?.getBoundingClientRect().height ?? 0
    const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight
    window.scrollTo({ top, behavior: 'smooth' })
    setActiveSection(targetId)
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      className="navbar"
      variants={navbarReveal}
      initial="hidden"
      animate="visible"
    >
      <div className="navbar__inner">
        <motion.a
          className="brand"
          href="#home"
          aria-label="Anupam Poddar home"
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          animate="visible"
        >
          <img
            className="brand__logo"
            src="/heroImg/logo.png"
            alt="Anupam Poddar logo"
          />
        </motion.a>

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

        <motion.nav
          id="primary-navigation"
          className={`nav ${isMenuOpen ? 'nav--open' : ''}`}
          aria-label="Primary navigation"
          variants={staggerFast}
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item) => (
            <motion.a
              key={item.targetId}
              className={`nav__link ${activeSection === item.targetId ? 'nav__link--active' : ''}`}
              href={`#${item.targetId}`}
              onClick={(e) => handleNavClick(e, item.targetId)}
              aria-current={activeSection === item.targetId ? 'location' : undefined}
              variants={fadeUp}
              custom={0.14}
            >
              {item.label}
            </motion.a>
          ))}
          
          <motion.a
            className={`nav__cta ${activeSection === 'contact-section' ? 'nav__cta--active' : ''}`}
            href="#contact-section"
            onClick={(e) => handleNavClick(e, 'contact-section')}
            aria-current={activeSection === 'contact-section' ? 'location' : undefined}
            variants={fadeUp}
            custom={0.22}
          >
            Contact Me
          </motion.a>
        </motion.nav>

        <motion.button
          type="button"
          className="theme-switch"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'classic' : 'dark'} theme`}
          variants={fadeUp}
          custom={0.28}
          initial="hidden"
          animate="visible"
        >
          <span className="theme-switch__label">{theme === 'dark' ? 'Dark' : 'Classic'}</span>
          <span className={`theme-switch__track theme-switch__track--${theme}`}>
            <span className="theme-switch__thumb" />
          </span>
        </motion.button>
      </div>
    </motion.header>
  )
}

export default Navbar
