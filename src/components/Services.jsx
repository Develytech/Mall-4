import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { servicesContent } from '../content/services'
import { siteConfig } from '../content/site'

export default function Services({ shellClassName }) {
  const content = servicesContent
  const { motion } = siteConfig
  const listRef = useRef(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const listEl = listRef.current
    if (!listEl) {
      return undefined
    }

    const items = Array.from(listEl.querySelectorAll('.services__item'))

    if (reducedMotion) {
      items.forEach((item) => item.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [reducedMotion])

  const items = content.items.filter((item) => item.title || item.desc)

  return (
    <section id="services" className="section section--services">
      <div className={shellClassName}>
        {content.sectionTitle ? <h2 className="section__title">{content.sectionTitle}</h2> : null}
        {content.sectionText ? <p className="section__text">{content.sectionText}</p> : null}

        {items.length > 0 ? (
          <div className="services" ref={listRef}>
            {items.map((item, index) => (
              <article
                className="services__item"
                key={`${item.title}-${index}`}
                style={{ '--stagger-delay': `${index * motion.staggerMs}ms` }}
              >
                {item.title ? <h3 className="services__title">{item.title}</h3> : null}
                {item.desc ? <p className="services__desc">{item.desc}</p> : null}
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}
