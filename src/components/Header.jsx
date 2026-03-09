import { useEffect, useState } from 'react'
import { siteConfig } from '../content/site'

export default function Header({ isSolid, shellClassName }) {
  const { company, branding, navigation } = siteConfig
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={`site-header ${isSolid ? 'site-header--solid' : ''}`}>
      <div className={shellClassName}>
        <div className="site-header__inner">
          <a className="site-header__brand" href="#hero" aria-label={company.name}>
            <img src={branding.logoPath} alt={company.name} className="site-header__logo" />
          </a>
          <button
            type="button"
            className={`site-header__toggle ${isMenuOpen ? 'site-header__toggle--open' : ''}`}
            aria-label={isMenuOpen ? 'Stäng meny' : 'Öppna meny'}
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="site-header__toggleIcon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>

          <nav
            className={`site-header__nav ${isMenuOpen ? 'site-header__nav--open' : ''}`}
            aria-label="Huvudnavigering"
          >
            {navigation.map((item) => (
              <a
                key={item.target}
                className="site-header__link"
                href={`#${item.target}`}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
