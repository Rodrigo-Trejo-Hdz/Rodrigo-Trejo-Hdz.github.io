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