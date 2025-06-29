// Simple lightbox functionality
// Attaches click events on images with 'project-img' class
// Displays clicked image in an overlay

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.project-img');
  if (!images.length) return;

  const overlay = document.createElement('div');
  overlay.className = 'lightbox';
  document.body.appendChild(overlay);

  images.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      overlay.innerHTML = '';
      const clone = img.cloneNode();
      overlay.appendChild(clone);
      overlay.classList.add('show');
    });
  });

  overlay.addEventListener('click', () => {
    overlay.classList.remove('show');
  });
});
