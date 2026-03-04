import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { siteConfig } from './content/site'
import { useScrollPosition } from './hooks/useScrollPosition'

function getShellClass(usage) {
  return `layout-shell layout-shell--${usage.width} gutter--${usage.gutter}`
}

function App() {
  const scrollY = useScrollPosition()
  const isSolidHeader = scrollY > 40

  const rootVars = {
    '--color-accent': siteConfig.branding.accentColor,
    '--layout-header-h': `${siteConfig.layout.headerHeightPx}px`,
    '--layout-section-py-mobile': `${siteConfig.layout.sectionPaddingYMobilePx}px`,
    '--layout-section-py-desktop': `${siteConfig.layout.sectionPaddingYDesktopPx}px`,
    '--layout-max-standard': `${siteConfig.layout.containerMaxWidthPx}px`,
    '--layout-max-wide': `${siteConfig.layout.wideContainerMaxWidthPx}px`,
    '--layout-max-full': `${siteConfig.layout.fullBleedMaxWidthPx}px`,
    '--layout-fluid-standard': `${siteConfig.layout.containerFluidVw}vw`,
    '--layout-fluid-wide': `${siteConfig.layout.wideContainerFluidVw}vw`,
    '--layout-fluid-narrow': `${siteConfig.layout.narrowContainerFluidVw}vw`,
    '--layout-max-narrow': `${siteConfig.layout.narrowContainerMaxWidthPx}px`,
    '--radius-base': `${siteConfig.layout.borderRadiusPx}px`,
    '--gutter-tight': siteConfig.layout.gutterTight,
    '--gutter-standard': siteConfig.layout.gutterStandard,
    '--gutter-wide': siteConfig.layout.gutterWide,
    '--motion-duration': `${siteConfig.motion.durationMs}ms`,
    '--font-family-base':
      siteConfig.branding.fontFamily === 'system'
        ? 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
        : 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  }

  return (
    <div className="site" style={rootVars}>
      <Header
        isSolid={isSolidHeader}
        shellClassName={getShellClass(siteConfig.layoutUsage.header)}
      />

      <main>
        <Hero shellClassName={getShellClass(siteConfig.layoutUsage.hero)} />
        <About shellClassName={getShellClass(siteConfig.layoutUsage.about)} />
        <Services shellClassName={getShellClass(siteConfig.layoutUsage.services)} />
        <Gallery shellClassName={getShellClass(siteConfig.layoutUsage.gallery)} />
        <Contact shellClassName={getShellClass(siteConfig.layoutUsage.contact)} />
      </main>

      <Footer shellClassName={getShellClass(siteConfig.layoutUsage.footer)} />
    </div>
  )
}

export default App
