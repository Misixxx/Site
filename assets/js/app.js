// Темна тема
document.getElementById('themeToggle').addEventListener('click', function() {
  let body = document.body;
  let navbar = document.querySelector('.navbar');
  let header = document.querySelector('header');
  let navLinks = document.querySelectorAll('.nav-link');
  let navbarBrandIcon = document.querySelector('.navbar-brand i');
  let themeToggle = document.getElementById('themeToggle');
  let cardBodies = document.querySelectorAll('.card-body');
  let imgTheme = document.querySelectorAll('.img-theme');
  let themeIcon = document.getElementById('themeIcon');
  body.classList.toggle('dark-theme');
  navbar.classList.toggle('dark-theme-navbar');
  header.classList.toggle('dark-theme-header');
  navLinks.forEach(navLink => navLink.classList.toggle('dark-theme-text'));
  navbarBrandIcon.classList.toggle('dark-theme-icon');
  themeToggle.classList.toggle('dark-theme-button');
  imgTheme.forEach(img => img.classList.toggle('img-theme-dark'));
  cardBodies.forEach(cardBody => cardBody.classList.toggle('card-body-theme'));
  if (body.classList.contains('dark-theme')) {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
  } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
  }
});
// Колір фона
document.getElementById('colorPicker').addEventListener('input', function() {
  document.body.style.backgroundColor = this.value;
});

