const overlay  = document.getElementById('welcome-overlay');
const main     = document.getElementById('main-content');
const enterBtn = document.getElementById('enter-btn');
const layers   = document.querySelectorAll('.parallax');

enterBtn.addEventListener('click', () => {
  overlay.classList.replace('animate__fadeIn', 'animate__fadeOut');
  overlay.addEventListener('animationend', () => {
    overlay.style.display = 'none';
    main.classList.remove('hidden');
  });
});

document.addEventListener('mousemove', (e) => {
  const xNorm = (e.clientX / window.innerWidth) - 0.5;
  const yNorm = (e.clientY / window.innerHeight) - 0.5;

  layers.forEach(layer => {
    const depth = parseFloat(layer.dataset.depth);
    const moveX = xNorm * depth * 100;
    const moveY = yNorm * depth * 100;
    layer.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});
