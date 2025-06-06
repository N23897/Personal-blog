// === MOOD TOGGLE: Change background to a soft pastel ===
function getRandomPastel() {
  const h = Math.floor(Math.random() * 360);
  const s = 70 + Math.random() * 10;
  const l = 80 + Math.random() * 10;
  return `hsl(${h},${s}%,${l}%)`;
}
function toggleMood() {
  document.body.style.background = getRandomPastel();
}
document.getElementById('toggle-mood-btn').onclick = toggleMood;


// === COUNTDOWN TIMER to next trip ===
const endDate = new Date("2025-09-20T00:00:00");
function pad(n) { return n < 10 ? '0' + n : n; }

function updateUnit(id, value) {
  const el = document.getElementById(id);
  if (el.textContent !== value) {
    el.classList.remove('flip');
    void el.offsetWidth; // restart flip animation
    el.textContent = value;
    el.classList.add('flip');
  }
}

function updateCountdown() {
  const now = new Date();
  const diff = endDate - now;
  if (diff > 0) {
    updateUnit("days", pad(Math.floor(diff / (1000 * 60 * 60 * 24))));
    updateUnit("hours", pad(Math.floor((diff / (1000 * 60 * 60)) % 24)));
    updateUnit("minutes", pad(Math.floor((diff / (1000 * 60)) % 60)));
    updateUnit("seconds", pad(Math.floor((diff / 1000) % 60)));
  } else {
    document.getElementById("countdown").textContent = "🎉 The trip has started!";
  }
}
setInterval(updateCountdown, 1000);
updateCountdown();


// === FLOWER SHOWER: Background falling petals ===
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('flower-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const flowerImg = new Image();
  flowerImg.src = 'images/frangipani.png';

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const petals = Array.from({ length: 30 }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: Math.random() * 17 + 18,
    speedY: Math.random() * 0.8 + 0.4,
    speedX: Math.random() * 0.5 - 0.25,
    opacity: Math.random() * 0.3 + 0.35
  }));

  function drawPetals() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    petals.forEach(p => {
      ctx.globalAlpha = p.opacity;
      ctx.drawImage(flowerImg, p.x, p.y, p.size, p.size);
      ctx.globalAlpha = 1;
      p.y += p.speedY;
      p.x += p.speedX;
      if (p.y > canvas.height) {
        p.y = -p.size;
        p.x = Math.random() * canvas.width;
      }
      if (p.x < -p.size) p.x = canvas.width;
      if (p.x > canvas.width) p.x = -p.size;
    });
    requestAnimationFrame(drawPetals);
  }

  flowerImg.onload = drawPetals;
});


// === TYPING EFFECT for welcome header ===
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


// === BACK TO TOP BUTTON ===
const btt = document.getElementById("back-to-top");
window.onscroll = () => {
  btt.style.display = window.scrollY > 120 ? "block" : "none";
};
btt.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });


// === FUN FACT ROTATOR ===
const facts = [
  "Did you know? The world's longest flight is over 17 hours long!",
  "Tip: Always carry a photocopy of your passport.",
  "Fun Fact: Frangipani flowers symbolize new beginnings!",
  "Travel Hack: A sarong can double as a blanket, towel, or sun shade."
];
document.getElementById('fun-fact').textContent =
  facts[Math.floor(Math.random() * facts.length)];


// === MODAL LIGHTBOX for image viewing ===
function openModal(imgElem) {
  const modal = document.getElementById("photoModal");
  const modalImg = document.getElementById("modalImg");
  const modalCaption = document.getElementById("modalCaption");
  modal.style.display = "flex";
  modalImg.src = imgElem.src;
  modalCaption.innerHTML = imgElem.nextElementSibling
    ? imgElem.nextElementSibling.innerHTML
    : imgElem.alt;
}

function closeModal() {
  document.getElementById("photoModal").style.display = "none";
}
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});


// === IMAGE FILTER BUTTONS ===
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    const filter = this.getAttribute('data-filter');
    document.querySelectorAll('.photo-card').forEach(card => {
      card.style.display = (filter === 'all' || card.getAttribute('data-country') === filter) ? '' : 'none';
    });
  });
});


// === POLAROID CAROUSEL: infinite loop effect ===
window.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.polaroid-track');
  if (track) {
    track.innerHTML += track.innerHTML; // duplicate for loop illusion
  }
});
