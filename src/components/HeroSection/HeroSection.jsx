import HeroAnimation from '../HeroAnimation/HeroAnimation'
import './HeroSection.css'
import { SiGmail } from "react-icons/si"
import { FaGithub, FaLinkedin } from "react-icons/fa"

function HeroSection() {
  return (
    <section className="hero" id="home">
        <HeroAnimation />

        <div className="hero__panel hero__panel--content">
          <div className="hero__content">
            <span className="hero__eyebrow">Hi, I am</span>
            <h1>Anupam Poddar</h1>
            <p className="hero__title">Frontend Developer / UI Designer</p>
            <p className="hero__description">
              I craft sharp, modern interfaces with a strong visual identity,
              blending thoughtful user experience with clean front-end execution.
            </p>

            <div className="hero__actions">
              <a className="hero__button hero__button--primary" href="#portfolio-section">
                View Portfolio
              </a>
              <a className="hero__button hero__button--ghost" href="#contact-section">
                Let&apos;s Talk
              </a>
            </div>

            <div className="socials" aria-label="Social links">
              <a
                className="socials__link"
                href="mailto:anupam@example.com"
                aria-label="Email"
                target="_blank"
                rel="noreferrer"
              >
                <SiGmail className='social_icon'/>
              </a>
              <a
                className="socials__link"
                href="https://github.com"
                aria-label="GitHub"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className='social_icon'/>
              </a>
              <a
                className="socials__link"
                href="https://linkedin.com"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className='social_icon'/>
              </a>
            </div>
          </div>
        </div>

        <div className="hero__panel hero__panel--visual">
          <div className="hero__visual-overlay" />
          <div className="hero__badge">Available for creative web projects</div>
          <div className="hero__image-ring">
            <div className="hero__image-wrap">
              <img
                className="hero__image"
                src="/heroImg/hero.png"
                alt="Portrait of Anupam Poddar"
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default HeroSection
