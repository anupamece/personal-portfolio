import { motion } from 'framer-motion'
import HeroAnimation from '../HeroAnimation/HeroAnimation'
import './HeroSection.css'
import { SiGmail } from "react-icons/si"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { fadeUp, staggerFast, staggerParent, viewportOnce } from '../../utils/motion'

function HeroSection() {
  return (
    <motion.section
      className="hero"
      id="home"
      variants={staggerParent}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
        <HeroAnimation />

        <motion.div className="hero__panel hero__panel--content" variants={fadeUp}>
          <motion.div className="hero__content" variants={staggerParent}>
            <motion.span className="hero__eyebrow" variants={fadeUp}>Hi, I am</motion.span>
            <motion.h1 variants={fadeUp}>Anupam Poddar</motion.h1>
            <motion.p className="hero__title" variants={fadeUp}>Frontend Developer / UI Designer</motion.p>
            <motion.p className="hero__description" variants={fadeUp}>
              I craft sharp, modern interfaces with a strong visual identity,
              blending thoughtful user experience with clean front-end execution.
            </motion.p>

            <motion.div className="hero__actions" variants={staggerFast}>
              <motion.a className="hero__button hero__button--primary" href="#portfolio-section" variants={fadeUp}>
                View Portfolio
              </motion.a>
              <motion.a className="hero__button hero__button--ghost" href="#contact-section" variants={fadeUp}>
                Let&apos;s Talk
              </motion.a>
            </motion.div>

            <motion.div className="socials" aria-label="Social links" variants={staggerFast}>
              <motion.a
                className="socials__link"
                href="mailto:anupam@example.com"
                aria-label="Email"
                target="_blank"
                rel="noreferrer"
                variants={fadeUp}
              >
                <SiGmail className='social_icon'/>
              </motion.a>
              <motion.a
                className="socials__link"
                href="https://github.com"
                aria-label="GitHub"
                target="_blank"
                rel="noreferrer"
                variants={fadeUp}
              >
                <FaGithub className='social_icon'/>
              </motion.a>
              <motion.a
                className="socials__link"
                href="https://linkedin.com"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
                variants={fadeUp}
              >
                <FaLinkedin className='social_icon'/>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div className="hero__panel hero__panel--visual" variants={fadeUp} custom={0.16}>
          <div className="hero__visual-overlay" />
          <motion.div className="hero__badge" variants={fadeUp} custom={0.22}>Available for creative web projects</motion.div>
          <motion.div className="hero__image-ring" variants={fadeUp} custom={0.28}>
            <div className="hero__image-wrap">
              <img
                className="hero__image"
                src="/heroImg/hero.png"
                alt="Portrait of Anupam Poddar"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    )
  }
  
  export default HeroSection
