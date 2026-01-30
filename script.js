// AOS (Animate On Scroll)
AOS.init();

// Glow effect
const glowZone = document.querySelector('.glow-zone');
let timeout;

glowZone.addEventListener('mousemove', (e) => {
  const x = e.clientX + 'px';
  const y = e.clientY + 'px';
  glowZone.style.setProperty('--x', x);
  glowZone.style.setProperty('--y', y);
  glowZone.classList.remove('no-glow');

  clearTimeout(timeout);
  timeout = setTimeout(() => {
    glowZone.classList.add('no-glow');
  }, 1500);
});

glowZone.addEventListener('mouseleave', () => glowZone.classList.add('no-glow'));
glowZone.addEventListener('mouseenter', () => glowZone.classList.remove('no-glow'));

// Section toggle
function showSection(target) {
  const home = document.getElementById('home');
  const about = document.getElementById('about');
  const contact = document.getElementById('contact');

  if (target === 'contact') {
    home.classList.remove('visible-section');
    home.classList.add('hidden-section');
    about.classList.remove('visible-section');
    about.classList.add('hidden-section');
    contact.classList.remove('hidden-section');
    contact.classList.add('visible-section');
  } else {
    home.classList.remove('hidden-section');
    home.classList.add('visible-section');
    about.classList.remove('hidden-section');
    about.classList.add('visible-section');
    contact.classList.remove('visible-section');
    contact.classList.add('hidden-section');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Starfield Animation
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

for (let i = 0; i < 150; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.3,
    speed: Math.random() * 0.5 + 0.2,
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fill();

    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(drawStars);
}

drawStars();
