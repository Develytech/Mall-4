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
All primary UI colors MUST be derived from CONFIG.branding.
Small utility colors, borders, overlays, and neutral rgba values MAY be hardcoded when explicitly specified in WEBSITE SPEC.

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

  backgroundColor: "#f8fafc"
  textColor: "#111827"

  footerBackground: "#1f2933"
  footerTextColor: "#ffffff"

  logoPath: "/assets/brand/logo.png"
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
  about:    { width: "standard", gutter: "standard" }
  services: { width: "standard", gutter: "standard" }
  gallery:  { width: "wide", gutter: "tight" }
  contact:  { width: "wide", gutter: "standard" }
  footer:   { width: "wide", gutter: "tight" }

motion:
  preset: "fade-up"
  durationMs: 520
  staggerMs: 90

hero:
  imagePath: "/assets/brand/hero.jpg"
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
  - label: "Bildgalleri"
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
    src: "/assets/about/about.jpg"
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
  sectionTitle: "Bildgalleri"
  sectionText: "Ett urval av bilder från våra installationer och arbeten."
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

  form:
    enabled: true
    submitBehavior: "api"
    endpoint: "/api/contact"
    method: "POST"
    contentType: "application/json"
    fields:
      nameLabel: "Namn"
      emailLabel: "E-post"
      phoneLabel: "Telefon"
      messageLabel: "Meddelande"
      namePlaceholder: "Ditt namn"
      emailPlaceholder: "din@mail.se"
      phonePlaceholder: "Valfritt"
      messagePlaceholder: "Beskriv kort vad du behöver hjälp med..."
      submitText: "Skicka"
    successMessage: "Tack! Vi återkommer så snart vi kan."
    errorMessage: "Något gick fel. Försök igen eller kontakta oss via telefon/e-post."

footer:
  description: "Elinstallationer för privatpersoner och företag i Stockholm med kranskommuner."
  navigationTitle: "Snabblänkar"
  contactTitle: "Kontakt"
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
4. Bildgalleri (Gallery)
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

Mobile header (MUST):

On mobile screens, the header MUST switch to a compact mobile navigation pattern.

Closed mobile state:
- Logo/brand on the left
- One menu toggle button on the right
- Header content must stay on a single row
- Inline desktop navigation MUST NOT remain visible
- The header height must remain controlled and compact

Open mobile menu state:
- Navigation links MUST be shown in a vertical stack
- Menu panel may appear as a dropdown below the header or a full-width overlay panel
- Links MUST remain generated from CONFIG.navigation
- The mobile menu MUST include the same navigation items as desktop
- Tapping a navigation item MUST close the mobile menu and scroll to the section

Mobile header layout rules:
- Logo area must be allowed to shrink without breaking layout
- Navigation text must never overlap the logo
- Header content must not wrap into multiple broken rows
- Long company names/logos must still fit within the mobile header layout
- Use clear spacing between logo and menu toggle

### Mobile navigation

The mobile navigation MUST use a minimal hamburger icon.

Rules:
- Mobile toggle MUST be a semantic button element for accessibility
- Use only three horizontal lines
- The control MUST appear visually as a standalone hamburger icon (not a boxed/bubbled button)
- Do NOT show a visible button box, border, or background behind the icon
- Icon must appear visually light and minimal

Position:
- top right of the header
- vertically centered with the logo

Tap area:
- minimum 44px tap area for accessibility

Desktop rules:
- Desktop navigation remains inline
- Mobile toggle button MUST be hidden on desktop

Accessibility:
- Mobile navigation must be keyboard accessible
- Focus order must remain logical
- Menu state must be communicated with aria-expanded

### Section scroll animation

Sections SHOULD use a subtle entrance animation when they enter the viewport.

Behavior:
- Sections fade in when scrolled into view
- Sections slide upward slightly during the animation

Animation rules:
- Initial state:
  opacity: 0
  transform: translateY(30px)

- Final state:
  opacity: 1
  transform: translateY(0)

Timing:
- duration: 500–700ms
- easing: ease-out

Trigger:
- Animation MUST start when the section enters the viewport
- Use IntersectionObserver or equivalent

Constraints:
- Animation MUST be subtle
- Do not delay content visibility excessively
- Animation MUST run only once per section


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

### Mobile gallery interaction (MUST)

The gallery MUST remain horizontally scrollable on mobile devices.

Purpose:
The horizontal rail allows users to quickly scan multiple project images while scrolling the page.

Mobile behaviour rules:

- Images MUST be displayed in a horizontal scrollable rail.
- The next image MUST partially peek from the right edge to indicate that more images are available.
- Users MUST be able to swipe horizontally to browse images.

Image interaction:

- When a user taps an image, it MUST open in a fullscreen image viewer.
- The fullscreen viewer MUST display the tapped image first.
- Users MUST be able to swipe left/right to navigate between images in fullscreen mode.
- The viewer MUST allow closing via a visible close button or tap outside.

Fullscreen viewer requirements:

