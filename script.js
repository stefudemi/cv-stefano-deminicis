// 1. Función para el scroll suave (Ya la tenías)
function scrollToSection(id) {
    const element = document.getElementById(id);
    window.scrollTo({
        top: element.offsetTop - 70, 
        behavior: 'smooth'
    });
}

// 2. Animaciones de entrada al scrollear (Ya la tenías)
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // 3. NUEVO: Interactividad para el Formulario (Punto C de la consigna)
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se recargue
            
            const nombre = document.getElementById('nombre').value;
            alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado (simulación).`);
            
            contactForm.reset(); // Limpia los campos
        });
    }
});

// Esperamos a que cargue todo el documento
document.addEventListener('DOMContentLoaded', () => {
    
    const fraseLibertad = document.querySelector('.statement-container');

    // El famoso DELAY: 1000ms = 1 segundo
    setTimeout(() => {
        if (fraseLibertad) {
            fraseLibertad.classList.add('reveal');
        }
    }, 1000); 

});