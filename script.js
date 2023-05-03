const mobileMenuTrigger = document.getElementById('mobile-menu-trigger')
const mobileMenu = document.getElementById('header-nav')

const toggleMobileMenu = () => {
  mobileMenu.classList.add('open')
}

mobileMenuTrigger.addEventListener('click', toggleMobileMenu)