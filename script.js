function scrollToSection(id) {
    const element = document.getElementById(id);
    window.scrollTo({
        top: element.offsetTop - 70, 
        behavior: 'smooth'
    });
}

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

    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nombre = document.getElementById('nombre').value;
            alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado (simulación).`);
            contactForm.reset();
        });
    }

    const fraseLibertad = document.querySelector('.statement-container');
    const btnVolver = document.getElementById('btn-volver'); // Asegurate que el ID coincida con tu HTML

    setTimeout(() => {
        if (fraseLibertad) {
            fraseLibertad.classList.add('reveal');
        }
    }, 1000);

    // Lógica del Issue #1: Ocultar/Mostrar botón
    window.onscroll = function() {
        if (btnVolver) {
            if (window.scrollY > 100) {
                btnVolver.style.display = "block";
            } else {
                btnVolver.style.display = "none";
            }
        }
    };

    // Funcionalidad extra: Click para subir
    if (btnVolver) {
        btnVolver.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});