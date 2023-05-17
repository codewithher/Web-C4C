const mobileMenuTrigger = document.getElementById("mobile-menu-trigger");
const mobileMenu = document.getElementById("header-nav");

const toggleMobileMenu = () => {
  mobileMenu.classList.toggle("open");
};

mobileMenuTrigger.addEventListener("click", toggleMobileMenu);
