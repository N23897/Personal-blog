/*
 * custom.js - Main JavaScript for Living In Between blog
 * Author: Nasrin Sadiqi, 2025
 * Student ID: 34898644
 * 
 * Provides interactive features:
 *  - Mood toggle (random pastel background)
 *  - Countdown timer to next trip
 *  - Animated falling flowers (canvas)
 *  - Typing welcome animation
 *  - Random fun fact display
 *  - Back to Top button logic
 * 
 * This file contains original code and adapted open-source snippets,
 * all heavily commented to indicate my modifications and logic.
 */

// ----- MOOD TOGGLE -----
// getRandomPastel() generates a random pastel colour using HSL colour values.
function getRandomPastel() {
  const h = Math.floor(Math.random() * 360);             // Random hue (0–359)
  const s = 70 + Math.random() * 10;                     // Saturation between 70–80%
  const l = 80 + Math.random() * 10;                     // Lightness between 80–90%
  return `hsl(${h},${s}%,${l}%)`;                        // Returns as HSL color string
}

// toggleMood() applies a new random pastel colour as the page background.
function toggleMood() {
  const pastel = getRandomPastel();
  document.body.style.background = pastel;               // Sets body background
  // Optional: update other elements for accent colour here
}

// Attach mood toggle to button click event.
document.getElementById('toggle-mood-btn').onclick = toggleMood;


// ----- COUNTDOWN TIMER -----
// pad(n) ensures numbers < 10 are padded with a leading zero (e.g., '09')
function pad(n) { return n < 10 ? '0' + n : n; }

// Set the countdown target date/time (update as needed)
const endDate = new Date("2025-09-20T00:00:00");

// updateUnit(id, value) updates each flip-clock unit (days, hours, etc.) with animation.
function updateUnit(id, value) {
  const el = document.getElementById(id);
  if (el.textContent !== value) {
    el.classList.remove('flip');         // Remove animation
    void el.offsetWidth;                 // Force reflow to restart animation
    el.textContent = value;              // Update display
    el.classList.add('flip');            // Add flip animation
  }
}

// updateCountdown() calculates the time left and updates the clock every second.
function updateCountdown() {
  const now = new Date();
  const diff = endDate - now;      // Milliseconds left
  if (diff > 0) {
    // Calculate days, hours, minutes, seconds
    const days = pad(Math.floor(diff / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((diff / (1000 * 60 * 60)) % 24));
    const minutes = pad(Math.floor((diff / (1000 * 60)) % 60));
    const seconds = pad(Math.floor((diff / 1000) % 60));
    // Update each unit with animation
    updateUnit("days", days);
    updateUnit("hours", hours);
    updateUnit("minutes", minutes);
    updateUnit("seconds", seconds);
  } else {
    // If the countdown is finished, show the message
    document.getElementById("countdown").textContent = "🎉 The trip has started!";
  }
}
setInterval(updateCountdown, 1000);  // Run every second
updateCountdown();                   // Initial update

// ----- FLOWER SHOWER CANVAS ANIMATION -----
// Loads the frangipani image for the animation
const flowerImg = new Image();
flowerImg.src = 'images/frangipani.png'; // Path to your PNG

// Find the canvas element (if present)
const canvas = document.getElementById('flower-canvas');
if (canvas) {
  // resizeCanvas() resizes the canvas to the window size
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const ctx = canvas.getContext('2d');
  const petalCount = 30;        // Number of petals
  const petals = [];
  // Create an array of petal objects with random properties
  for (let i = 0; i < petalCount; i++) {
    petals.push({
      x: Math.random() * canvas.width,      // X position
      y: Math.random() * canvas.height,     // Y position
      size: Math.random() * 17 + 18,        // Size: 18–35px
      speedY: Math.random() * 0.8 + 0.4,    // Fall Speed
      speedX: Math.random() * 0.5 - 0.25,   // Horizontal drift
      opacity: Math.random() * 0.3 + 0.35   // Petal transparency
    });
  }

  // drawPetals() animates and draws all petals, loops with requestAnimationFrame
  function drawPetals() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous frame
    for (let p of petals) {
      ctx.globalAlpha = p.opacity;
      ctx.drawImage(flowerImg, p.x, p.y, p.size, p.size);
      ctx.globalAlpha = 1.0;
      // Update petal position
      p.y += p.speedY;
      p.x += p.speedX;
      // Loop petals to the top if they fall off the screen
      if (p.y > canvas.height) {
        p.y = -p.size;
        p.x = Math.random() * canvas.width;
      }
      // Wrap petals horizontally
      if (p.x < -p.size) p.x = canvas.width;
      if (p.x > canvas.width) p.x = -p.size;
    }
    requestAnimationFrame(drawPetals); // Continue animating
  }

  // Start animation when the image loads
  flowerImg.onload = drawPetals;
}


