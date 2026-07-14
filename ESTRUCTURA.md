# 📁 ESTRUCTURA COMPLETA DEL PROYECTO

```
portfolio/                          ← Carpeta raíz del proyecto
│
├── 📄 index.html                   ← Página principal (inicio)
├── 📄 projects.html               ← Página de proyectos (con filtros)
├── 📄 services.html               ← Página de servicios freelance
├── 📄 certifications.html                  ← Página de certificaciones
├── 📄 contact.html                ← Página de contacto
│
├── 📄 sitemap.xml                  ← Sitemap para SEO
├── 📄 README.md                    ← Documentación del proyecto
├── 📄 CLAUDE.md                    ← Contexto para Claude AI
├── 📄 ESTRUCTURA.md                ← Este archivo
├── 📄 .gitignore                   ← Archivos a ignorar en Git
│
├── 📁 css/                         ← Carpeta de estilos
│   └── 📄 style.css               ← Archivo CSS principal (todos los estilos)
│
├── 📁 js/                          ← Carpeta de JavaScript
│   └── 📄 script.js               ← Archivo JS principal (interactividad)
│
└── 📁 assets/                      ← Carpeta de recursos multimedia
    ├── 📁 images/                  ← Imágenes del portafolio
    │   ├── 📄 README.md           ← Guía para imágenes
    │   ├── 🖼️ profile.jpg          ← TU FOTO DE PERFIL (agregar)
    │   ├── 🖼️ proyecto1.jpg        ← Imagen proyecto 1 (agregar)
    │   ├── 🖼️ proyecto2.jpg        ← Imagen proyecto 2 (agregar)
    │   ├── 🖼️ proyecto3.jpg        ← Imagen proyecto 3 (agregar)
    │   └── 🖼️ ...                  ← Más imágenes de proyectos
    │
    └── 📁 icons/                   ← Iconos personalizados
        ├── 📄 README.md           ← Guía para iconos
        ├── 🎨 email.svg           ← Icono de email (opcional)
        ├── 🎨 linkedin.svg        ← Icono de LinkedIn (opcional)
        ├── 🎨 github.svg          ← Icono de GitHub (opcional)
        └── 🎨 ...                 ← Más iconos (opcional)
```

## 📋 LISTA DE VERIFICACIÓN

### ✅ Archivos Principales (YA CREADOS)
- [x] index.html
- [x] projects.html
- [x] services.html
- [x] certifications.html
- [x] contact.html
- [x] css/style.css
- [x] js/script.js
- [x] README.md
- [x] .gitignore

### 📝 Archivos que DEBES AGREGAR
- [ ] assets/images/profile.png (tu foto de perfil)
- [ ] assets/images/og-image.jpg (1200x630px para redes sociales)
- [ ] assets/images/proyecto1.jpg (capturas de tus proyectos)
- [ ] assets/images/proyecto2.jpg
- [ ] assets/images/proyecto3.jpg
- [ ] assets/favicon/favicon-16x16.png
- [ ] assets/favicon/favicon-32x32.png
- [ ] assets/favicon/apple-touch-icon.png (180x180px)
- [ ] assets/icons/* (iconos SVG - opcional, puedes usar emojis)

## 🎯 RESUMEN DE PÁGINAS

### 1. index.html (Página de Inicio)
- Introducción personal
- Habilidades en formato de tags
- Botones de acción
- Diseño hero con hexágono

### 2. projects.html (Portafolio) ⭐ ACTUALIZADO
- 6 proyectos de ejemplo
- **Filtros interactivos** por categoría (Web, Mobile, Data, AI/ML, Design)
- Imágenes/iconos de proyectos
- Descripción y tecnologías
- Enlaces a GitHub y demos
- Animaciones smooth al filtrar

### 3. services.html (Servicios Freelance) ⭐ NUEVO
- 6 servicios con precios
- Características incluidas
- Herramientas utilizadas
- Proceso de trabajo
- CTA para cotización

### 4. certifications.html (Certificaciones)
- 5 cursos/certificaciones
- Acordeones expandibles
- Enlaces a credenciales
- Información detallada

### 5. contact.html (Contacto)
- Email, teléfono, ubicación
- LinkedIn, GitHub, redes sociales
- Diseño con cards interactivas

## 🔧 ARCHIVOS TÉCNICOS

### css/style.css
Contiene TODOS los estilos:
- Variables de color
- Estilos de navegación
- Estilos de cada página
- Animaciones
- Responsive design

### js/script.js
Contiene TODO el JavaScript:
- Navegación activa
- Acordeones de cursos
- Animaciones de entrada
- Scroll suave
- Menú móvil
- **Light/Dark Mode Toggle** (Nuevo)
- **Project Filters** (Nuevo)

## 📦 CÓMO ORGANIZAR TUS ARCHIVOS

### Paso 1: Descarga todo el proyecto
Descarga la carpeta completa `portfolio/` con todos sus archivos

### Paso 2: Agrega tus imágenes
```
portfolio/assets/images/
├── profile.jpg          ← Tu foto
├── proyecto1.jpg        ← Capturas de proyectos
├── proyecto2.jpg
└── proyecto3.jpg
```

### Paso 3: (Opcional) Agrega iconos
```
portfolio/assets/icons/
├── email.svg
├── linkedin.svg
└── github.svg
```

### Paso 4: Personaliza los HTML
Edita cada archivo .html con tu información:
- Nombre
- Descripción
- Proyectos reales
- Certificaciones reales
- Datos de contacto
- Precios de servicios

### Paso 5: Prueba localmente
Abre `index.html` en tu navegador para ver tu portafolio

### Paso 6: Sube a la web
Opciones:
- GitHub Pages (gratis)
- Netlify (gratis)
- Vercel (gratis)

## 🎨 PERSONALIZACIÓN RÁPIDA

### Cambiar colores
Edita las variables en `css/style.css` (líneas 5-12):
```css
:root {
    --primary-color: #00f5ff;      /* Cambia este */
    --secondary-color: #9d4edd;    /* Y este */
}
```

### Cambiar fuente
En cada HTML, línea 10, cambia:
```html
<link href="https://fonts.googleapis.com/css2?family=TU_FUENTE&display=swap">
```

### Agregar más proyectos
Copia un bloque `.project-card` en `projects.html`

### Agregar más servicios
Copia un bloque `.service-card` en `services.html`

## ⚠️ IMPORTANTE

### NO cambiar la estructura de carpetas
Mantén esta organización exacta:
- HTML en la raíz
- CSS en carpeta `css/`
- JS en carpeta `js/`
- Imágenes en `assets/images/`
- Iconos en `assets/icons/`

### Las rutas están configuradas para esta estructura
Si cambias la estructura, deberás actualizar todas las rutas en los archivos HTML.

## 🚀 SIGUIENTE PASO

1. Abre `index.html` en tu navegador
2. Navega por todas las páginas
3. Verifica que todo funcione
4. **Prueba el Light/Dark Mode** haciendo clic en 🌙/☀️
5. **Prueba los filtros de proyectos** en la página Projects
6. Comienza a personalizar con tu información

## 🆕 CARACTERÍSTICAS NUEVAS (v4.0)

### Light/Dark Mode Toggle
- Botón en la navegación para cambiar entre modo oscuro y claro
- Tu preferencia se guarda automáticamente
- Funciona en todas las páginas

### Project Filters
- Filtra proyectos por categoría (Web, Mobile, Data Science, AI/ML, Design)
- Animaciones suaves al filtrar
- Reorganización automática del grid

¡Tu portafolio está listo para despegar! 🎉