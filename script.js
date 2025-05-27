// script.js
document.getElementById('enter-btn').addEventListener('click', () => {
  const overlay = document.getElementById('welcome-overlay');
  overlay.classList.replace('animate__fadeIn', 'animate__fadeOut');
  overlay.addEventListener('animationend', () => {
    overlay.style.display = 'none';
    document.getElementById('main-content').classList.remove('hidden');
  });
});
