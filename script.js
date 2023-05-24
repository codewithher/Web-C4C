/*
const toggleMobileMenu = () => {
  mobileMenu.classList.toggle("open");
};
*/

let toggleMenu = function(){
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
