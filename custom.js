// Mood Toggle
function toggleMood() {
  document.body.classList.toggle("dark-mode");
}

// Countdown Script
const countdownText = document.getElementById("countdown-text");
const nextTripDate = new Date("2025-07-20");

function updateCountdown() {
  const now = new Date();
  const timeLeft = nextTripDate - now;
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  countdownText.innerText = `Only ${days} days until my next travel!`;
}

updateCountdown();

// Flower Shower Canvas Animation
// French Penny Shower (Soft Pink Petals)
const canvas = document.getElementById('flower-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const petals = [];
  const petalCount = 50;
  for (let i = 0; i < petalCount; i++) {
    petals.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 5 + 3,
      speedY: Math.random() * 1.5 + 0.5,
      speedX: Math.random() * 1 - 0.5,
      opacity: Math.random() * 0.6 + 0.4
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let p of petals) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 192, 203, ${p.opacity})`; // soft pink
      ctx.fill();
      p.y += p.speedY;
      p.x += p.speedX;

      if (p.y > canvas.height) {
        p.y = -10;
        p.x = Math.random() * canvas.width;
      }
    }
    requestAnimationFrame(draw);
  }

  draw();
} else {
  console.warn("Canvas element not found.");
}
