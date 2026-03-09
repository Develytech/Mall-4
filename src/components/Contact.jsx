import { useState } from 'react'
import { siteConfig } from '../content/site'

export default function Contact({ shellClassName }) {
  const { company, contact, contactSection } = siteConfig
  const location = typeof company.location === 'string' ? company.location.trim() : ''

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
        method: contactSection.form.method,
        headers: {
          'Content-Type': contactSection.form.contentType,
        },
        body: JSON.stringify({
          ...formState,
          company: '',
        }),
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(data?.error || 'request-failed')
      }

      setStatus('success')
      setFeedback(contactSection.form.successMessage)
      setFormState({
        name: '',
        email: '',
        phone: '',
        message: '',
      })
    } catch {
      setStatus('error')
      setFeedback(contactSection.form.errorMessage)
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
              <div className="contact__infoBlock">
                <p className="contact__infoLabel">Telefon</p>
                <p className="contact__infoValue">
                  <a href={`tel:${contact.phone.replace(/\s+/g, '')}`}>{contact.phone}</a>
                </p>
              </div>
            ) : null}

            {contact.email ? (
              <div className="contact__infoBlock">
                <p className="contact__infoLabel">E-post</p>
                <p className="contact__infoValue">
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </p>
              </div>
            ) : null}

            {location ? (
              <div className="contact__infoBlock">
                <p className="contact__infoLabel">Område</p>
                <p className="contact__infoValue">{location}</p>
              </div>
            ) : null}

            {contactSection.contactText ? (
              <div className="contact__infoBlock">
                <p className="contact__infoLabel">Om oss</p>
                <p className="contact__infoValue">{contactSection.contactText}</p>
              </div>
            ) : null}
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
                    placeholder={contactSection.form.fields.phonePlaceholder}
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
