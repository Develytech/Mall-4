# Devely – Hantverkar-mall (Hero • Om oss • Tjänster • Bildgalleri • Kontakt)

Detta repo är en mall för att snabbt bygga en modern, premium och enkel företagshemsida för hantverkare/servicetjänster.
Sidan är single-page och content-driven: all text och innehåll hämtas från `src/content/` och får inte hårdkodas i komponenter.

---

CRITICAL IMPLEMENTATION RULE

You MUST read the entire README before writing code.
Skipping sections is not allowed.

Before finishing you MUST verify every rule in:
GLOBAL RULES
CONFIG
WEBSITE SPEC
FILE MAP

## 0) GLOBAL RULES (MUST FOLLOW)
Treat this README as the only input source.
Do NOT invent missing values. If a field is empty, keep it empty.
Only JavaScript (no TypeScript).
React + Vite project.
Use plain CSS (no Tailwind). No extra libs.
Keep components reusable and content-driven (no company text hardcoded in components).
All visible website content must be written in Swedish when CONFIG.language.content is "sv-SE".
Must be responsive (mobile-first) and accessible.
ALL text/content files must be UTF-8 encoded (ÅÄÖ must render correctly).
Motion must respect prefers-reduced-motion.
Premium constraint: keep UI minimal and calm. Avoid “app UI” patterns (glassy buttons, heavy cards, strong shadows).
No placeholder lorem content; use provided text only.
If a component behavior is described in WEBSITE SPEC, the component MUST implement it exactly (no fallbacks).
Smooth scroll behavior
Navigation clicks MUST scroll smoothly to the section.
Implementation example:
scroll-behavior: smooth;
All section IDs are predefined
Navigation must be generated from CONFIG.navigation

IMPORTANT: Contact form MUST be real (API). Mock submit is forbidden in this template.

---

# 1) CONFIG (EDIT THIS PER COMPANY) — YAML

language:
  content: "sv-SE"
  codeComments: "en"

company:
  name: "Ljus & Kraft Stockholm AB"
  domain: ""
  location: "Stockholm med kranskommuner"
  tagline: "Elinstallationer med precision och känsla för detaljer"
  description: "Ljus & Kraft Stockholm utför elinstallationer för privatpersoner och företag i Stockholm. Företaget levererar säkra, genomtänkta och hållbara lösningar."

contact:
  email: "oscar@lksgroup.se"
  phone: "+46 73 655 41 98"

branding:
  accentColor: "#1f2933"
  logoPath: "/assets/logo.png"
  fontFamily: "system"

layout:
  containerMaxWidthPx: 1360
  wideContainerMaxWidthPx: 1760
  fullBleedMaxWidthPx: 9999

  containerFluidVw: 92
  wideContainerFluidVw: 98
  narrowContainerMaxWidthPx: 1120
  narrowContainerFluidVw: 92

  sectionPaddingYMobilePx: 72
  sectionPaddingYDesktopPx: 104

  borderRadiusPx: 14
  shadowStyle: "soft"
  headerHeightPx: 72

  gutterTight: "clamp(18px, 2vw, 44px)"
  gutterStandard: "clamp(26px, 3vw, 80px)"
  gutterWide: "clamp(34px, 4vw, 120px)"

layoutUsage:
  header:   { width: "wide", gutter: "tight" }
  hero:     { width: "standard", gutter: "wide" }
  about:    { width: "wide", gutter: "standard" }
  services: { width: "wide", gutter: "standard" }
  gallery:  { width: "wide", gutter: "tight" }
  contact:  { width: "wide", gutter: "standard" }
  footer:   { width: "wide", gutter: "tight" }

motion:
  preset: "fade-up"
  durationMs: 520
  staggerMs: 90

hero:
  imagePath: "/assets/hero.jpg"
  badge: "ELINSTALLATION • LJUSDESIGN • STYRSYSTEM • PROJEKTERING"
  headline: "Elinstallationer med precision och känsla för detaljer."
  subtext: "För privatpersoner och företag i Stockholm."
  description:
    - "Vi levererar säkra, genomtänkta och hållbara lösningar."
    - "Ert installationsföretag med det lilla extra."
  secondaryAction:
    label: "Kontakta oss"
    target: "contact"

navigation:
  - label: "Om oss"
    target: "about"
  - label: "Tjänster"
    target: "services"
  - label: "Projekt"
    target: "gallery"
  - label: "Kontakta oss"
    target: "contact"

