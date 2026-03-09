import { siteConfig } from '../content/site'

export default function Footer({ shellClassName }) {
  const { footer, company, contact, navigation } = siteConfig
  const text = footer.textTemplate
    .replace('{YEAR}', String(new Date().getFullYear()))
    .replace('{COMPANY}', company.name)

  return (
    <footer id="footer" className="site-footer">
      <div className={shellClassName}>
        <div className="site-footer__grid">
          <section className="site-footer__col">
            <h2 className="site-footer__title">{company.name}</h2>
            {footer.description ? <p className="site-footer__muted">{footer.description}</p> : null}
          </section>

          <section className="site-footer__col" aria-label={footer.navigationTitle}>
            {footer.navigationTitle ? <h3 className="site-footer__heading">{footer.navigationTitle}</h3> : null}
            <nav className="site-footer__links" aria-label={footer.navigationTitle}>
              {navigation.map((item) => (
                <a key={item.target} href={`#${item.target}`}>
                  {item.label}
                </a>
              ))}
            </nav>
          </section>

          <section className="site-footer__col" aria-label={footer.contactTitle}>
            {footer.contactTitle ? <h3 className="site-footer__heading">{footer.contactTitle}</h3> : null}
            <div className="site-footer__links">
              {contact.phone ? <a href={`tel:${contact.phone.replace(/\s+/g, '')}`}>{contact.phone}</a> : null}
              {contact.email ? <a href={`mailto:${contact.email}`}>{contact.email}</a> : null}
              {company.location ? <p className="site-footer__muted">{company.location}</p> : null}
            </div>
          </section>
        </div>

        <p className="site-footer__text">{text}</p>
      </div>
    </footer>
  )
}
