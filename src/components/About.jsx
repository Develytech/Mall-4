import { siteConfig } from '../content/site'

export default function About({ shellClassName }) {
  const { about } = siteConfig
  const paragraphs = about.paragraphs.filter((paragraph) => paragraph)
  const bullets = about.bullets.filter((bullet) => bullet)
  const ctaTarget = about.cta?.target ? `#${about.cta.target}` : '#contact'

  return (
    <section id="about" className="section section--about">
      <div className={shellClassName}>
        <div className="about">
          <div className="about__text">
            {about.eyebrow ? <p className="eyebrow">{about.eyebrow}</p> : null}
            {about.headline ? <h2 className="section__title">{about.headline}</h2> : null}
            {paragraphs.length > 0 ? (
              <div className="about__paragraphs">
                {paragraphs.map((paragraph, index) => (
                  <p key={`${paragraph}-${index}`}>{paragraph}</p>
                ))}
              </div>
            ) : null}
            {bullets.length > 0 ? (
              <ul className="about__bullets">
                {bullets.map((bullet, index) => (
                  <li key={`${bullet}-${index}`}>{bullet}</li>
                ))}
              </ul>
            ) : null}
            {about.cta?.label ? (
              <a className="btn" href={ctaTarget}>
                {about.cta.label}
              </a>
            ) : null}
          </div>

          <div className="about__media">
            <img src={about.image.src} alt={about.image.alt} className="about__image" />
            <div className="about__overlay" role="note">
              {about.overlay.label ? <p className="about__overlayLabel">{about.overlay.label}</p> : null}
              {about.overlay.text ? <p className="about__overlayText">{about.overlay.text}</p> : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
