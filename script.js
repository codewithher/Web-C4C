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

/* other method
const toggleMenu = function(){
  let mobileMenu = document.getElementById("header-nav");
  let mobileUL = document.getElementById("header-ul");
  let mobileLink = document.querySelectorAll(".header-menu-link");

  mobileMenu.classList.toggle("open-nav");
  mobileUL.classList.toggle("open-ul");

  for(let i = 0; i < mobileLink.length; i++){
      mobileLink[i].classList.toggle("open-link");
  }
}

mobileMenuTrigger.addEventListener("click", toggleMobileMenu);

*/
