//Hamburger menu toggle for smaller screens
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.navbar .mobile-menu .mobile-menu-toggle');
  const mobileMenu = document.querySelector('.navbar .mobile-menu .mobile-menu-items');
  toggleButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  })
})

//change navbar background color on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  window.scrollY > 0 ? navbar.classList.add('navbar-scroll') : navbar.classList.remove('navbar-scroll');
})

