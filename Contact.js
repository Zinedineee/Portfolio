// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', () => {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    // Mise à jour de la position de la souris
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Le point suit directement le curseur
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });

    // Animation fluide pour le contour avec requestAnimationFrame
    function animateOutline() {
        // Lerp (interpolation linéaire) pour un mouvement fluide
        const speed = 0.15;
        outlineX += (mouseX - outlineX) * speed;
        outlineY += (mouseY - outlineY) * speed;

        cursorOutline.style.left = outlineX + 'px';
        cursorOutline.style.top = outlineY + 'px';

        requestAnimationFrame(animateOutline);
    }

    animateOutline();

    // Effet au survol des éléments cliquables
    const clickables = document.querySelectorAll('button, input, textarea, a');
    
    clickables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorDot.style.width = '6px';
            cursorDot.style.height = '6px';
            cursorOutline.style.width = '35px';
            cursorOutline.style.height = '35px';
            cursorOutline.style.borderColor = 'rgba(167, 139, 250, 0.8)';
        });

        el.addEventListener('mouseleave', () => {
            cursorDot.style.width = '8px';
            cursorDot.style.height = '8px';
            cursorOutline.style.width = '20px';
            cursorOutline.style.height = '20px';
            cursorOutline.style.borderColor = 'rgba(167, 139, 250, 0.5)';
        });
    });

    // Effet au clic
    document.addEventListener('mousedown', () => {
        cursorDot.style.width = '12px';
        cursorDot.style.height = '12px';
        cursorOutline.style.width = '25px';
        cursorOutline.style.height = '25px';
    });

    document.addEventListener('mouseup', () => {
        cursorDot.style.width = '8px';
        cursorDot.style.height = '8px';
        cursorOutline.style.width = '20px';
        cursorOutline.style.height = '20px';
    });
});
