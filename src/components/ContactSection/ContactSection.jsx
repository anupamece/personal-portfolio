import { motion } from 'framer-motion'
import ContactForm from '../ContactForm/ContactForm'
import ContactVisual from '../ContactVisual/ContactVisual'
import './ContactSection.css'
import { fadeUp, staggerParent, viewportOnce } from '../../utils/motion'

function ContactSection() {
  return (
    <motion.section
      className="contact-section"
      id="contact-section"
      variants={staggerParent}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <motion.div className="contact-section__inner" variants={fadeUp}>
        <motion.div className="contact-section__content" variants={fadeUp}>
          <motion.span className="contact-section__eyebrow" variants={fadeUp}>Contact</motion.span>
          <motion.h2 variants={fadeUp}>Let&apos;s Build Something Impactful</motion.h2>
          <motion.p variants={fadeUp}>
            Ready to collaborate on a modern product, portfolio, or creative web
            experience. We can expand this next with your real contact details,
            form, and social links.
          </motion.p>
          <ContactForm />
        </motion.div>
        <motion.div className="contact-section__visual" variants={fadeUp} custom={0.16}>
          <ContactVisual />
        </motion.div>
        
      </motion.div>
      
    </motion.section>
  )
}

export default ContactSection
