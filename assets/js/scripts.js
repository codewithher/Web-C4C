/**
 * This script adds event listeners to the buttons
 */

// Grabs Navigation Buttons (three horizontal bars)
const mobileMenuTriggerOpen = document.getElementById(
  "mobile-menu-trigger-open"
);
const mobileMenuTriggerClose = document.getElementById(
  "mobile-menu-trigger-close"
);

// Grabs Navigation Menu Bar
const mobileMenu = document.getElementById("menu");
const opacityLayer = document.getElementById("opacityLayer");

const toggleMobileMenu = () => {
  mobileMenu.classList.toggle("open");
  opacityLayer.classList.toggle("opacity-on");
};

// Listens for "click" event before making the menu bar visible
mobileMenuTriggerOpen.addEventListener("click", toggleMobileMenu);
mobileMenuTriggerClose.addEventListener("click", toggleMobileMenu);