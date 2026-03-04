import { siteConfig } from '../content/site'

export default function Header({ isSolid, shellClassName }) {
  const { company, branding, navigation } = siteConfig

  return (
    <header className={`site-header ${isSolid ? 'site-header--solid' : ''}`}>
      <div className={shellClassName}>
        <div className="site-header__inner">
          <a className="site-header__brand" href="#hero" aria-label={company.name}>
            <img src={branding.logoPath} alt={company.name} className="site-header__logo" />
          </a>
          <nav className="site-header__nav" aria-label="Huvudnavigering">
            {navigation.map((item) => (
              <a key={item.target} className="site-header__link" href={`#${item.target}`}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
