// script.js
const overlay    = document.getElementById('welcome-overlay');
const main       = document.getElementById('main-content');
const enterBtn   = document.getElementById('enter-btn');
const layers     = document.querySelectorAll('.parallax');

// 1. Enter button: fade out overlay and show main content
enterBtn.addEventListener('click', () => {
  overlay.classList.replace('animate__fadeIn', 'animate__fadeOut'); 
  overlay.addEventListener('animationend', () => {
    overlay.style.display = 'none';
    main.classList.remove('hidden');
  });
});

// 2. Parallax on mouse move
document.addEventListener('mousemove', (e) => {
  // Normalize mouse position to range [-0.5, 0.5]
  const xNorm = (e.clientX / window.innerWidth) - 0.5; 
  const yNorm = (e.clientY / window.innerHeight) - 0.5;

  layers.forEach(layer => {
    const depth = parseFloat(layer.dataset.depth);
    const moveX = xNorm * depth * 100;
    const moveY = yNorm * depth * 100;
    layer.style.transform = `translate(${moveX}px, ${moveY}px)`; 
  });
});
