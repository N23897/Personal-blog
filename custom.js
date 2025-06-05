// Mood Toggle
function getRandomPastel() {
  const h = Math.floor(Math.random() * 360);
  const s = 70 + Math.random() * 10; // 70–80%
  const l = 80 + Math.random() * 10; // 80–90%
  return `hsl(${h},${s}%,${l}%)`;
}

function toggleMood() {
  const pastel = getRandomPastel();
  document.body.style.background = pastel;
  // Optional: update other elements for accent color if you want
}

document.getElementById('toggle-mood-btn').onclick = toggleMood;


// Countdown Script
function pad(n) { return n < 10 ? '0' + n : n; }
const endDate = new Date("2025-09-20T00:00:00");

function updateUnit(id, value) {
  const el = document.getElementById(id);
  if (el.textContent !== value) {
    el.classList.remove('flip');
    void el.offsetWidth; // triggers reflow for animation restart
    el.textContent = value;
    el.classList.add('flip');
  }
}

function updateCountdown() {
  const now = new Date();
  const diff = endDate - now;
  if (diff > 0) {
    const days = pad(Math.floor(diff / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((diff / (1000 * 60 * 60)) % 24));
    const minutes = pad(Math.floor((diff / (1000 * 60)) % 60));
    const seconds = pad(Math.floor((diff / 1000) % 60));
    updateUnit("days", days);
    updateUnit("hours", hours);
    updateUnit("minutes", minutes);
    updateUnit("seconds", seconds);
  } else {
    document.getElementById("countdown").textContent = "🎉 The trip has started!";
  }
}
setInterval(updateCountdown, 1000);
updateCountdown();


// Flower Shower Canvas Animation
// === Frangipani Flower Shower (PNG with Transparent Background) ===

const flowerImg = new Image();
flowerImg.src = 'images/frangipani.png'; // path to your transparent PNG

const canvas = document.getElementById('flower-canvas');
if (canvas) {
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const ctx = canvas.getContext('2d');
  const petalCount = 30;
  const petals = [];
  for (let i = 0; i < petalCount; i++) {
    petals.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 17 + 18, // 18px - 35px
      speedY: Math.random() * 0.8 + 0.4,
      speedX: Math.random() * 0.5 - 0.25,
      opacity: Math.random() * 0.3 + 0.35
    });
  }

  function drawPetals() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let p of petals) {
      ctx.globalAlpha = p.opacity;
      ctx.drawImage(flowerImg, p.x, p.y, p.size, p.size);
      ctx.globalAlpha = 1.0;
      p.y += p.speedY;
      p.x += p.speedX;
      if (p.y > canvas.height) {
        p.y = -p.size;
        p.x = Math.random() * canvas.width;
      }
      if (p.x < -p.size) p.x = canvas.width;
      if (p.x > canvas.width) p.x = -p.size;
    }
    requestAnimationFrame(drawPetals);
  }

  flowerImg.onload = drawPetals;
}

const phrases = [
  "Welcome to my travel & life blog.",
  "Discover recipes, stories, and adventures.",
  "Let's explore together!"
];
let p = 0, c = 0;
function typeEffect() {
  const el = document.getElementById("typed-text");
  if (!el) return;
  el.textContent = phrases[p].slice(0, c++);
  if (c <= phrases[p].length) {
    setTimeout(typeEffect, 80);
  } else {
    setTimeout(() => {
      c = 0;
      p = (p + 1) % phrases.length;
      typeEffect();
    }, 1300);
  }
}
window.addEventListener('DOMContentLoaded', typeEffect);

const btt = document.getElementById("back-to-top");
window.onscroll = function() {
  btt.style.display = window.scrollY > 120 ? "block" : "none";
};
btt.onclick = () => window.scrollTo({top:0,behavior:"smooth"});

const facts = [
  "Did you know? The world's longest flight is over 17 hours long!",
  "Tip: Always carry a photocopy of your passport.",
  "Fun Fact: Frangipani flowers symbolize new beginnings!",
  "Travel Hack: A sarong can double as a blanket, towel, or sun shade."
];
document.getElementById('fun-fact').textContent =
  facts[Math.floor(Math.random() * facts.length)];

  // Modal/lightbox logic
function openModal(imgElem) {
  var modal = document.getElementById("photoModal");
  var modalImg = document.getElementById("modalImg");
  var modalCaption = document.getElementById("modalCaption");
  modal.style.display = "flex";
  modalImg.src = imgElem.src;
  modalCaption.innerHTML = imgElem.nextElementSibling ? imgElem.nextElementSibling.innerHTML : imgElem.alt;
}
function closeModal() {
  document.getElementById("photoModal").style.display = "none";
}
// Optional: close on ESC key
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") closeModal();
});

// Filter logic
document.querySelectorAll('.filter-btn').forEach(function(btn){
  btn.addEventListener('click', function(){
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    var filter = this.getAttribute('data-filter');
    document.querySelectorAll('.photo-card').forEach(function(card){
      if (filter === 'all' || card.getAttribute('data-country') === filter) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
