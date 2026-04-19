import { motion } from 'framer-motion'
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
} from 'react-icons/fi'
import { FaDribbble, FaXTwitter } from 'react-icons/fa6'
import './Footer.css'
import { fadeUp, staggerFast, staggerParent, viewportOnce } from '../../utils/motion'

const socialLinks = [
  { label: 'GitHub', href: '#', Icon: FiGithub },
  { label: 'LinkedIn', href: '#', Icon: FiLinkedin },
  { label: 'Instagram', href: '#', Icon: FiInstagram },
  { label: 'Gmail', href: '#', Icon: FiMail },
  { label: 'X', href: '#', Icon: FaXTwitter },
  { label: 'Dribbble', href: '#', Icon: FaDribbble },
]

function Footer() {
  return (
    <motion.footer
      className="footer"
      variants={staggerParent}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <motion.div className="footer__inner" variants={fadeUp}>
        <motion.div className="footer__copy" variants={fadeUp}>
          <motion.h3 variants={fadeUp}>Anupam Poddar</motion.h3>
          <motion.p variants={fadeUp}>Frontend-focused builder crafting clean interfaces and sharp digital experiences.</motion.p>
        </motion.div>

        <motion.div className="footer__socials" aria-label="Footer social links" variants={staggerFast}>
          {socialLinks.map(({ label, href, Icon }) => (
            <motion.a
              key={label}
              className="footer__social-link"
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              variants={fadeUp}
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.footer>
  )
}

export default Footer
