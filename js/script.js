// =====================
// NAVEGACIÓN ACTIVA
// =====================
document.addEventListener('DOMContentLoaded', function() {
    // Obtener la página actual
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Marcar el enlace activo en la navegación
    const navLinks = document.querySelectorAll('nav a');
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
    
    // Cerrar todos los cursos
    document.querySelectorAll('.course-card').forEach(item => {
        item.classList.remove('expanded');
    });
    
    // Abrir el curso clickeado si no estaba abierto
    if (!isExpanded) {
        card.classList.add('expanded');
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
// MENÚ MÓVIL (OPCIONAL)
// =====================
function createMobileMenu() {
    const nav = document.querySelector('nav');
    const navUl = document.querySelector('nav ul');
    
    // Solo crear el menú móvil si no existe
    if (!document.querySelector('.mobile-menu-toggle')) {
        const mobileToggle = document.createElement('button');
        mobileToggle.className = 'mobile-menu-toggle';
        mobileToggle.innerHTML = '☰';
        mobileToggle.style.display = 'none';
        
        mobileToggle.addEventListener('click', function() {
            navUl.classList.toggle('show');
            this.innerHTML = navUl.classList.contains('show') ? '✕' : '☰';
        });
        
        nav.insertBefore(mobileToggle, navUl);
        
        // Responsive
        function checkWidth() {
            if (window.innerWidth <= 768) {
                mobileToggle.style.display = 'block';
            } else {
                mobileToggle.style.display = 'none';
                navUl.classList.remove('show');
            }
        }
        
        window.addEventListener('resize', checkWidth);
        checkWidth();
    }
}

// Inicializar menú móvil cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createMobileMenu);
} else {
    createMobileMenu();
}

// =====================
// THEME TOGGLE (Light/Dark Mode)
// =====================
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.querySelector('.theme-toggle-icon');
    const htmlElement = document.documentElement;

    // Verificar si el elemento existe
    if (!themeToggle) return;

    // Cargar el tema guardado en localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    // Toggle al hacer click
    themeToggle.addEventListener('click', function() {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    // Actualizar el ícono según el tema
    function updateThemeIcon(theme) {
        if (themeIcon) {
            themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
        }
    }
}

// Inicializar theme toggle cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeToggle);
} else {
    initThemeToggle();
}

// =====================
// PROJECT FILTERS
// =====================
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Si no hay filtros en la página, salir
    if (filterButtons.length === 0) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');

            // Actualizar botones activos
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filtrar proyectos
            projectCards.forEach(card => {
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

            // Reorganizar el grid después del filtro
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

// Inicializar project filters cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProjectFilters);
} else {
    initProjectFilters();
}