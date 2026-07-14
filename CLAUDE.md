# CLAUDE.md - Project Context

## General Description

This project is a **static HTML web portfolio** for a professional **Data Scientist / Data Analyst / Data Engineer / Programmer**. The site is hosted on **GitHub Pages** and serves as a professional showcase.

**Language**: All content is in English for international reach.

## Technical Information

### Tech Stack
- **HTML5**: Semantic structure with 5 main pages
- **CSS3**: Custom styles with CSS variables and modern design
- **Vanilla JavaScript**: Interactivity without frameworks
- **Google Fonts**: Inter typography
- **GitHub Pages**: Free hosting

### Project Architecture

```
Rodrigo-Trejo-Hdz.github.io/
├── index.html              # Main page / Hero section
├── services.html          # Freelance services offered
├── certifications.html            # Certifications and courses
├── contact.html          # Contact information
├── projects.html          # Project portfolio
│
├── css/
│   └── style.css          # Centralized global styles
│
├── js/
│   └── script.js          # JavaScript for interactivity
│
├── assets/
│   ├── images/
│   │   └── profile.png    # Profile photo
│   └── certificates/      # PDF certificates
│
├── README.md              # User documentation
├── ESTRUCTURA.md          # Project structure guide
├── CLAUDE.md             # This file - Context for Claude
└── .gitignore            # Files ignored by Git
```

## Site Pages

**Navigation Order** (consistent across all pages):
1. Home
2. **Projects** (01. PORTFOLIO)
3. Certifications (02. EDUCATION)
4. Contact (03. CONNECT)
5. **Services** (04. FREELANCE)

**Note**: Navigation was reorganized on January 13, 2026. Projects is now first in content pages.

### 1. index.html - Home Page
**Purpose**: Landing page / Hero section

**Content**:
- Personal greeting and introduction
- Title: "Rodrigo Trejo - Data Scientist"
- Professional profile description
- **12 Technical skills**: Python, SQL, Power BI, AWS, MATLAB, C++, Excel, Simulink, React, Wolfram, TIA Portal, Fusion 360
- CTA buttons: "View Projects", "Download CV" and "Contact"
- Hero visual with hexagon decoration

**Key elements**:
- Professional name in hero (h1)
- Skill tags (10 real technologies)
- Profile photo in hexagon
- Availability badge, About and Experience sections

### 2. projects.html - Projects (01. PORTFOLIO)
**Purpose**: Showcase featured projects

**Content**:
- Grid of 6 example projects
- **Project Filters**: Interactive filtering by category
- Filter categories: All, Web Development, Mobile Apps, Data Science, AI/ML, Design
- Each project includes:
  - Representative image/emoji
  - Title and description
  - Technologies used (badges)
  - Sample code block
  - Links to GitHub and Live Demo
  - `data-category` attribute for filtering

