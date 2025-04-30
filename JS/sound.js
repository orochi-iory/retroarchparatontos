// sound.js
let hoverSound = null;

const loadAudio = () => {
    hoverSound = new Audio('/sfx/hover.wav');
    hoverSound.preload = 'auto';
    hoverSound.volume = 0.5;
    hoverSound.load();
};

const initSoundSystem = () => {
    // ... código anterior ...
};

// Cargar audio después de la interacción del usuario
window.addEventListener('click', () => {
    if (!hoverSound) {
        loadAudio();
        initSoundSystem();
    }
}, { once: true });
