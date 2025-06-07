/*
 * custom.js – Main interactive script for Living In Between blog
 * Author: Nasrin Sadiqi, 2025 (Student ID: 34898644)
 *
 * This script brings the website to life by handling:
 *   - Mood toggle (random pastel background color)
 *   - Countdown timer to next trip/event
 *   - Animated flower shower (falling frangipani petals)
 *   - Typing animation for header
 *   - Fun fact rotator (random fact on every page load)
 *   - Back-to-top button logic
 *   - Modal lightbox for images
 *   - Photo filtering and looping polaroid carousel
 *
 * Code is a mix of original functions and adapted open-source logic,
 * with all major sections and lines commented below.
 * See README for a summary and a link to view the script in action.
 */

// === MOOD TOGGLE: Change background to a soft pastel ===

// Generates a random pastel colour using HSL.
function getRandomPastel() {
  const h = Math.floor(Math.random() * 360);       // Random hue (0–359)
  const s = 70 + Math.random() * 10;               // Saturation between 70–80%
  const l = 80 + Math.random() * 10;               // Lightness between 80–90%
  return `hsl(${h},${s}%,${l}%)`;                  // Returns color as 'hsl(...)'
}

// Sets the body's background to a new random pastel colour.
function toggleMood() {
  document.body.style.background = getRandomPastel();
}

// Link the toggleMood function to the mood button's click event.
document.getElementById('toggle-mood-btn').onclick = toggleMood;


// === COUNTDOWN TIMER to next trip ===

// Target end date for the countdown (change to your actual trip/event date).
const endDate = new Date("2025-09-20T00:00:00");

// Pad single digit numbers with a leading zero (e.g., 7 -> '07')
function pad(n) { return n < 10 ? '0' + n : n; }

// Updates the displayed number for each time unit with a flip animation effect.
function updateUnit(id, value) {
  const el = document.getElementById(id);
  if (el.textContent !== value) {
    el.classList.remove('flip');          // Remove any existing flip animation.
    void el.offsetWidth;                  // Force a DOM reflow (so animation restarts).
    el.textContent = value;               // Update the displayed value.
    el.classList.add('flip');             // Add flip class for animation.
  }
}

// Main countdown logic: calculates the time left, updates all units, or displays a final message.
function updateCountdown() {
  const now = new Date();
  const diff = endDate - now; // Milliseconds left until trip.
  if (diff > 0) {
    updateUnit("days", pad(Math.floor(diff / (1000 * 60 * 60 * 24))));
    updateUnit("hours", pad(Math.floor((diff / (1000 * 60 * 60)) % 24)));
    updateUnit("minutes", pad(Math.floor((diff / (1000 * 60)) % 60)));
    updateUnit("seconds", pad(Math.floor((diff / 1000) % 60)));
  } else {
    document.getElementById("countdown").textContent = "🎉 The trip has started!";
  }
}
// Run updateCountdown every second.
setInterval(updateCountdown, 1000);
// Also, run it immediately so the timer isn't blank at first.
updateCountdown();


// === FLOWER SHOWER: Animated background falling frangipani petals ===

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('flower-canvas');
  if (!canvas) return; // If no canvas exists, skip this feature.

  const ctx = canvas.getContext('2d'); // Get drawing context.
  const flowerImg = new Image();       // Create image for petal.
  flowerImg.src = 'images/frangipani.png'; // Use a PNG petal image.

  // Adjust canvas size to always fill the window.
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas); // Responsive on resize.

  // Create an array of "petals" with random starting position, size, speed, and opacity.
  const petals = Array.from({ length: 30 }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: Math.random() * 17 + 18,         // Petal size between 18–35px.
    speedY: Math.random() * 0.8 + 0.4,     // Falling speed (vertical).
    speedX: Math.random() * 0.5 - 0.25,    // Drift (horizontal).
    opacity: Math.random() * 0.3 + 0.35    // Random transparency.
  }));

  // Continuously draw petals falling down and drifting across the screen.
  function drawPetals() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the previous frame.
    petals.forEach(p => {
      ctx.globalAlpha = p.opacity;                  // Set transparency for each petal.
      ctx.drawImage(flowerImg, p.x, p.y, p.size, p.size); // Draw petal image.
      ctx.globalAlpha = 1;                          // Reset transparency.
      // Move petal down and sideways.
      p.y += p.speedY;
      p.x += p.speedX;
      // If the petal falls below the screen, move it to the top with a new X position.
      if (p.y > canvas.height) {
        p.y = -p.size;
        p.x = Math.random() * canvas.width;
      }
      // If petal goes off the side, wrap it to the other side.
      if (p.x < -p.size) p.x = canvas.width;
      if (p.x > canvas.width) p.x = -p.size;
    });
    requestAnimationFrame(drawPetals); // Continue animation.
  }

  flowerImg.onload = drawPetals; // Start animation once image loads.
});