**Filter functionality**:
- Click filter button to show only projects of that category
- "All Projects" shows all
- Smooth animations (fade + scale)
- Automatic grid reorganization
- Buttons at [projects.html:75-82](projects.html#L75-L82)
- JavaScript logic at [script.js:172-226](js/script.js#L172-L226)

**Customization pending**:
- Replace emojis with real images in `assets/images/`
- Update titles, descriptions, and technologies
- Add real GitHub URLs and demos

### 3. certifications.html - Certifications (02. EDUCATION)
**Purpose**: Show academic training and certifications

**Content**:
- **8 real certifications**:
  1. Advanced Microsoft Power BI (Coursera)
  2. Machine Learning in Power BI (Coursera)
  3. Refresh Manager Power BI (Microsoft)
  4. Matlab AI - 6 courses (Matlab Onramp)
  5. AWS Certified AI Practitioner Preparation (Udemy)
  6. Amazon Bedrock Getting Started (AWS Skill Builder) - PDF
  7. Bloomberg Finance Fundamentals (Bloomberg)
  8. Storyselling Course (ITAM)

- Expandable accordion system
- Information for each certification:
  - Title
  - Institution and year
  - Link to verifiable credential (or PDF)
  - Duration, level, technologies
  - Skills acquired

**Functionality**:
- Click on header opens/closes details
- Only one course expanded at a time
- Function `toggleCourse()` at [script.js:21-34](js/script.js#L21-L34)

### 4. contact.html - Contact (03. CONNECT)
**Purpose**: Facilitate professional communication

**Content**:
- Grid with 5 contact methods:
  - Email: idm.rodrigo.trejo@gmail.com
  - LinkedIn: Rodrigo Iván Trejo Hernández
  - GitHub: @Rodrigo-Trejo-Hdz
  - Location: Estado de México, Northern Metro Area
  - Portfolio: rodrigo-trejo-hdz.github.io
- Social media section: GitHub, LinkedIn, Email (3 links only)

**Note**: All links are updated with real information

### 5. services.html - Services (04. FREELANCE)
**Purpose**: Present professional services offered

**Content**:
- Grid of 6 services:
  1. Data Analysis and Cleaning
  2. UI/UX Development
  3. Reporting and Automation (Power BI)
  4. Full Stack Web Development
  5. Process Automation
  6. Technical Consulting

**Service structure**:
- Representative icon
- Title and description
- List of included features
- Tools/technologies used
- Pricing (hourly and per project)
- "Contact Now" CTA button

**Special features**:
- `.featured` class for highlighted services
- "How Do We Work Together?" section with 4 steps
- Final CTA for contact


## Archivos Principales

### css/style.css
**Ubicación**: [css/style.css](css/style.css)

**Características**:
- Variables CSS globales (tokens de la paleta editorial clara):
  - `--bg: #FAFAF8` (fondo del sitio)
  - `--surface: #FFFFFF` (tarjetas y superficies)
  - `--mist: #EEF2F6` (chips/badges y fondos suaves)
  - `--ink: #1E3A5F` (títulos, marca, logo)
  - `--accent: #C2703D` (CTAs y links destacados)
  - `--accent-strong: #A85E31` (hover de CTA y texto accent pequeño, cumple AA)
  - `--data: #2E6E68` (SOLO gráficas/visualizaciones de datos)
  - `--text: #1A1A1A` / `--text-soft: #5A5A5A`
  - `--border`, `--nav-bg` (derivados)

- Diseño editorial claro con:
  - Fondo claro con lavados radiales sutiles
  - Sombras suaves en tonos ink
  - Transiciones suaves
  - Sistema responsive
  - Navegación fija con backdrop-filter
  - **Un solo tema claro** (el dark mode fue eliminado en v4.2)

**Secciones principales**:
1. Variables globales
2. Reset y base
3. Navegación
4. Hero section (página inicio)
5. Proyectos
6. Servicios
7. Cursos
8. Contacto
9. Responsive design

### js/script.js
**Ubicación**: [js/script.js](js/script.js)

**Funcionalidades**:

1. **Navegación activa** (líneas 4-16):
   - Detecta página actual
   - Marca enlace correspondiente en nav

2. **Acordeón de cursos** (líneas 21-44):
   - `toggleCourse(header)`: Abre/cierra detalles de curso
   - Cierra otros cursos al abrir uno nuevo
   - Previene cierre al hacer click en enlaces

3. **Animaciones de entrada** (líneas 49-70):
   - IntersectionObserver para detectar visibilidad
   - Clase `.fade-in` en scroll
   - Se aplica a: project-card, course-card, contact-item

4. **Scroll suave** (líneas 75-86):
   - Smooth scroll para anclas (#)

5. **Menú móvil** (líneas 91-129):
   - Hamburger menu para pantallas < 768px
   - Toggle para mostrar/ocultar menú
   - Auto-ajuste responsive

## Diseño y Estilo Visual

### Paleta de Colores (editorial clara, v4.2)
- **Ink (azul marino)**: #1E3A5F - Títulos, nombre del hero, logo, marca
- **Accent (terracota)**: #C2703D - Botones CTA, links destacados (hover: #A85E31)
- **Data (teal)**: #2E6E68 - SOLO dentro de gráficas/visualizaciones de datos
- **Fondo**: #FAFAF8 - Background principal
- **Surface**: #FFFFFF - Fondo de tarjetas
- **Mist**: #EEF2F6 - Chips, badges, fondos suaves
- **Texto**: #1A1A1A principal / #5A5A5A secundario
- Regla: los gradientes de project-image-container son sobrios (--ink→--data o --ink→--accent)

### Efectos Visuales
- Lavados radiales sutiles en fondo
- Box-shadow suave (tonos ink) en hover
- Backdrop-filter blur en navegación
- Transiciones smooth (0.3s ease)
- Transformaciones (scale, translateY) en interacciones

### Tipografía
- **Fuente**: Inter (Google Fonts)
- **Pesos**: 300, 400, 600, 700, 900
- **Características**: Clean, moderna, legible

## Personalización del Proyecto

### Para actualizar información personal:

1. **Nombre y título**:
   - [index.html:36](index.html#L36) - Nombre y rol

2. **Habilidades**:
   - [index.html:44-51](index.html#L44-L51) - Skill tags

3. **Foto de perfil**:
   - Colocar imagen en `assets/images/profile.jpg`
   - Actualizar [index.html:67](index.html#L67)

4. **Proyectos**:
   - Editar [projects.html](projects.html)
   - Agregar imágenes en `assets/images/`
   - Actualizar títulos, descripciones, tecnologías, enlaces

5. **Servicios**:
   - Editar [services.html](services.html)
   - Actualizar precios, características, herramientas

6. **Certificaciones**:
   - Editar [certifications.html](certifications.html)
   - Agregar URLs de credenciales reales

7. **Contacto**:
   - Editar [contact.html](contact.html)
   - Actualizar email, teléfono, redes sociales, ubicación

8. **Colores**:
   - Modificar variables en [css/style.css:4-12](css/style.css#L4-L12)

## Hosting y Deployment

### GitHub Pages
- **Repositorio**: Rodrigo-Trejo-Hdz.github.io
- **Rama**: main
- **URL**: https://rodrigo-trejo-hdz.github.io/

### Configuración actual:
- Archivos HTML en raíz (requerido para GitHub Pages)
- Assets en subcarpetas
- Sin build process (sitio estático)

### Para actualizar el sitio:
1. Hacer cambios en archivos locales
2. Commit y push a rama main
3. GitHub Pages actualiza automáticamente

## Commits Recientes

- **7677986**: "Foto de perfil" - Agregó imagen de perfil
- **62a92d4**: "V2" - Segunda versión del sitio
- **e104c2c**: "Add files via upload" - Subida inicial

## Estado Actual del Proyecto

### Completed:
- ✅ HTML structure with 5 pages
- ✅ Functional navigation system
- ✅ Complete and responsive CSS styles
- ✅ JavaScript for interactivity
- ✅ Course system with accordion
- ✅ Freelance services page
- ✅ Deployment on GitHub Pages
- ✅ Profile photo added
- ✅ **Full internationalization (English)**
- ✅ **Real skills updated (12 technologies)**
- ✅ **8 real certifications with credentials**
- ✅ **Real contact information**
- ✅ **Reorganized navigation (Projects first, Services last)**
- ✅ **Section numbering corrected**
- ✅ **SEO implementation**: sitemap.xml, Open Graph, JSON-LD, Google Analytics, Favicons
- ✅ **Project Filters**: Interactive category filtering with animations
- ✅ **Light editorial theme (v4.2)**: single light theme; dark mode removed

### Pending customization:
- ⚠️ Add real projects with images
- ⚠️ Add real project screenshots (product-search-preview.png, elasticity-preview.png — cards use emoji placeholders with TODO comments)
- ⚠️ Point "View on GitHub" buttons to real repos (currently link to profile root)
- ⚠️ Confirm exact years of ITESM partnership projects (TODO in index.html Experience section)
- ⚠️ Optimize images

## Navegación del Código

### Archivos más importantes para modificar:

1. **Para contenido**: Archivos HTML individuales
2. **Para estilos**: [css/style.css](css/style.css)
3. **Para funcionalidad**: [js/script.js](js/script.js)
4. **Para assets**: `assets/images/`

### Navigation structure:
- Fixed navbar on all pages
- **Links (in order)**: Home, Projects, Certifications, Contact, Services
- Logo: "RT" monogram badge (rounded square, ink→data gradient, white letters — matches the favicon)
- Automatic active state per page
- Section numbers:
  - 01. PORTFOLIO (Projects)
  - 02. EDUCATION (Certifications)
  - 03. CONNECT (Contact)
  - 04. FREELANCE (Services)

## Características Técnicas Destacadas

### Responsive Design
- Breakpoints para mobile, tablet, desktop
- Grid layouts que se adaptan
- Menú hamburger para móviles
- Imágenes y textos responsivos

### Performance
- Sin dependencias externas (solo Google Fonts)
- Vanilla JS (sin jQuery ni frameworks)
- CSS optimizado con variables
- Carga rápida (HTML estático)

### Accesibilidad
- Estructura semántica HTML5
- Navegación por teclado
- Links con aria-labels implícitos
- Contraste de colores adecuado

### Interactividad
- Hover effects en cards y botones
- Smooth scroll
- Animaciones on-scroll (IntersectionObserver)
- Acordeones expandibles
- Navegación activa automática
- **Project Filters**: Interactive filtering by category with smooth animations

## Buenas Prácticas Implementadas

1. **Separación de concerns**: HTML, CSS, JS en archivos separados
2. **Variables CSS**: Fácil personalización de colores
3. **Código comentado**: Secciones claramente marcadas
4. **Nombres descriptivos**: Clases BEM-like
5. **Mobile-first approach**: Responsive desde el inicio
6. **Git ignore**: Configurado para proyecto web

## Possible Future Improvements

1. ~~**SEO**: Meta tags, Open Graph, sitemap.xml~~ ✅ **COMPLETED**
2. ~~**Analytics**: Google Analytics~~ ✅ **COMPLETED**
3. **Contact form**: With backend (EmailJS, Formspree)
4. **Blog**: Technical articles section
5. ~~**Light mode**: Toggle dark/light mode~~ ✅ **COMPLETED**
6. ~~**Internationalization**: English version~~ ✅ **COMPLETED**
7. **PWA**: Convert to Progressive Web App
8. **Performance**: Lazy loading for images
9. **Testing**: Unit tests for JS
10. **CI/CD**: GitHub Actions for automatic deployment
11. **Real projects**: Add actual portfolio projects with screenshots
12. **Kaggle integration**: Link to Kaggle profile/projects
13. **Medium blog**: Link to technical writing
14. ~~**Project filters**: Filter projects by category~~ ✅ **COMPLETED**

## Notas Importantes para Claude

### Al trabajar en este proyecto:

1. **Mantener consistencia**: Seguir el patrón de diseño establecido
2. **No romper navegación**: Todos los archivos HTML deben tener el mismo nav
3. **Respetar variables CSS**: Usar variables definidas en `:root`
4. **Paths relativos**: Mantener estructura de carpetas actual
5. **Responsive**: Cualquier cambio debe funcionar en mobile
6. **JavaScript no intrusivo**: Evitar dependencias externas
7. **Comentarios**: Mantener código comentado para futuras modificaciones

### Comandos útiles:

```bash
# Ver estado de Git
git status

# Commitear cambios
git add .
git commit -m "Descripción del cambio"

# Subir a GitHub Pages
git push origin main

# Ver historial
git log --oneline
```

## Contacto del Proyecto

Este portafolio pertenece a **Rodrigo Trejo**, Data Scientist.

La información de contacto real debe actualizarse en [contact.html](contact.html).

---

**Last update**: 2026-07-13
**Project version**: 4.2
**Status**: In production (GitHub Pages)

## Recent Changes

### Version 4.4 - July 13, 2026
**Conversion tracking, English URLs, final polish**:
1. **Title tags rewritten**: index is now "Rodrigo Trejo — Data Scientist & Analytics Engineer"; subpages follow "Page — Rodrigo Trejo | descriptor".
2. **GA conversion events** (`initEventTracking()` in script.js): `cv_download`, `calendly_click`, `linkedin_click`, `github_click`, `email_click` — measurable funnel for both goals.
3. **Forced light mode**: `<meta name="color-scheme" content="light">` + `html { color-scheme: light }` (prevents Android Chrome auto-darkening and extension mangling).
4. **Accessibility trio**: skip-link ("Skip to content" → `#main` on `.container`), `prefers-reduced-motion` media query, and a root `favicon.ico` (16/32/48 multi-size) for blind `/favicon.ico` requests.
5. **Hero CTAs reduced to 2**: View Projects (primary) + Download CV (secondary); Contact removed (lives in nav/badge/footer).
6. **`::selection`** in terracotta tint and **scrollbar** styled to palette (WebKit + Firefox).
7. **MATLAB card consistency**: fake-button span replaced by plain `.course-count` text ("6 courses completed").
8. **URLs migrated to English**: `proyectos→projects`, `cursos→certifications`, `contacto→contact`, `servicios→services` (git mv). All internal refs, og:url, canonical, sitemap, and docs updated. Old Spanish URLs remain as noindex meta-refresh redirect stubs so shared links don't break.

### Version 4.3 - July 13, 2026
**Professionalism pass (functional + visual)**:
1. **Mobile menu actually works now**: previously the hamburger toggled a `.show` class with no CSS behind it. Now: CSS-driven (button hidden ≥768px, dropdown panel under the fixed nav), JS handles open/close state with `aria-expanded`/`aria-controls`, closes on link click and on resize to desktop. Nav stays as a row on mobile; container padding-top back to 100px.
2. **Keyboard accessibility**: accordion toggle is now a real `<button class="toggle-icon">` (×10) with `aria-expanded` synced by `toggleCourse()`; expanded max-height raised to 1600px (MATLAB card was clipping). Global `:focus-visible` outline in accent.
3. **Heading hierarchy**: every page now has exactly one `<h1>` (section-header titles promoted; CSS rule `h2, .section-header h1` keeps identical visuals).
4. **profile.png (2 MB) → profile.webp (15 KB)**, square-cropped 720px, with width/height attributes. Old PNG deleted.
5. **SEO kit**: robots.txt, branded 404.html (noindex), `<link rel="canonical">` + `<meta name="theme-color">` on all 5 pages, sitemap lastmod updated and duplicate /index.html entry removed.
6. **Portfolio card removed** from contact grid (was a circular self-link); grid now 4 items.
7. **All UI emojis replaced with inline Feather-style SVG icons** (stroke currentColor): contact icons, social links, service icons, accordion chevron, hamburger/close. Project-card emojis intentionally left for the upcoming projects session.
8. **Hero sobered**: floating hexagon + code decorations removed; photo now in a rounded-square `.hero-photo` with flat terracotta offset shadow. `@keyframes float` removed (pulse kept for availability dot).
9. **Site footer on all 5 pages**: brand + tagline, footer nav, social icons, copyright + "Open to opportunities" status line.
10. **Typography**: Source Serif 4 (600/700/900) for h1/h2/booking-title on all pages (Georgia fallback); Inter remains for body and UI.
11. **Logo unified with favicon**: nav `.logo` and footer `.footer-logo` are now an "RT" monogram badge (rounded square, ink→data gradient, white letters) instead of the `<RT/>` text mark; og-image footer updated to match and regenerated.

### Version 4.2 - July 13, 2026
**Light editorial redesign + dark mode removal**:
1. **New color system**: light editorial palette (`--bg #FAFAF8`, `--surface #FFFFFF`, `--mist #EEF2F6`, `--ink #1E3A5F`, `--accent #C2703D`, `--data #2E6E68`, `--text #1A1A1A`, `--text-soft #5A5A5A`, plus derived `--accent-strong #A85E31`, `--border`, `--nav-bg`). All neon hex (#00f5ff, #9d4edd, etc.) removed from HTML/CSS/JS — verified by grep.
2. **Dark mode removed completely**: theme-toggle button removed from all 5 navbars, `initThemeToggle()` deleted from script.js (no localStorage/data-theme left), `[data-theme]` CSS blocks and `.theme-toggle` styles deleted. No dead references remain.
3. **Color application**: ink for headings/brand/logo; accent for CTAs (hover accent-strong); mist chips with ink text; data (teal) only inside the architecture SVG diagram; project image gradients now sober ink→data / ink→accent; code blocks dark ink with light text; active filter buttons ink.
4. **og-image.html + og-image.jpg** regenerated with the editorial palette (matches favicon RT branding).
5. **Contrast (WCAG)**: all text pairs pass AA (4.66:1–16.65:1) except white-on-accent CTA button text (3.70:1, passes AA only for large text — by explicit palette spec; switch button base to `--accent-strong` if strict AA is required).
6. Layout and structure unchanged — color system only.

### Version 4.1 - July 13, 2026
**Fixes & career-focused improvements**:
1. **Broken links fixed**: LinkedIn hrefs were relative (`www.linkedin.com/...` → 404); now `https://www.linkedin.com/in/rodrigo-trejo-hdz/` in contact.html and index.html JSON-LD.
2. **Contact form removed**: The Formspree form had a placeholder ID and never worked. Replaced by a "Book a Free 30-Minute Call" section linking to Calendly (`https://calendly.com/idm-rodrigo-trejo/30min`) plus a Download CV button. Form CSS replaced by `.booking-section` styles.
3. **Favicons created**: New "RT" monogram (rounded square, gradient #1E3A5F → #2E6E68, white letters) as `assets/favicon/favicon.svg` + generated PNGs (16x16, 32x32, apple-touch-icon 180x180). All 5 pages now also link favicon-16x16.png. No favicon 404s remain.
4. **og-image.jpg generated** (1200x630) in assets/images/ following the og-image.html template design — social sharing cards now render with image.
5. **index.html**: About highlights updated to real metrics (40+ companies, 200M records/pipeline, 20+ processes automated, ITESM). New **Experience section** (timeline: Data Bunker coordinator role + ITESM industry projects). **Availability badge** ("Open to Data Scientist & Analytics Engineer roles — Remote · MX · US · EU") in hero and contact page.
6. **projects.html**: New first card "Pricing Data Platform — AWS" with inline SVG architecture diagram (Retail Sources → S3 Raw → Glue → S3 Curated → Athena → Power BI). Missing preview images replaced with emoji placeholders (TODO comments).
7. **services.html**: All prices replaced with "Custom Quote — free initial consultation". "Technical Consulting" reworked into "Data & Analytics Consulting" (data strategy, modeling, BI, pricing analytics). Final CTA now leads with Calendly booking.
8. **Technical polish**: stray root `style.css` deleted; duplicated JS filter functions merged into `initCardFilters()`; `rel="noopener noreferrer"` on all `target="_blank"` links; `aria-hidden` on decorative emoji icons; new CSS sections (availability badge, experience timeline, arch diagram, booking).

### Version 4.0 - January 13, 2026 (Session 2)
**New Features**:
1. **Light/Dark Mode Toggle**:
   - Theme switcher button in navigation (🌙/☀️)
   - CSS variables for both themes (dark default, light mode available)
   - localStorage persistence across sessions
   - Smooth transitions (0.3s)
   - Mobile: Floating button in bottom-right corner
   - Code: [css/style.css:4-32](css/style.css#L4-L32), [js/script.js:131-170](js/script.js#L131-L170)

2. **Project Filters**:
   - 6 filter categories: All, Web Development, Mobile Apps, Data Science, AI/ML, Design
   - Interactive filter buttons with active state
   - Smooth fade + scale animations
   - Automatic grid reorganization
   - Each project tagged with `data-category` attribute
   - Code: [projects.html:75-82](projects.html#L75-L82), [js/script.js:172-226](js/script.js#L172-L226)

3. **Navigation Update**:
   - Corrected order: Home → Projects → Certifications → Contact → Services
   - Projects moved from 04 to 01 (PORTFOLIO)
   - Services moved from 01 to 04 (FREELANCE)
   - Theme toggle added to all navigation bars

4. **Documentation**:
   - CLAUDE.md fully updated with v4.0 changes
   - README.md already up to date
   - All features documented

### Version 3.0 - January 13, 2026 (Session 1)
**SEO & Content Update**:
1. **SEO Implementation**:
   - Created sitemap.xml with all 5 pages
   - Added Open Graph meta tags (Facebook/Twitter)
   - Added JSON-LD structured data for Person schema
   - Integrated Google Analytics (G-F2YY6B3ZL1)
   - Favicon links added (pending file creation)
   - Created comprehensive README.md

2. **Internationalization**:
   - All content translated to English
   - Skills updated with 12 real technologies
   - 8 real certifications with verifiable credentials
   - Real contact information added

3. **Content Organization**:
   - Initial navigation reorganization (later corrected in v4.0)
   - Section numbering system implemented
   - Consistent structure across all pages
