import { useEffect, useMemo, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FiArrowUpRight, FiCheckCircle, FiSend, FiXCircle } from 'react-icons/fi'
import './ContactForm.css'

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

function ContactForm() {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState(null)

  const emailConfig = useMemo(
    () => ({
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    }),
    [],
  )

  useEffect(() => {
    if (emailConfig.publicKey) {
      emailjs.init({
        publicKey: emailConfig.publicKey,
      })
    }
  }, [emailConfig.publicKey])

  useEffect(() => {
    if (!toast) {
      return undefined
    }

    const timeoutId = window.setTimeout(() => {
      setToast(null)
    }, 3200)

    return () => window.clearTimeout(timeoutId)
  }, [toast])

  const validate = () => {
    const nextErrors = {}

    if (!formData.name.trim()) {
      nextErrors.name = 'Please enter your name.'
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!formData.subject.trim()) {
      nextErrors.subject = 'Please enter a subject.'
    }

    if (!formData.message.trim()) {
      nextErrors.message = 'Please enter your message.'
    } else if (formData.message.trim().length < 15) {
      nextErrors.message = 'Message should be at least 15 characters.'
    }

    return nextErrors
  }

  const showToast = (type, message) => {
    setToast({ type, message })
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))

    setErrors((current) => ({
      ...current,
      [name]: '',
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      showToast('error', 'Please fix the form errors before submitting.')
      return
    }

    if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) {
      showToast('error', 'EmailJS keys are missing. Add them in your environment file.')
      return
    }

    if (
      emailConfig.serviceId === 'your_service_id' ||
      emailConfig.templateId === 'your_template_id' ||
      emailConfig.publicKey === 'your_public_key'
    ) {
      showToast('error', 'Replace the placeholder EmailJS values in your .env file.')
      return
    }

    try {
      setIsSubmitting(true)

      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email,
        },
        {
          publicKey: emailConfig.publicKey,
        },
      )

      setFormData(initialForm)
      setErrors({})
      showToast('success', 'Message sent successfully.')
    } catch (error) {
      const errorMessage =
        error?.text ||
        error?.message ||
        (typeof error?.status === 'number' ? `EmailJS error ${error.status}` : '') ||
        'Something went wrong while sending your message.'

      console.error('EmailJS send failed:', error)
      showToast('error', errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {toast ? (
        <div className={`contact-toast contact-toast--${toast.type}`} role="status" aria-live="polite">
          {toast.type === 'success' ? <FiCheckCircle /> : <FiXCircle />}
          <span>{toast.message}</span>
        </div>
      ) : null}

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="contact-form__grid">
          <label className="contact-form__field">
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
            />
            {errors.name ? <small>{errors.name}</small> : null}
          </label>

          <label className="contact-form__field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
            />
            {errors.email ? <small>{errors.email}</small> : null}
          </label>
        </div>

        <label className="contact-form__field">
          <span>Subject</span>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Project inquiry"
          />
          {errors.subject ? <small>{errors.subject}</small> : null}
        </label>

        <label className="contact-form__field">
          <span>Message</span>
          <textarea
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me a bit about your project, timeline, or collaboration idea."
          />
          {errors.message ? <small>{errors.message}</small> : null}
        </label>

        <button className="contact-form__submit" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Submit Message'}
          <span className="contact-form__submit-icon" aria-hidden="true">
            {isSubmitting ? <FiSend /> : <FiArrowUpRight />}
          </span>
        </button>
      </form>
    </>
  )
}

export default ContactForm