- Dark background overlay
- Image centered on screen
- Swipe gesture for navigation
- Close control SHOULD use an icon-style button (preferred: `✕`) instead of text like "Stäng"
- Close control MAY be a subtle rounded icon button for a native viewer feel
- Image index indicator (example: "2 / 8") SHOULD be visible and placed near the top or bottom overlay area, not centered over the main image content
- Fullscreen image sizing MUST use:
  - max-width: 92vw
  - max-height: 88vh
  - object-fit: contain

Constraints:

- Gallery images MUST remain portrait format.
- Horizontal scrolling MUST remain the primary browsing method on the page.
- Fullscreen viewer is a secondary interaction for detailed viewing.

### Contact section (MUST be API)

Purpose:
The contact section is one of the most important conversion sections on the page.
It MUST feel balanced, structured, and trustworthy.

Desktop layout (MUST):
- The entire contact section content MUST be centered inside the section container
- The heading and intro text MUST align with the same container as the contact layout below
- Use a balanced two-column grid for the content row
- Left column: contact information
- Right column: contact form
- Recommended desktop grid:
  - left column: minmax(260px, 340px)
  - right column: minmax(420px, 560px)
- Gap between columns MUST feel generous (approx 72–96px)
- The full contact block MUST NOT feel stretched across the entire page width
- The form column MUST NOT exceed 560px width

Visual composition (MUST):
- The heading and intro text MUST sit above the two-column layout
- The heading MUST NOT appear detached or pushed further left than the content row
- The section MUST feel visually centered and compact, not left-heavy

Heading/intro alignment (MUST):
- Contact section heading and intro text MUST use the same max-width and horizontal alignment as the contact two-column block.
- They MUST be centered within the contact section container (not start at far-left container edge).
- On desktop, heading+intro and the contact grid MUST share one visual content column width.
- Implementation requirement: title/text wrapper width MUST match the contact block max-width.
- The heading and intro text SHOULD be text-aligned center on desktop.

Left column content (MUST):
The left column MUST display available contact information from CONFIG.

Display these if available:
- phone from CONFIG.contact.phone
- email from CONFIG.contact.email
- location from CONFIG.company.location
- text from CONFIG.contactSection.contactText

Do NOT render duplicate location information.
If both CONFIG.company.location and CONFIG.contactSection.area exist and contain the same meaning, show only one location row.

Left column structure (MUST):
Contact information MUST be grouped into clearly separated info blocks.

Recommended structure:

Phone
+46 ...

Email
mail@example.se

Område
Stockholm med kranskommuner

About / short text
Short supporting contact text

Each info block MUST have:
- a small label
- a value below it or beside it
- clear spacing between blocks

Info label style (MUST):
- font-size: 12px
- letter-spacing: 0.08em
- font-weight: 600
- color: #6b7280
- Labels MUST be clearly readable and must NOT look like placeholder text.

Phone MUST use a tel: link.
Email MUST use a mailto: link.

Form fields (MUST):
The form MUST include:
1. name
2. email
3. phone (optional)
4. message

Phone MUST be optional.
Labels MUST be visible and MUST NOT rely on placeholders alone.

Form behaviour (MUST):
Submit MUST call the API endpoint defined in:
CONFIG.contactSection.form.endpoint

HTTP method MUST use:
CONFIG.contactSection.form.method

Content-Type MUST use:
CONFIG.contactSection.form.contentType

Request format MUST be JSON with fields:
- name
- email
- phone (optional)
- message
- company (hidden honeypot, must be sent as empty string by the frontend)

Success and error messages MUST use:
- CONFIG.contactSection.form.successMessage
- CONFIG.contactSection.form.errorMessage

Form design rules (MUST):
Inputs and textarea MUST have:
- full width
- minimum padding around 14px
- border-radius around 10–14px
- subtle border
- clear focus state using branding.accentColor

Textarea MUST be visually taller than standard inputs and suitable for longer messages.

Submit button MUST:
- use branding.accentColor
- be visually prominent
- feel clearly clickable
- not look like a text link or ghost button
- use width: fit-content
- use min-width: 220px
- have margin-top: 16px
- be aligned so it does not span the full form width by default

Visual constraints:
- Avoid heavy shadows
- Avoid thick borders
- Avoid oversized empty space
- Keep styling minimal and calm
- The contact form MUST feel professional and premium

Mobile layout (MUST):
- Contact info MUST appear first
- Form MUST appear below
- Columns MUST stack vertically
- Keep generous vertical spacing between the intro, info, and form

### Footer
Footer MUST be present and content-driven.

Desktop layout (MUST):
- Three-column layout
- Column 1: company name + short description
- Column 2: navigation links generated from CONFIG.navigation
- Column 3: contact information
- Bottom row: copyright text from CONFIG.footer.textTemplate

Footer content rules:
- Company name MUST come from CONFIG.company.name
- Description MUST come from CONFIG.footer.description
- Navigation title MUST come from CONFIG.footer.navigationTitle
- Contact title MUST come from CONFIG.footer.contactTitle
- Navigation links MUST reuse CONFIG.navigation
- Contact column MUST show:
  - phone if available
  - email if available
  - location if available
- Footer styling MUST use branding.footerBackground and branding.footerTextColor if defined.

