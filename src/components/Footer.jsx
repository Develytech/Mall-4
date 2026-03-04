import { siteConfig } from '../content/site'

export default function Footer({ shellClassName }) {
  const { footer, company } = siteConfig
  const text = footer.textTemplate
    .replace('{YEAR}', String(new Date().getFullYear()))
    .replace('{COMPANY}', company.name)

  return (
    <footer id="footer" className="site-footer">
      <div className={shellClassName}>
        <p className="site-footer__text">{text}</p>
      </div>
    </footer>
  )
}