about:
  eyebrow: "OM OSS – ELEKTRIKER I STOCKHOLM"
  headline: "En trygg elpartner i Stockholm"
  paragraphs:
    - "Vi hjälper privatpersoner, BRF:er och företag i Stockholm med allt från servicejobb till större installationer. Du får tydlig dialog, väl utfört arbete och lösningar som håller över tid, oavsett uppdragets storlek."
    - "Vi arbetar tryggt i både äldre fastigheter och nyproduktion. Med noggrann planering, säker installation och tydlig dokumentation skapar vi ett slutresultat som fungerar i vardagen och ser professionellt ut."
    - "Snabb återkoppling och transparent prissättning är en självklarhet. Du får en tydlig offert, en ansvarig kontaktperson och uppföljning från start till färdig leverans."
  bullets:
    - "Auktoriserade & certifierade elektriker"
    - "Tydlig offert – inga överraskningar"
    - "Återkoppling inom 24h"
  cta:
    label: "Kontakta oss"
    target: "contact"
  image:
    src: "/assets/about.jpg"
    alt: "Elektriker som installerar utrustning"
  overlay:
    label: "STOCKHOLM"
    text: "Elinstallation • Service • Projektering"

services:
  sectionTitle: "Tjänster"
  sectionText: "Elinstallationer och tekniska lösningar med fokus på kvalitet, säkerhet och långsiktig funktion."
  presentation: "textual"
  items:
    - title: "Elinstallation"
      desc: "Elinstallationer för både privatpersoner och företag, utförda enligt gällande regler och med hög yrkesstandard."
    - title: "Eldesign & Ljusdesign"
      desc: "Planering och utformning av el- och ljuslösningar anpassade efter funktion, estetik och energieffektivitet."
    - title: "Projektering"
      desc: "Strukturerad projektering som säkerställer rätt lösning från tidigt skede till färdig installation."
    - title: "Styrsystem"
      desc: "Installation och anpassning av styrsystem för belysning och tekniska funktioner i fastigheter."
    - title: "Belysning"
      desc: "Installation av funktionell och energieffektiv belysning för bostäder, kommersiella lokaler och industri."

gallery:
  sectionTitle: "Projekt"
  sectionText: "Ett urval av installationer och projekt."
  behavior:
    aspectRatio: "9/16"
    desktopColumns: 3
    gapPx: 22
    edgePaddingPx: 22
  images:
    - src: "/assets/gallery/01.jpg"
      alt: "Elinstallation i projekt"
    - src: "/assets/gallery/02.jpg"
      alt: "Elcentral installation"
    - src: "/assets/gallery/03.jpg"
      alt: "Belysningsinstallation"

contactSection:
  sectionTitle: "Kontakt"
  sectionText: "Hör av dig med frågor eller underlag, så återkommer vi."
  contactText: "Ljus & Kraft Stockholm utför alla typer av elinstallationer."
  area: "Stockholm med kranskommuner"
  form:
    enabled: true
    submitBehavior: "api"
    endpoint: "/api/contact"
    fields:
      nameLabel: "Namn"
      emailLabel: "E-post"
      messageLabel: "Meddelande"
      namePlaceholder: "Ditt namn"
      emailPlaceholder: "din@mail.se"
      messagePlaceholder: "Berätta kort..."
      submitText: "Skicka"

footer:
  textTemplate: "© {YEAR} {COMPANY}. Alla rättigheter förbehållna."

---

## 2) WEBSITE SPEC

### Scope
Build a single-page website.
The site must feel premium: calm, minimal, consistent.
Avoid app-like UI. Content-first layout.

### Sections (order is mandatory)
1. Hero
2. Om oss (About)
3. Tjänster (Services)
4. Projektbilder (Gallery)
5. Kontakt (Contact)
6. Footer

### Header behavior
Header is fixed.
Over hero: transparent background.
After scrolling more than 40px:
- Background becomes solid (white or near-white)
- Subtle shadow
- Smooth transition 150ms–220ms

Header navigation (MUST)

All main sections MUST appear in the header navigation.

Navigation items MUST scroll to the corresponding section of the page using anchor links.

Required section IDs:

Hero → #hero  
About → #about  
Services → #services  
Gallery → #gallery  
Contact → #contact  

Each section component MUST include the matching id attribute.

Example:

<section id="about">...</section>


### Hero section
Full viewport height.
Large background image + dark overlay for readability.
Content: badge, headline, subtext.
CTA rules:
- No primary CTA in hero.
- Secondary action scrolls to Contact.
Hero background is full-bleed; hero text content follows layoutUsage.hero.

### About section (MUST match reference layout)
Goal: match the reference composition shown (text left, image right, overlay chip on image).

Desktop layout (MUST):
- Two-column layout
- Left: eyebrow, headline, 2–3 paragraphs, bullet list with checkmarks, one CTA button.
- Right: large image with rounded corners; calm soft shadow (very subtle).
- Overlay chip/card positioned bottom-left inside the image:
  - Small uppercase label
  - One line of text with dot-separated service tags
  - Semi-transparent light background, subtle border, no heavy shadow

Mobile layout (MUST):
- Single column
- Text first, image below
- Overlay remains on the image, readable on small screens

Tone:
- Swedish, factual, trustworthy
- No buzzwords

### Services section
Minimal list/grid (NOT cards).
No icons unless provided in content.
Use motion preset with stagger.
Use subtle dividers and typography to separate items.
Services should read as capabilities, not features.

### Gallery section — iPhone-format, bara bilder (MUST)
Purpose:
Show portrait project photos in a curated, premium rail.

