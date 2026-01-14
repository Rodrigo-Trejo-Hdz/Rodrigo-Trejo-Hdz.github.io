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
├── servicios.html          # Freelance services offered
├── cursos.html            # Certifications and courses
├── contacto.html          # Contact information
├── proyectos.html          # Project portfolio
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
- CTA buttons: "View Projects" and "Contact"
- Hero visual with hexagon decoration
- **Theme toggle button** in navigation (Light/Dark mode)

**Key elements**:
- Line 92: Professional name
- Lines 101-112: Skill tags (12 real technologies)
- Line 127: Can contain profile photo or emoji
- Lines 79-81: Theme toggle button

### 2. proyectos.html - Projects (01. PORTFOLIO)
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
- Buttons at [proyectos.html:75-82](proyectos.html#L75-L82)
- JavaScript logic at [script.js:172-226](js/script.js#L172-L226)

**Customization pending**:
- Replace emojis with real images in `assets/images/`
- Update titles, descriptions, and technologies
- Add real GitHub URLs and demos

### 3. cursos.html - Certifications (02. EDUCATION)
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

### 4. contacto.html - Contact (03. CONNECT)
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

### 5. servicios.html - Services (04. FREELANCE)
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
- Variables CSS globales (líneas 4-12):
  - `--primary-color: #00f5ff` (cyan)
  - `--secondary-color: #9d4edd` (púrpura)
  - `--accent-color: #ff006e` (rosa)
  - `--bg-dark: #0a0e27`
  - `--bg-card: #151b3d`

- Diseño moderno con:
  - Fondo oscuro con gradientes radiales
  - Efectos de glow/sombras neón
  - Transiciones suaves
  - Sistema responsive
  - Navegación fija con backdrop-filter

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

### Paleta de Colores
- **Primario (Cyan)**: #00f5ff - Acentos, enlaces, títulos destacados
- **Secundario (Púrpura)**: #9d4edd - Gradientes, elementos secundarios
- **Acento (Rosa)**: #ff006e - CTAs, elementos importantes
- **Fondo Oscuro**: #0a0e27 - Background principal
- **Cards**: #151b3d - Fondo de tarjetas
- **Texto Claro**: #ffffff - Texto principal
- **Texto Gris**: #a8b2d1 - Texto secundario

### Efectos Visuales
- Gradientes animados en fondo
- Box-shadow con glow neón en hover
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
   - Editar [proyectos.html](proyectos.html)
   - Agregar imágenes en `assets/images/`
   - Actualizar títulos, descripciones, tecnologías, enlaces

5. **Servicios**:
   - Editar [servicios.html](servicios.html)
   - Actualizar precios, características, herramientas

6. **Certificaciones**:
   - Editar [cursos.html](cursos.html)
   - Agregar URLs de credenciales reales

7. **Contacto**:
   - Editar [contacto.html](contacto.html)
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
- ✅ **Light/Dark Mode Toggle**: Theme switcher with localStorage persistence
- ✅ **Project Filters**: Interactive category filtering with animations

### Pending customization:
- ⚠️ Add real projects with images
- ⚠️ Customize services and pricing
- ⚠️ Create og-image.jpg (1200x630px)
- ⚠️ Create favicon files (16x16, 32x32, 180x180)
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
- Logo: "&lt;/Dev&gt;" with gradient
- Automatic active state per page
- **Theme toggle button**: Light/Dark mode switcher (🌙/☀️)
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
- **Light/Dark Mode Toggle**: Switch between themes with localStorage persistence
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

La información de contacto real debe actualizarse en [contacto.html](contacto.html).

---

**Last update**: 2026-01-13
**Project version**: 4.0 (Full Featured)
**Status**: In production (GitHub Pages)

## Recent Changes

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
   - Code: [proyectos.html:75-82](proyectos.html#L75-L82), [js/script.js:172-226](js/script.js#L172-L226)

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
