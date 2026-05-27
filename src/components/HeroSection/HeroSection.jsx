import { motion } from 'framer-motion'
import HeroAnimation from '../HeroAnimation/HeroAnimation'
import HeroFloatingIcons from './HeroFloatingIcons'
import HeroVisualPortal from './HeroVisualPortal'
import './HeroSection.css'
import { SiGmail } from "react-icons/si"
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa"
import { fadeUp, staggerFast, staggerParent, viewportOnce } from '../../utils/motion'
import { Link } from 'react-router-dom'

const MotionLink = motion(Link)

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
        <HeroFloatingIcons />

        <motion.div className="hero__panel hero__panel--content" variants={fadeUp}>
          <motion.div className="hero__content" variants={staggerParent}>
            <motion.span className="hero__eyebrow" variants={fadeUp}>Hii, I&apos;m</motion.span>
            <motion.h1 variants={fadeUp}>Anupam Poddar</motion.h1>
            <motion.p className="hero__title" variants={fadeUp}>
              Full-Stack Developer <span className="hero__title-sep">//</span> UI Designer
            </motion.p>
            <motion.p className="hero__description" variants={fadeUp}>
              I engineer scalable, high-performance web applications and design immersive digital products.
              Blending technical precision with aesthetic mastery to create web experiences that are not just functional, but unforgettable.
            </motion.p>

            <div className="hero__actions">
              <motion.a className="hero__button hero__button--primary" href="https://drive.google.com/file/d/1OOJ7ZMQ6dWw_rFHcaNJcOnMYg83z5NA7/view?usp=drive_link" target='_blank' variants={fadeUp}>
                Download CV
                <FaArrowDown className='hero__button-icon' aria-hidden='true' />
              </motion.a>
              <MotionLink className="hero__button hero__button--ghost" to="/about" variants={fadeUp}>
                About Me
              </MotionLink>
            </div>

            <div className="socials" aria-label="Social links">
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
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="hero__panel hero__panel--visual" variants={fadeUp} custom={0.16}>
          <HeroVisualPortal />
        </motion.div>
      </motion.section>
    )
  }
  
  export default HeroSection
