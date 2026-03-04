export const siteConfig = {
  language: {
    content: 'sv-SE',
    codeComments: 'en',
  },
  company: {
    name: 'Ljus & Kraft Stockholm AB',
    domain: '',
    location: 'Stockholm med kranskommuner',
    tagline: 'Elinstallationer med precision och känsla för detaljer',
    description:
      'Ljus & Kraft Stockholm utför elinstallationer för privatpersoner och företag i Stockholm. Företaget levererar säkra, genomtänkta och hållbara lösningar.',
  },
  contact: {
    email: 'simon@develytech.se',
    phone: '+46 70 080 97 24',
  },
  branding: {
    accentColor: '#1f2933',
    logoPath: '/assets/logo.png',
    fontFamily: 'system',
  },
  layout: {
    containerMaxWidthPx: 1360,
    wideContainerMaxWidthPx: 1760,
    fullBleedMaxWidthPx: 9999,
    containerFluidVw: 92,
    wideContainerFluidVw: 98,
    narrowContainerMaxWidthPx: 1120,
    narrowContainerFluidVw: 92,
    sectionPaddingYMobilePx: 72,
    sectionPaddingYDesktopPx: 104,
    borderRadiusPx: 14,
    shadowStyle: 'soft',
    headerHeightPx: 72,
    gutterTight: 'clamp(18px, 2vw, 44px)',
    gutterStandard: 'clamp(26px, 3vw, 80px)',
    gutterWide: 'clamp(34px, 4vw, 120px)',
  },
  layoutUsage: {
    header: { width: 'wide', gutter: 'tight' },
    hero: { width: 'standard', gutter: 'wide' },
    about: { width: 'standard', gutter: 'standard' },
    services: { width: 'standard', gutter: 'standard' },
    gallery: { width: 'wide', gutter: 'tight' },
    contact: { width: 'wide', gutter: 'standard' },
    footer: { width: 'wide', gutter: 'tight' },
  },
  motion: {
    preset: 'fade-up',
    durationMs: 520,
    staggerMs: 90,
  },
  hero: {
    imagePath: '/assets/hero.jpg',
    badge: 'ELINSTALLATION • LJUSDESIGN • STYRSYSTEM • PROJEKTERING',
    headline: 'Elinstallationer med precision och känsla för detaljer.',
    subtext: 'För privatpersoner och företag i Stockholm.',
    description: [
      'Vi levererar säkra, genomtänkta och hållbara lösningar.',
      'Ert installationsföretag med det lilla extra.',
    ],
    secondaryAction: {
      label: 'Kontakta oss',
      target: 'contact',
    },
  },
  navigation: [
    { label: 'Om oss', target: 'about' },
    { label: 'Tjänster', target: 'services' },
    { label: 'Projekt', target: 'gallery' },
    { label: 'Kontakta oss', target: 'contact' },
  ],
  about: {
    eyebrow: 'OM OSS – ELEKTRIKER I STOCKHOLM',
    headline: 'En trygg elpartner i Stockholm',
    paragraphs: [
      'Vi hjälper privatpersoner, BRF:er och företag i Stockholm med allt från servicejobb till större installationer. Du får tydlig dialog, väl utfört arbete och lösningar som håller över tid, oavsett uppdragets storlek.',
      'Vi arbetar tryggt i både äldre fastigheter och nyproduktion. Med noggrann planering, säker installation och tydlig dokumentation skapar vi ett slutresultat som fungerar i vardagen och ser professionellt ut.',
      'Snabb återkoppling och transparent prissättning är en självklarhet. Du får en tydlig offert, en ansvarig kontaktperson och uppföljning från start till färdig leverans.',
    ],
    bullets: [
      'Auktoriserade & certifierade elektriker',
      'Tydlig offert – inga överraskningar',
      'Återkoppling inom 24h',
    ],
    cta: {
      label: 'Kontakta oss',
      target: 'contact',
    },
    image: {
      src: '/assets/about/about.jpg',
      alt: 'Elektriker som installerar utrustning',
    },
    overlay: {
      label: 'STOCKHOLM',
      text: 'Elinstallation • Service • Projektering',
    },
  },
  services: {
    sectionTitle: 'Tjänster',
    sectionText:
      'Elinstallationer och tekniska lösningar med fokus på kvalitet, säkerhet och långsiktig funktion.',
    presentation: 'textual',
    items: [
      {
        title: 'Elinstallation',
        desc: 'Elinstallationer för både privatpersoner och företag, utförda enligt gällande regler och med hög yrkesstandard.',
      },
      {
        title: 'Eldesign & Ljusdesign',
        desc: 'Planering och utformning av el- och ljuslösningar anpassade efter funktion, estetik och energieffektivitet.',
      },
      {
        title: 'Projektering',
        desc: 'Strukturerad projektering som säkerställer rätt lösning från tidigt skede till färdig installation.',
      },
      {
        title: 'Styrsystem',
        desc: 'Installation och anpassning av styrsystem för belysning och tekniska funktioner i fastigheter.',
      },
      {
        title: 'Belysning',
        desc: 'Installation av funktionell och energieffektiv belysning för bostäder, kommersiella lokaler och industri.',
      },
    ],
  },
  gallery: {
    sectionTitle: 'Projekt',
    sectionText: 'Ett urval av installationer och projekt.',
    behavior: {
      aspectRatio: '9/16',
      desktopColumns: 3,
      gapPx: 22,
      edgePaddingPx: 22,
    },
    images: [
      { src: '/assets/gallery/01.jpg', alt: 'Elinstallation i projekt' },
      { src: '/assets/gallery/02.jpg', alt: 'Elcentral installation' },
      { src: '/assets/gallery/03.jpg', alt: 'Belysningsinstallation' },
    ],
  },
  contactSection: {
    sectionTitle: 'Kontakt',
    sectionText: 'Hör av dig med frågor eller underlag, så återkommer vi.',
    contactText: 'Ljus & Kraft Stockholm utför alla typer av elinstallationer.',
    area: 'Stockholm med kranskommuner',
    form: {
      enabled: true,
      submitBehavior: 'api',
      endpoint: '/api/contact',
      fields: {
        nameLabel: 'Namn',
        emailLabel: 'E-post',
        messageLabel: 'Meddelande',
        namePlaceholder: 'Ditt namn',
        emailPlaceholder: 'din@mail.se',
        messagePlaceholder: 'Berätta kort...',
        submitText: 'Skicka',
      },
    },
  },
  footer: {
    textTemplate: '© {YEAR} {COMPANY}. Alla rättigheter förbehållna.',
  },
}
