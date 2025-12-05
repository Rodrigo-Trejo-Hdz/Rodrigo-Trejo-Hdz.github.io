# Portfolio Developer - Documentación

Portafolio web moderno y estilizado para desarrolladores.

## 📁 Estructura del Proyecto

```
portfolio/
├── index.html          # Página de inicio
├── proyectos.html      # Página de proyectos
├── servicios.html      # Página de servicios freelance
├── cursos.html         # Página de certificaciones
├── contacto.html       # Página de contacto
├── css/
│   └── style.css      # Estilos globales
├── js/
│   └── script.js      # JavaScript interactivo
├── assets/
│   ├── images/        # Imágenes de proyectos y perfil
│   └── icons/         # Iconos personalizados
└── README.md          # Este archivo
```

## 🚀 Cómo Usar

### 1. Personalizar Información

#### Página de Inicio (`index.html`)
- **Línea 36:** Cambia "Tu Nombre" por tu nombre real
- **Líneas 51-56:** Actualiza las tecnologías en los skill-tags
- **Línea 67:** Opcional - reemplaza el emoji 💻 con tu foto de perfil

#### Página de Proyectos (`proyectos.html`)
Para cada proyecto:
- **Línea 35:** Reemplaza el emoji con una imagen real de tu proyecto
  ```html
  <img src="assets/images/proyecto1.jpg" alt="Descripción">
  ```
- **Líneas 39-50:** Actualiza título, descripción, tecnologías y código
- **Líneas 52-53:** Agrega los enlaces reales a GitHub y demo

#### Página de Cursos (`cursos.html`)
Para cada curso:
- **Línea 35:** Actualiza el título de la certificación
- **Línea 36:** Institución y año
- **Líneas 39-42:** URL de la credencial
- **Líneas 48-54:** Información del curso (duración, nivel, etc.)
- **Líneas 57-64:** Lista de habilidades adquiridas

#### Página de Contacto (`contacto.html`)
- **Líneas 45, 55, 65, 75, 85, 95:** Actualiza los enlaces y datos de contacto
- **Líneas 103-119:** Actualiza los enlaces a redes sociales

#### Página de Servicios (`servicios.html`)
Para cada servicio:
- **Línea 40:** Cambia el emoji por un icono o imagen
- **Líneas 44-47:** Actualiza título y descripción del servicio
- **Líneas 50-57:** Lista de características incluidas
- **Líneas 60-67:** Herramientas y tecnologías que usas
- **Líneas 71-79:** Actualiza los precios (por hora y por proyecto)
- **Línea 82:** Enlace al formulario de contacto

**Agregar más servicios:**
Copia cualquier bloque `.service-card` y personalízalo con tu información.

**Marcar un servicio como "Más Popular":**
Agrega la clase `featured` al div: `<div class="service-card featured">`

### 2. Agregar Imágenes

#### Para Proyectos
1. Coloca tus imágenes en `assets/images/`
2. Nombra los archivos: `proyecto1.jpg`, `proyecto2.png`, etc.
3. Reemplaza en el HTML:
   ```html
   <div class="project-image-container">
       <img src="assets/images/proyecto1.jpg" alt="Nombre del Proyecto">
   </div>
   ```

#### Para Perfil (Inicio)
1. Coloca tu foto en `assets/images/profile.jpg`
2. En `index.html` línea 67, reemplaza:
   ```html
   <div class="shape-hexagon">
       <img src="assets/images/profile.jpg" alt="Profile">
   </div>
   ```

