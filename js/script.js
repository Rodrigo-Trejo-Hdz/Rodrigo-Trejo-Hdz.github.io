// =====================
// NAVEGACIÓN ACTIVA
// =====================
document.addEventListener('DOMContentLoaded', function() {
    // Obtener la página actual
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Marcar el enlace activo en la navegación (solo los links del menú, no el logo)
    const navLinks = document.querySelectorAll('nav ul a');
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// =====================
// CURSOS - TOGGLE ACORDEÓN
// =====================
function toggleCourse(header) {
    const card = header.closest('.course-card');
    const isExpanded = card.classList.contains('expanded');

    // Cerrar todos los cursos y sincronizar aria-expanded
    document.querySelectorAll('.course-card').forEach(item => {
        item.classList.remove('expanded');
        const btn = item.querySelector('.toggle-icon');
        if (btn) btn.setAttribute('aria-expanded', 'false');
    });

    // Abrir el curso clickeado si no estaba abierto
    if (!isExpanded) {
        card.classList.add('expanded');
        const btn = card.querySelector('.toggle-icon');
        if (btn) btn.setAttribute('aria-expanded', 'true');
    }
}

// Prevenir que el click en el enlace cierre el acordeón
document.addEventListener('DOMContentLoaded', function() {
    const courseLinks = document.querySelectorAll('.course-link');
    courseLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });
});

// =====================
// ANIMACIONES DE ENTRADA
// =====================
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observar elementos para animaciones
    const elements = document.querySelectorAll('.project-card, .course-card, .contact-item');
    elements.forEach(el => observer.observe(el));
}

// Inicializar observador cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeElements);
} else {
    observeElements();
}

// =====================
// SCROLL SUAVE
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// =====================
// MENÚ MÓVIL
// =====================
// La visibilidad del botón y del menú desplegable la controla el CSS
// (media query <= 768px); aquí solo se maneja el estado abierto/cerrado.
const ICON_MENU = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>';
const ICON_CLOSE = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';

function createMobileMenu() {
    const nav = document.querySelector('nav');
    const navUl = document.querySelector('nav ul');
    if (!nav || !navUl || document.querySelector('.mobile-menu-toggle')) return;

    if (!navUl.id) navUl.id = 'primary-navigation';

    const toggle = document.createElement('button');
    toggle.className = 'mobile-menu-toggle';
    toggle.innerHTML = ICON_MENU;
    toggle.setAttribute('aria-label', 'Open menu');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', navUl.id);

    function closeMenu() {
        navUl.classList.remove('show');
        toggle.innerHTML = ICON_MENU;
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
    }

    toggle.addEventListener('click', function() {
        const open = navUl.classList.toggle('show');
        this.innerHTML = open ? ICON_CLOSE : ICON_MENU;
        this.setAttribute('aria-expanded', String(open));
        this.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });

    // Cerrar al navegar o al volver a escritorio
    navUl.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) closeMenu();
    });

    nav.appendChild(toggle);
}

// Inicializar menú móvil cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createMobileMenu);
} else {
    createMobileMenu();
}

// =====================
// TRACKING DE CONVERSIONES (Google Analytics)
// =====================
// Mide los clics que importan para los objetivos del sitio:
// descarga de CV, agendar llamada, y salidas a LinkedIn/GitHub/email.
function initEventTracking() {
    if (typeof gtag !== 'function') return;

    document.querySelectorAll('a[href]').forEach(link => {
        const href = link.getAttribute('href');
        let eventName = null;

        if (href.indexOf('Rodrigo_Trejo_CV') !== -1) eventName = 'cv_download';
        else if (href.indexOf('calendly.com') !== -1) eventName = 'calendly_click';
        else if (href.indexOf('linkedin.com') !== -1) eventName = 'linkedin_click';
        else if (href.indexOf('github.com') !== -1) eventName = 'github_click';
        else if (href.indexOf('mailto:') === 0) eventName = 'email_click';

        if (eventName) {
            link.addEventListener('click', function() {
                gtag('event', eventName, {
                    event_category: 'conversion',
                    link_url: href,
                    page_path: window.location.pathname
                });
            });
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEventTracking);
} else {
    initEventTracking();
}

// =====================
// FILTROS DE TARJETAS (Proyectos y Certificaciones)
// =====================
function initCardFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project-card, .course-card');

    // Si no hay filtros o tarjetas en la página, salir
    if (filterButtons.length === 0 || cards.length === 0) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');

            // Actualizar botones activos
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filtrar tarjetas
            cards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.classList.remove('hide');
                    card.style.display = 'block';
                } else {
                    card.classList.add('hide');
                    // Esperar a que termine la animación antes de ocultar
                    setTimeout(() => {
                        if (card.classList.contains('hide')) {
                            card.style.display = 'none';
                        }
                    }, 400);
                }
            });

            // Reorganizar el grid de proyectos después del filtro
            setTimeout(() => {
                const projectsGrid = document.querySelector('.projects-grid');
                if (projectsGrid) {
                    projectsGrid.style.display = 'none';
                    projectsGrid.offsetHeight; // Force reflow
                    projectsGrid.style.display = 'grid';
                }
            }, 450);
        });
    });
}

// Inicializar filtros cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCardFilters);
} else {
    initCardFilters();
}