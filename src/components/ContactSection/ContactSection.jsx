import ContactForm from '../ContactForm/ContactForm'
import ContactVisual from '../ContactVisual/ContactVisual'
import './ContactSection.css'

function ContactSection() {
  return (
    <section className="contact-section" id="contact-section">
      <div className="contact-section__inner">
        <div className="contact-section__content">
          <span className="contact-section__eyebrow">Contact</span>
          <h2>Let&apos;s Build Something Impactful</h2>
          <p>
            Ready to collaborate on a modern product, portfolio, or creative web
            experience. We can expand this next with your real contact details,
            form, and social links.
          </p>
          <ContactForm />
        </div>
        <div className="contact-section__visual">
          <ContactVisual />
        </div>
        
      </div>
      
    </section>
  )
}

export default ContactSection
