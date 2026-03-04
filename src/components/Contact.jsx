import { useState } from 'react'
import { siteConfig } from '../content/site'

export default function Contact({ shellClassName }) {
  const { company, contact, contactSection } = siteConfig
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  const onChange = (event) => {
    const { name, value } = event.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setStatus('submitting')
    setFeedback('')

    try {
      const response = await fetch(contactSection.form.endpoint, {
        method: contactSection.form.method || 'POST',
        headers: {
          'Content-Type': contactSection.form.contentType || 'application/json',
        },
        body: JSON.stringify(formState),
      })

      if (!response.ok) {
        throw new Error('request-failed')
      }

      setStatus('success')
      setFeedback(contactSection.form.successMessage || '')
      setFormState({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
      setFeedback(contactSection.form.errorMessage || '')
    }
  }

  return (
    <section id="contact" className="section section--contact">
      <div className={shellClassName}>
        {contactSection.sectionTitle ? <h2 className="section__title">{contactSection.sectionTitle}</h2> : null}
        {contactSection.sectionText ? <p className="section__text">{contactSection.sectionText}</p> : null}

        <div className="contact">
          <aside className="contact__info" aria-label={contactSection.sectionTitle}>
            {contact.phone ? (
              <p>
                <a href={`tel:${contact.phone}`}>{contact.phone}</a>
              </p>
            ) : null}
            {contact.email ? (
              <p>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
            ) : null}
            {company.location ? <p>{company.location}</p> : null}
            {contactSection.area ? <p>{contactSection.area}</p> : null}
            {contactSection.contactText ? <p>{contactSection.contactText}</p> : null}
          </aside>

          {contactSection.form.enabled ? (
            <form className="contact__form" onSubmit={onSubmit} noValidate>
              <label htmlFor="name">{contactSection.form.fields.nameLabel}</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={formState.name}
                onChange={onChange}
                placeholder={contactSection.form.fields.namePlaceholder}
                required
              />

              <label htmlFor="email">{contactSection.form.fields.emailLabel}</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formState.email}
                onChange={onChange}
                placeholder={contactSection.form.fields.emailPlaceholder}
                required
              />

              <label htmlFor="message">{contactSection.form.fields.messageLabel}</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formState.message}
                onChange={onChange}
                placeholder={contactSection.form.fields.messagePlaceholder}
                required
              />

              <button type="submit" className="btn" disabled={status === 'submitting'}>
                {contactSection.form.fields.submitText}
              </button>

              {feedback ? (
                <p className={`contact__feedback contact__feedback--${status}`} role="status" aria-live="polite">
                  {feedback}
                </p>
              ) : null}
            </form>
          ) : null}
        </div>
      </div>
    </section>
  )
}