#### Para Iconos
1. Descarga iconos SVG de sitios como:
   - [Heroicons](https://heroicons.com/)
   - [Feather Icons](https://feathericons.com/)
   - [Font Awesome](https://fontawesome.com/)
2. Colócalos en `assets/icons/`
3. Reemplaza los emojis:
   ```html
   <div class="contact-icon">
       <img src="assets/icons/email.svg" alt="Email">
   </div>
   ```

### 3. Personalizar Colores

Edita las variables en `css/style.css` (líneas 1-10):

```css
:root {
    --primary-color: #00f5ff;      /* Color principal (cyan) */
    --secondary-color: #9d4edd;    /* Color secundario (púrpura) */
    --accent-color: #ff006e;       /* Color de acento (rosa) */
    --bg-dark: #0a0e27;           /* Fondo oscuro */
    --bg-card: #151b3d;           /* Fondo de tarjetas */
    --text-light: #ffffff;        /* Texto claro */
    --text-gray: #a8b2d1;         /* Texto secundario */
}
```

### 4. Agregar Más Proyectos

Copia este bloque en `proyectos.html` y personaliza:

```html
<div class="project-card">
    <div class="project-image-container">
        <img src="assets/images/nuevo-proyecto.jpg" alt="Nuevo Proyecto">
    </div>
    <div class="project-info">
        <h3 class="project-title">Nombre del Proyecto</h3>
        <p class="project-description">
            Descripción del proyecto...
        </p>
        <div class="project-tech">
            <span class="tech-badge">React</span>
            <span class="tech-badge">Node.js</span>
        </div>
        <div class="project-code">// Tu código aquí</div>
        <div class="project-links">
            <a href="https://github.com/..." target="_blank" class="project-link">GitHub</a>
            <a href="https://..." target="_blank" class="project-link">Demo Live</a>
        </div>
    </div>
</div>
```

### 5. Agregar Más Cursos

Copia este bloque en `cursos.html` y personaliza:

```html
<div class="course-card">
    <div class="course-header" onclick="toggleCourse(this)">
        <div class="course-main-info">
            <h3 class="course-title-text">Nombre del Curso</h3>
            <p class="course-institution">Institución • Año</p>
        </div>
        <div class="course-actions">
            <a href="URL_CREDENCIAL" 
               class="course-link" 
               target="_blank" 
               onclick="event.stopPropagation()">
                Ver Credencial
            </a>
            <div class="toggle-icon">▼</div>
        </div>
    </div>
    <div class="course-details">
        <div class="course-details-content">
            <div class="course-info-grid">
                <div class="course-info-item">
                    <div class="course-info-label">Duración</div>
                    <div class="course-info-value">XX horas</div>
                </div>
            </div>
            <h4 style="color: var(--primary-color); margin-bottom: 1rem;">Habilidades Adquiridas</h4>
            <ul class="course-skills-list">
                <li>Habilidad 1</li>
                <li>Habilidad 2</li>
            </ul>
        </div>
    </div>
</div>
```

## 🎨 Características del Diseño

- **Diseño Oscuro:** Fondo oscuro con gradientes neón
- **Efectos de Glow:** Sombras y brillos en hover
- **Animaciones:** Transiciones suaves y fluidas
- **Responsive:** Adaptable a móviles, tablets y escritorio
- **Navegación Fija:** Barra de navegación siempre visible
- **Acordeones:** Cursos expandibles con información detallada

## 🌐 Desplegar el Portfolio

### Opción 1: GitHub Pages (Gratis)
1. Crea un repositorio en GitHub
2. Sube todos los archivos
3. Ve a Settings > Pages
4. Selecciona la rama `main` y guarda
5. Tu sitio estará en `https://tuusuario.github.io/nombre-repo`

### Opción 2: Netlify (Gratis)
1. Arrastra la carpeta `portfolio` a [netlify.com/drop](https://app.netlify.com/drop)
2. Tu sitio se publicará automáticamente

### Opción 3: Vercel (Gratis)
1. Crea una cuenta en [vercel.com](https://vercel.com)
2. Importa el repositorio de GitHub
3. Deploy automático

## 📱 Soporte de Navegadores

- Chrome (recomendado)
- Firefox
- Safari
- Edge
- Navegadores móviles

## 💡 Tips

1. **Optimiza las imágenes** antes de subirlas (usa [TinyPNG](https://tinypng.com/))
2. **Usa imágenes WebP** para mejor rendimiento
3. **Mantén el código limpio** y comentado
4. **Prueba en diferentes dispositivos** antes de publicar
5. **Actualiza regularmente** con nuevos proyectos y certificaciones

## 🐛 Problemas Comunes

### Las imágenes no se cargan
- Verifica que las rutas sean correctas
- Revisa que los nombres de archivo coincidan (respeta mayúsculas/minúsculas)

### Los enlaces no funcionan
- Asegúrate de que las rutas sean relativas correctamente
- Verifica que todos los archivos HTML estén en la raíz del proyecto

### Los estilos no se aplican
- Verifica que `style.css` esté en la carpeta `css/`
- Revisa la ruta en el `<link>` de cada HTML

## 📞 Soporte

Si tienes preguntas o problemas, puedes:
- Revisar este README
- Consultar los comentarios en el código
- Buscar en Google o Stack Overflow

## 📄 Licencia

Libre para uso personal y comercial.

---

¡Disfruta de tu nuevo portfolio! 🚀