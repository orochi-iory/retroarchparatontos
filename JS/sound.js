// JS/sound.js
document.addEventListener('DOMContentLoaded', () => {
    // 1. Precargar el sonido
    const hoverSound = new Audio('/sfx/hover.wav');
    hoverSound.preload = 'auto';
    hoverSound.volume = 0.5; // Ajusta el volumen (0.1 a 1)

    // 2. Sistema de reproducción global
    const playHoverSound = () => {
        try {
            hoverSound.currentTime = 0; // Reinicia el audio
            hoverSound.play();
        } catch (error) {
            console.error('Error al reproducir sonido:', error);
        }
    };

    // 3. Detectar hover en todos los enlaces
    document.body.addEventListener('mouseover', (e) => {
        if (e.target.closest('a, [data-sound-hover]')) {
            playHoverSound();
        }
    });

    // 4. Versión para dispositivos táctiles
    let lastTouch = 0;
    document.body.addEventListener('touchstart', (e) => {
        if (e.target.closest('a, [data-sound-hover]')) {
            // Prevenir múltiples toques rápidos
            if (Date.now() - lastTouch > 200) {
                playHoverSound();
                lastTouch = Date.now();
            }
        }
    }, { passive: true });

    // 5. Manejo de errores
    hoverSound.addEventListener('error', (e) => {
        console.error('Error cargando el sonido:', e.target.error);
    });
});
