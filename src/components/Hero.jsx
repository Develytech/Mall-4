import { siteConfig } from '../content/site'

export default function Hero({ shellClassName }) {
  const { hero } = siteConfig
  const targetId = hero.secondaryAction?.target
    ? `#${hero.secondaryAction.target}`
    : '#contact'

  const description = Array.isArray(hero.description) ? hero.description.filter(Boolean) : []

  return (
    <section
      id="hero"
      className="hero"
      style={{ '--hero-image': `url(${hero.imagePath})` }}
      aria-label={hero.headline}
    >
      <div className="hero__overlay" aria-hidden="true" />
      <div className={shellClassName}>
        <div className="hero__content">
          {hero.badge ? <p className="hero__badge">{hero.badge}</p> : null}
          {hero.headline ? <h1 className="hero__headline">{hero.headline}</h1> : null}
          {hero.subtext ? <p className="hero__subtext">{hero.subtext}</p> : null}
          {description.length > 0 ? (
            <div className="hero__description">
              {description.map((line, index) => (
                <p key={`${line}-${index}`}>{line}</p>
              ))}
            </div>
          ) : null}
          {hero.secondaryAction?.label ? (
            <a className="btn" href={targetId}>
              {hero.secondaryAction.label}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  )
}