// === TYPING EFFECT for welcome header ===

// Array of messages for animated typing header.
const phrases = [
  "Welcome to my travel & life blog.",
  "Discover recipes, stories, and adventures.",
  "Let's explore together!"
];
let p = 0, c = 0; // Phrase index and character index.

// Types out each character, one at a time, and loops through messages.
function typeEffect() {
  const el = document.getElementById("typed-text");
  if (!el) return;
  el.textContent = phrases[p].slice(0, c++);  // Show next char in phrase.
  if (c <= phrases[p].length) {
    setTimeout(typeEffect, 80);               // Type next char after 80ms.
  } else {
    setTimeout(() => {
      c = 0;                                  // Reset character index.
      p = (p + 1) % phrases.length;           // Next phrase, loop to start.
      typeEffect();
    }, 1300);                                 // Pause before next phrase.
  }
}
window.addEventListener('DOMContentLoaded', typeEffect); // Start animation on page load.


// === BACK TO TOP BUTTON ===

// Reference the back-to-top button element.
const btt = document.getElementById("back-to-top");

// Show the button only when user scrolls down >120px.
window.onscroll = () => {
  btt.style.display = window.scrollY > 120 ? "block" : "none";
};
// Smoothly scroll to the top when button is clicked.
btt.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });


// === FUN FACT ROTATOR ===

// Array of fun facts and tips for display.
const facts = [
  "Did you know? The world's longest flight is over 17 hours long!",
  "Tip: Always carry a photocopy of your passport.",
  "Fun Fact: Frangipani flowers symbolize new beginnings!",
  "Travel Hack: A sarong can double as a blanket, towel, or sun shade."
];
// Pick a random fact on every page load and display it.
document.getElementById('fun-fact').textContent =
  facts[Math.floor(Math.random() * facts.length)];


// === MODAL LIGHTBOX for image viewing ===

// Opens a modal to show a large version of an image and its caption.
function openModal(imgElem) {
  const modal = document.getElementById("photoModal");
  const modalImg = document.getElementById("modalImg");
  const modalCaption = document.getElementById("modalCaption");
  modal.style.display = "flex";
  modalImg.src = imgElem.src;
  // Use next sibling as caption if available, otherwise use alt text.
  modalCaption.innerHTML = imgElem.nextElementSibling
    ? imgElem.nextElementSibling.innerHTML
    : imgElem.alt;
}

// Closes the modal overlay.
function closeModal() {
  document.getElementById("photoModal").style.display = "none";
}

// Also allow closing modal with ESC key.
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});


// === IMAGE FILTER BUTTONS ===

// Add click listeners to each filter button.
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    // Remove 'active' highlight from all buttons.
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active'); // Add highlight to clicked button.
    const filter = this.getAttribute('data-filter');
    // Show/hide photos depending on selected filter.
    document.querySelectorAll('.photo-card').forEach(card => {
      card.style.display = (filter === 'all' || card.getAttribute('data-country') === filter) ? '' : 'none';
    });
  });
});


// === POLAROID CAROUSEL: infinite loop effect ===

// Duplicate the contents of the polaroid track so it loops infinitely.
window.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.polaroid-track');
  if (track) {
    track.innerHTML += track.innerHTML; // Double the items for a continuous scroll illusion.
  }
});
