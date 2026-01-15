# Portfolio Alejandro Santos ✨

Portfolio minimalista y elegante con estética londinense, tonos sepia y diseño inspirado en Apple.

## 🎨 Características

- **Entrada espectacular**: Efecto de puertas que se abren con animación suave
- **Diseño minimalista**: Inspirado en Apple con paleta blanco/negro/sepia
- **Tipografía elegante**: Fuente manuscrita (Dancing Script) para el nombre
- **Animaciones fluidas**: Transiciones suaves y efectos parallax
- **100% Responsive**: Diseño adaptable a todos los dispositivos
- **Cursor personalizado**: Efecto cursor elegante en desktop
- **Easter egg**: Código Konami para un efecto sorpresa ☕

## 📂 Estructura

```
Ale_web/
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos completos con tema sepia/café
├── script.js           # Interacciones y animaciones
└── README.md          # Este archivo
```

## 🚀 Cómo usar

1. **Abrir el portfolio**:
   - Simplemente abre `index.html` en tu navegador
   - O usa un servidor local (recomendado)

2. **Con servidor local** (opcional):
   ```bash
   # Si tienes Python instalado:
   python -m http.server 8000
   
   # O con PHP:
   php -S localhost:8000
   ```
   Luego abre: `http://localhost:8000`

## 🎯 Secciones

### 1. **Entrada (Landing)**
- Efecto de puertas que se abren
- Nombre "Alejandro Santos" con fuente manuscrita
- Botón "come with me" interactivo
- Animaciones de entrada elegantes

### 2. **Hero Section**
- Título principal impactante
- Subtítulo descriptivo
- Efecto parallax sutil

### 3. **About Me**
- Diseño en dos columnas
- Frame decorativo para imagen
- Texto con Lorem ipsum
- Tags de habilidades interactivos

### 4. **Projects**
- Grid responsive de proyectos
- 4 proyectos con miniaturas SVG
- Hover effects elegantes
- Overlay con enlace "View Project"

### 5. **Contact**
- Formulario de contacto minimalista
- Enlaces a redes sociales (Email, GitHub, LinkedIn)
- Iconos SVG personalizados
- Validación visual

### 6. **Footer**
- Diseño oscuro elegante
- Firma personal "AS"
- Copyright info

## 🎨 Paleta de Colores

```css
- Background: #fafaf9 (Off-white)
- Text: #1a1a1a (Almost black)
- Sepia: #8B7355 (Coffee/London aesthetic)
- Sepia Light: #a89080
- Sepia Dark: #6b5744
- Accents: Black & White
```

## ✨ Características Técnicas

- **Sin dependencias**: HTML, CSS y JavaScript vanilla puro
- **Performance optimizada**: Lazy loading, Intersection Observer
- **Accesibilidad**: Navegación por teclado, focus visible
- **SEO friendly**: Estructura semántica HTML5
- **Smooth scrolling**: Navegación fluida entre secciones
- **Form handling**: Preparado para integración con backend

## 🔮 Características Especiales

### Cursor Personalizado
Cursor elegante que sigue el mouse en desktop con efecto suave

### Konami Code Easter Egg
Prueba la secuencia: ↑ ↑ ↓ ↓ ← → ← → B A
(Efecto sorpresa de confetti de café ☕)

### Animaciones al Scroll
Los elementos aparecen suavemente al hacer scroll

## 📱 Responsive Design

- **Desktop**: Experiencia completa con cursor personalizado
- **Tablet**: Grid adaptado y navegación optimizada
- **Mobile**: Layout de una columna, menú simplificado

## 🛠️ Próximos Pasos (Backend)

1. **API de contacto**: Endpoint para envío de emails
2. **Integración GitHub**: API para proyectos reales
3. **CMS opcional**: Para gestión de contenido
4. **Analytics**: Tracking de visitas
5. **Blog**: Sección adicional de artículos

## 🎭 Personalización

### Cambiar colores:
Edita las variables CSS en `styles.css`:
```css
:root {
    --color-sepia: #8B7355;
    /* Modifica aquí tus colores */
}
```

### Añadir proyectos:
Duplica la estructura `.project-card` en `index.html`

### Cambiar fuentes:
Modifica los enlaces de Google Fonts en el `<head>`

## 📝 Notas

- Las imágenes son placeholders SVG siguiendo la estética
- Los enlaces son temporales hasta la integración del backend
- El formulario muestra feedback visual pero no envía datos aún
- Listo para conectar con GitHub API y backend personalizado

## 🌟 Credits

Diseñado y desarrollado con ☕ y pasión
**Alejandro Santos** - 2026

---

**Tip**: Abre la consola del navegador para ver mensajes ocultos y descubrir el easter egg 😉
