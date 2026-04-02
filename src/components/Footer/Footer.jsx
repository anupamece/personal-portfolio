import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
} from 'react-icons/fi'
import { FaDribbble, FaXTwitter } from 'react-icons/fa6'
import './Footer.css'

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
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__copy">
          <h3>Anupam Poddar</h3>
          <p>Frontend-focused builder crafting clean interfaces and sharp digital experiences.</p>
        </div>

        <div className="footer__socials" aria-label="Footer social links">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              className="footer__social-link"
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
