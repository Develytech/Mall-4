import { useState } from 'react'
import { siteConfig } from '../content/site'

export default function Contact({ shellClassName }) {
  const { company, contact, contactSection } = siteConfig

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

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
        body: JSON.stringify({
          ...formState,
          company: '', // honeypot, ska alltid vara tom
        }),
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(data?.error || 'request-failed')
      }

      setStatus('success')
      setFeedback(contactSection.form.successMessage || 'Tack! Vi återkommer så snart vi kan.')
      setFormState({
        name: '',
        email: '',
        phone: '',
        message: '',
      })
    } catch (error) {
      setStatus('error')
      setFeedback(
        error.message && error.message !== 'request-failed'
          ? error.message
          : contactSection.form.errorMessage || 'Något gick fel. Försök igen.'
      )
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
                <a href={`tel:${contact.phone.replace(/\s+/g, '')}`}>{contact.phone}</a>
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

              {contactSection.form.fields.phoneLabel ? (
                <>
                  <label htmlFor="phone">{contactSection.form.fields.phoneLabel}</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={formState.phone}
                    onChange={onChange}
                    placeholder={contactSection.form.fields.phonePlaceholder || 'Valfritt'}
                  />
                </>
              ) : null}

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

              <input
                type="text"
                name="company"
                value=""
                onChange={() => {}}
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
                style={{ display: 'none' }}
              />

              <button type="submit" className="btn" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Skickar...' : contactSection.form.fields.submitText}
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