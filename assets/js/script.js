const mobileMenuTriggerOpen = document.getElementById(
  "mobile-menu-trigger-open"
);
const mobileMenuTriggerClose = document.getElementById(
  "mobile-menu-trigger-close"
);

const mobileMenu = document.getElementById("menu");
const opacityLayer = document.getElementById("opacityLayer");

const toggleMobileMenu = () => {
  mobileMenu.classList.toggle("open");
  opacityLayer.classList.toggle("opacity-on");
};
mobileMenuTriggerOpen.addEventListener("click", toggleMobileMenu);

mobileMenuTriggerClose.addEventListener("click", toggleMobileMenu);