Content:
Only images (no captions, no titles).
Alt text is required.

Mobile horizontal scroll (MUST):
Gallery MUST render:
- .gallery__railWrap (wrapper)
- .gallery__rail (scroll container, this exact class name)

Canonical mobile rail rules:
- .gallery { overflow: hidden; } (prevent page-level horizontal scroll)
- .gallery__railWrap { min-width: 0; width: 100%; max-width: 100%; }
- .gallery__rail { display:flex; flex-wrap:nowrap; overflow-x:auto; overflow-y:hidden; -webkit-overflow-scrolling:touch; scroll-behavior:auto; }
- Use CSS vars: --g-gap, --g-edge from YAML
- Rail padding must be: 0 var(--g-edge)
- Gap must be: var(--g-gap)
- Cards must NOT shrink on mobile:
  .gallery__card { flex: 0 0 72vw; max-width: 260px; }
- Portrait ratio: aspect-ratio: 9/16
- object-fit uses gallery.behavior.imageFit
- Hide scrollbar if YAML says so

Desktop layout (MUST): exactly 3 full cards
On desktop breakpoint and above:
- Rail MUST show exactly 3 full portrait cards (no peeking partial cards)
- Do NOT use clamp(), vw-based widths, or JS layout calcs for desktop sizing
- Use CSS-only formula on the rail:
  --g-cols = 3
  --g-cardW: calc((100% - (2 * var(--g-edge)) - ((var(--g-cols) - 1) * var(--g-gap))) / var(--g-cols))
- Each card uses: flex: 0 0 var(--g-cardW)

Edge fade (MUST, desktop):
- Subtle gradient overlay above rail background (not blur)
- Right fade visible when there is more content to the right
- Right fade disappears at the end
- Left fade optional, weaker than right, hidden at start
- Fade overlays MUST have pointer-events: none

Desktop interaction (MUST): arrows
Primary navigation on desktop MUST be left/right arrow buttons positioned OUTSIDE the rail.
Arrows must scroll exactly ONE card per click:
- step = (rendered first card width + gap)
- Rail MUST have scroll-behavior: auto
- Arrow click MAY use smooth behavior, but respect prefers-reduced-motion

Arrow visual spec lock (MUST — exact):
- Diameter: 42px
- Border radius: 999px
- Border: 1px solid rgba(31, 41, 51, 0.38)
- Background: rgba(255, 255, 255, 0.72)
- Icon color: #1b232b (default), #0f141a (hover)
- Disabled opacity: 0.3 (keep border visible)
- Use inline SVG (viewBox 0 0 24 24), stroke only, stroke width 1.8, round caps/joins
SVG path (MUST):
d="M8.5 5.5l7 6.5-7 6.5"
Right arrow: as-is
Left arrow: rotate 180deg or scaleX(-1)

Forbidden behaviors:
- Do NOT implement wheel-to-horizontal translation
- Do NOT add wheel event handlers
- Do NOT use scroll snapping on desktop
- Do NOT apply scroll-behavior: smooth on the rail element itself

Accessibility:
- Rail must be focusable (tabIndex=0)
- Arrow buttons must be keyboard operable + visible focus state
- Images must have meaningful alt text
- Respect prefers-reduced-motion

Premium constraints:
- Photos must feel like photos (minimal border, subtle radius)
- Avoid heavy shadows, glass effects, or strong borders

### Contact section (MUST be API)
Layout:
- Left: contact info (phone/email/location if available)
- Right: form (if enabled)
Form rules:
- Submit behavior MUST call the API endpoint (no mock)
- Use JSON per CONFIG.contactSection.form
- Show success/error messages from CONFIG
- Calm minimal styling, clear focus states, accessible labels

### Typography + spacing constraints
Use layout config values for section paddings.
Use layoutUsage width/gutter per section (no single global container).
Keep long text blocks readable (do not span full wide width).

---

## 3) FILE MAP

Root:
- README.md
- package.json
- vite.config.js

Public assets (served as-is):
public/
  assets/
    brand/
      logo.png
      hero.jpg
    about/
      about.jpg
    gallery/
      01.jpg
      02.jpg
      03.jpg

Source structure:
src/
  App.jsx
  main.jsx

  src/content/
    site.js
    services.js
    gallery.js

  src/components/
    Header.jsx
    Hero.jsx
    About.jsx
    Services.jsx
    Gallery.jsx
    Contact.jsx
    Footer.jsx

  src/hooks/
    useScrollPosition.js
    useReducedMotion.js

  src/styles/
    global.css

Functions (Cloudflare Pages Functions or equivalent):
functions/
  api/
    contact.js

Rules:
- All listed files must exist.
- Components must import content from src/content/.
- No company-specific strings hardcoded in components.
- Styling in src/styles/global.css.
- Contact form MUST be end-to-end functional via /api/contact.
- Assets must be referenced via absolute paths from /assets/... (from   public/). Example: "/assets/brand/hero.jpg"