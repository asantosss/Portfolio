// Elementos principales
const entranceWrapper = document.getElementById('entranceWrapper');
const enterButton = document.getElementById('enterButton');
const mainContent = document.getElementById('mainContent');
const navbar = document.getElementById('navbar');

// Animación de entrada
enterButton.addEventListener('click', () => {
    entranceWrapper.classList.add('opening');
    
    setTimeout(() => {
        entranceWrapper.style.display = 'none';
        mainContent.classList.add('visible');
        document.body.style.overflow = 'auto';
    }, 1800);
});

// Navbar scroll effect
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer para animaciones al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos para animación
document.querySelectorAll('.project-card, .about-content, .contact-content').forEach(el => {
    observer.observe(el);
});

// Form submission - Configurado con FormSubmit
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        // Feedback visual antes de enviar
        const submitButton = contactForm.querySelector('.form-submit');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<span>Sending...</span>';
        submitButton.disabled = true;
        submitButton.style.background = 'var(--color-sepia)';
        
        // FormSubmit se encarga del envío automáticamente
        // El formulario se enviará y redirigirá según configuración
    });
}

// Efecto parallax sutil en hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
    }
});

// Cursor personalizado (opcional, para un toque extra de elegancia)
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

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

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
});

function animateCursor() {
    const dx = mouseX - cursorX;
    const dy = mouseY - cursorY;
    
    cursorX += dx * 0.1;
    cursorY += dy * 0.1;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

// Efecto hover en elementos interactivos
const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-tag');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
});

// Easter egg: Konami code para un efecto especial
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    // Efecto de confetti de café
    const colors = ['#8B7355', '#6b5744', '#a89080'];
    
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
            
            setTimeout(() => confetti.remove(), 5000);
        }, i * 50);
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

// Prevenir comportamiento por defecto de los enlaces del proyecto (hasta que haya URLs reales)
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        // Feedback visual
        const card = link.closest('.project-card');
        card.style.transform = 'scale(0.98)';
        setTimeout(() => {
            card.style.transform = '';
        }, 200);
        
        console.log('Project link clicked - ready for backend integration');
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

// Accessibility: Focus visible para navegación por teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

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

console.log('✨ Portfolio initialized - Alejandro Santos');
console.log('🎨 Designed with passion in London aesthetic');
console.log('☕ Try the Konami code for a surprise...');
