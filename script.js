// === ENTRADA CON PUERTAS ===
// Capturo los elementos principales de la entrada
const entranceWrapper = document.getElementById('entranceWrapper');
const enterButton = document.getElementById('enterButton');
const mainContent = document.getElementById('mainContent');
const navbar = document.getElementById('navbar');

// Cuando hago click en "come with me", las puertas se abren
enterButton.addEventListener('click', () => {
    // Activo la animación de apertura de puertas
    entranceWrapper.classList.add('opening');
    
    // Después de 1.8s (duración de animación), oculto la entrada y muestro el contenido
    setTimeout(() => {
        entranceWrapper.style.display = 'none';
        mainContent.classList.add('visible');
        document.body.style.overflow = 'auto'; // Reactivo el scroll
    }, 1800);
});

// === NAVBAR CON EFECTO AL HACER SCROLL ===
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Si bajo más de 100px, agrego efecto al navbar (más compacto y con sombra)
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// === SMOOTH SCROLL PARA NAVEGACIÓN ===
// Cuando hago click en los enlaces del menú, bajo suavemente a cada sección
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            // Resto 80px para compensar la altura del navbar fijo
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// === ANIMACIONES AL HACER SCROLL ===
// Configuro el observador para detectar cuando los elementos entran en pantalla
const observerOptions = {
    threshold: 0.1, // Se activa cuando el 10% del elemento es visible
    rootMargin: '0px 0px -100px 0px' // Margen inferior para activar antes
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Cuando el elemento entra en pantalla, agrego animación fade-in-up
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target); // Solo animo una vez
        }
    });
}, observerOptions);

// Observo las tarjetas de proyecto y secciones para animarlas
document.querySelectorAll('.project-card, .about-content, .contact-content').forEach(el => {
    observer.observe(el);
});

// === FORMULARIO DE CONTACTO ===
// Configurado con FormSubmit para recibir emails sin backend
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        // Muestro feedback visual mientras se envía
        const submitButton = contactForm.querySelector('.form-submit');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<span>Sending...</span>';
        submitButton.disabled = true; // Evito envíos duplicados
        submitButton.style.background = 'var(--color-sepia)';
        
        // FormSubmit maneja el envío automáticamente
        // El usuario será redirigido a thank-you.html según configuré en _next
    });
}

// === EFECTO PARALLAX EN HERO ===
// Muevo el hero más lento que el scroll para dar sensación de profundidad
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero && scrolled < window.innerHeight) {
        // Muevo a la mitad de velocidad del scroll (0.5x)
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        // Desvanezco sutilmente mientras bajo
        hero.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
    }
});

// === CURSOR PERSONALIZADO ===
// Creo un cursor elegante que sigue el mouse (solo en desktop)
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

// El punto pequeño que se mueve instantáneamente
const cursorDot = document.createElement('div');
cursorDot.className = 'cursor-dot';
document.body.appendChild(cursorDot);

// Añadir estilos para el cursor personalizado
const cursorStyles = document.createElement('style');
cursorStyles.textContent = `
    .custom-cursor {
        width: 40px;
        height: 40px;
        border: 1px solid var(--color-sepia);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        transform: translate(-50%, -50%);
        transition: all 0.3s ease;
        z-index: 10000;
        opacity: 0;
    }
    
    .cursor-dot {
        width: 6px;
        height: 6px;
        background: var(--color-sepia);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        transform: translate(-50%, -50%);
        z-index: 10001;
        opacity: 0;
    }
    
    body:hover .custom-cursor,
    body:hover .cursor-dot {
        opacity: 1;
    }
    
    .custom-cursor.hover {
        width: 60px;
        height: 60px;
        background: rgba(139, 115, 85, 0.1);
    }
    
    @media (max-width: 768px) {
        .custom-cursor,
        .cursor-dot {
            display: none;
        }
    }
`;
document.head.appendChild(cursorStyles);

// Variables para tracking del mouse
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

// El punto sigue el mouse instantáneamente
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
});

// El círculo grande sigue con un delay suave (efecto lerp)
function animateCursor() {
    const dx = mouseX - cursorX;
    const dy = mouseY - cursorY;
    
    // Muevo un 10% de la distancia en cada frame (suavizado)
    cursorX += dx * 0.1;
    cursorY += dy * 0.1;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    requestAnimationFrame(animateCursor); // Loop infinito
}

animateCursor(); // Inicio el loop

// Agrego efecto especial al cursor cuando paso por elementos clickeables
const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-tag');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover'); // Agrando el cursor
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover'); // Vuelvo al tamaño normal
    });
});

// === EASTER EGG SECRETO ===
// Si alguien escribe el código Konami, activo un efecto sorpresa
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10); // Solo guardo las últimas 10 teclas
    
    // Si la secuencia coincide con el patrón Konami
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    // Lluvia de confetti con colores sepia (como granos de café cayendo)
    const colors = ['#8B7355', '#6b5744', '#a89080'];
    
    // Creo 50 partículas que caen
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                border-radius: 50%;
                left: ${Math.random() * 100}vw;
                top: -20px;
                animation: fall ${2 + Math.random() * 3}s linear forwards;
                z-index: 10000;
                pointer-events: none;
            `;
            document.body.appendChild(confetti);
            
            // Elimino la partícula después de 5s para no acumular en el DOM
            setTimeout(() => confetti.remove(), 5000);
        }, i * 50); // Delay escalonado para efecto cascada
    }
    
    // Añadir animación de caída
    if (!document.getElementById('fall-animation')) {
        const fallAnimation = document.createElement('style');
        fallAnimation.id = 'fall-animation';
        fallAnimation.textContent = `
            @keyframes fall {
                to {
                    transform: translateY(100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(fallAnimation);
    }
    
    console.log('☕ Coffee mode activated! Enjoy your browse through London...');
}

// === ENLACES DE PROYECTOS (TEMPORALES) ===
// Por ahora solo muestro feedback visual, después conectaré con repos reales de GitHub
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        // Efecto de "click" en la tarjeta
        const card = link.closest('.project-card');
        card.style.transform = 'scale(0.98)';
        setTimeout(() => {
            card.style.transform = '';
        }, 200);
        
        console.log('Project link clicked - listo para integrar con GitHub API');
    });
});

// Loading performance optimization
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Lazy loading para imágenes (cuando se agreguen)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// === ACCESIBILIDAD ===
// Detecto si el usuario navega con teclado para mostrar outlines visibles
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav'); // Activo outlines
    }
});

// Si usan el mouse, oculto los outlines
document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// Añadir estilos para keyboard navigation
const a11yStyles = document.createElement('style');
a11yStyles.textContent = `
    body:not(.keyboard-nav) *:focus {
        outline: none;
    }
    
    .keyboard-nav *:focus {
        outline: 2px solid var(--color-sepia);
        outline-offset: 4px;
    }
`;
document.head.appendChild(a11yStyles);

// Mensajes en consola para developers curiosos ;)
console.log('✨ Portfolio initialized - Alejandro Santos');
console.log('🎨 Designed with passion in London aesthetic');
console.log('☕ Try the Konami code for a surprise...');