Footer behavior:
- Keep the footer visually calm and minimal
- No heavy borders, no strong shadows, no oversized cards
- Footer links must be accessible and clearly clickable
- Phone number MUST use a tel: link
- Email MUST use a mailto: link

Mobile layout (MUST):
- Stack all footer columns vertically
- Keep generous spacing between groups
- Bottom copyright row remains below all footer content

Premium constraints:
- Footer should feel clean and structured
- Avoid clutter and excessive content
- Use only the content defined in CONFIG

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
    ping.js

Rules:
- All listed files must exist.
- Components must import content from src/content/.
- No company-specific strings hardcoded in components.
- Styling in src/styles/global.css.
- Contact form MUST be end-to-end functional via /api/contact.
- Contact form field labels/placeholders MUST come from CONFIG.contactSection.form.fields.
- Contact form MUST include name, email, phone (optional), and message.
- Contact success/error UI messages MUST come from CONFIG.contactSection.form.successMessage and CONFIG.contactSection.form.errorMessage.
- Assets must be referenced via absolute paths from /assets/... (from   public/). Example: "/assets/brand/hero.jpg"
- Footer.jsx MUST render company info, navigation, and contact info from CONFIG.footer, CONFIG.company, CONFIG.contact, and CONFIG.navigation.

## Backend Functions (Cloudflare Pages)

The project MUST implement backend endpoints using Cloudflare Pages Functions.

The functions directory MUST follow the FILE MAP exactly.

functions/
  api/
    contact.js
    ping.js

## Footer Component

### src/components/Footer.jsx

The footer MUST be content-driven and use the following config sources:

- `siteConfig.company.name`
- `siteConfig.footer.description`
- `siteConfig.footer.navigationTitle`
- `siteConfig.footer.contactTitle`
- `siteConfig.navigation`
- `siteConfig.contact`
- `siteConfig.company.location`
- `siteConfig.footer.textTemplate`

The component MUST render:

1. Company column
   - company name
   - footer description

2. Navigation column
   - title from `footer.navigationTitle`
   - links generated from `navigation`

3. Contact column
   - title from `footer.contactTitle`
   - clickable phone link if present
   - clickable email link if present
   - location text if present

4. Bottom row
   - copyright text generated from `footer.textTemplate`
   - replace `{YEAR}` with current year
   - replace `{COMPANY}` with company name

Rules:
- No hardcoded company-specific content
- Navigation MUST reuse CONFIG.navigation
- Footer MUST be responsive
- Footer MUST use semantic links
- Footer MUST remain visually minimal and premium

### functions/api/ping.js

This endpoint is used to verify that Pages Functions are working.

The file MUST contain exactly:

```javascript
export async function onRequestGet() {
  return new Response(JSON.stringify({ ok: true, version: "ping-v1" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  });
}
```


---

## contact.js

### functions/api/contact.js

This endpoint processes the contact form and sends email via Resend.

The implementation MUST match the following behaviour:

- Accept JSON requests
- Validate required fields
- Reject invalid email
- Use honeypot spam protection
- Send mail using Resend API
- Use reply_to so the receiver can reply directly to the sender

The file MUST contain the following implementation:

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

function isEmail(s) {
  return typeof s === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim());
}

function clean(s, max = 4000) {
  if (typeof s !== "string") return "";
  return s.replace(/\s+/g, " ").trim().slice(0, max);
}

function isHoneypotTripped(body) {
  return typeof body?.company === "string" && body.company.trim().length > 0;
}

export async function onRequestPost({ request, env }) {
  const ct = request.headers.get("content-type") || "";
  if (!ct.includes("application/json")) {
    return json({ error: "Fel format. Skicka JSON." }, 415);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Ogiltig JSON." }, 400);
  }

  if (isHoneypotTripped(body)) {
    return json({ ok: true });
  }

  const name = clean(body?.name, 120);
  const email = clean(body?.email, 200);
  const phone = clean(body?.phone, 60);
  const message = clean(body?.message, 4000);

  if (!name) return json({ error: "Namn saknas." }, 400);
  if (!isEmail(email)) return json({ error: "Ogiltig e-postadress." }, 400);
  if (!message) return json({ error: "Meddelande saknas." }, 400);

  const resendKey = env.RESEND_API_KEY;
  const toEmail = env.CONTACT_TO_EMAIL;
  const fromEmail = env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

  if (!resendKey || !toEmail) {
    return json(
      { error: "E-postleverantör är inte konfigurerad (saknar RESEND_API_KEY eller CONTACT_TO_EMAIL)." },
      501
    );
  }

  const subject = `Ny förfrågan från ${name}`;
  const text =
    `Namn: ${name}\n` +
    `E-post: ${email}\n` +
    (phone ? `Telefon: ${phone}\n` : "") +
    `\nMeddelande:\n${message}\n`;

  const resp = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject,
      reply_to: email,
      text,
    }),
  });

  if (!resp.ok) {
    const details = await resp.text().catch(() => "");
    return json({ error: "Kunde inte skicka meddelandet.", details }, 502);
  }

  return json({ ok: true });
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
```