// ----- TYPING ANIMATION FOR WELCOME -----
// Array of phrases to display
const phrases = [
  "Welcome to my travel & life blog.",
  "Discover recipes, stories, and adventures.",
  "Let's explore together!"
];
let p = 0, c = 0; // p = phrase index, c = char index

// typeEffect() types out and cycles through each phrase in the array
function typeEffect() { 
  const el = document.getElementById("typed-text");
  if (!el) return;
  el.textContent = phrases[p].slice(0, c++); // Show substring up to c
  if (c <= phrases[p].length) {
    setTimeout(typeEffect, 80); // Type next char
  } else {
    setTimeout(() => {
      c = 0;
      p = (p + 1) % phrases.length; // Next phrase
      typeEffect();
    }, 1300); // Wait before switching phrase
  }
}
window.addEventListener('DOMContentLoaded', typeEffect);


// ----- BACK TO TOP BUTTON -----
// Shows/hides the button based on scroll position
const btt = document.getElementById("back-to-top");
window.onscroll = function() {
  btt.style.display = window.scrollY > 120 ? "block" : "none";
};
// Scrolls smoothly to the top when clicked
btt.onclick = () => window.scrollTo({top:0,behavior:"smooth"});


// ----- RANDOM FUN FACT DISPLAY -----
// Array of fun facts/travel tips
const facts = [
  "Did you know? The world's longest flight is over 17 hours long!",
  "Tip: Always carry a photocopy of your passport.",
  "Fun Fact: Frangipani flowers symbolize new beginnings!",
  "Travel Hack: A sarong can double as a blanket, towel, or sun shade."
];
// Randomly choose a fact on each page and load
document.getElementById('fun-fact').textContent =
  facts[Math.floor(Math.random() * facts.length)];


// ----- MODAL/LIGHTBOX LOGIC FOR PHOTOS -----
// openModal(imgElem): Opens the modal and displays the selected image and its caption
function openModal(imgElem) {
  var modal = document.getElementById("photoModal");
  var modalImg = document.getElementById("modalImg");
  var modalCaption = document.getElementById("modalCaption");
  modal.style.display = "flex";
  modalImg.src = imgElem.src;
  modalCaption.innerHTML = imgElem.nextElementSibling ? imgElem.nextElementSibling.innerHTML : imgElem.alt;
}
// closeModal(): Closes the modal overlay
function closeModal() {
  document.getElementById("photoModal").style.display = "none";
}
// Optionally allow closing the modal with the ESC key
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") closeModal();
});


// ----- PHOTO FILTER BUTTON LOGIC -----
// Allows the user to filter photos by country or category
document.querySelectorAll('.filter-btn').forEach(function(btn){
  btn.addEventListener('click', function(){
    // Remove 'active' from all filter buttons
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    // Highlight the clicked button
    this.classList.add('active');
    var filter = this.getAttribute('data-filter');
    // Show/hide photo cards depending on the selected filter
    document.querySelectorAll('.photo-card').forEach(function(card){
      if (filter === 'all' || card.getAttribute('data-country') === filter) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
