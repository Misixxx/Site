// Функция для применения темы
function applyTheme(theme) {
  let body = document.body;
  let navbar = document.querySelector('.navbar');
  let header = document.querySelector('header');
  let navLinks = document.querySelectorAll('.nav-link');
  let navbarBrandIcon = document.querySelector('.navbar-brand i');
  let themeToggle = document.getElementById('themeToggle');
  let cardBodies = document.querySelectorAll('.card-body');
  let imgTheme = document.querySelectorAll('.img-theme');
  let themeIcon = document.getElementById('themeIcon');

  if (theme === 'dark') {
    body.classList.add('dark-theme');
    navbar.classList.add('dark-theme-navbar');
    header.classList.add('dark-theme-header');
    navLinks.forEach(navLink => navLink.classList.add('dark-theme-text'));
    navbarBrandIcon.classList.add('dark-theme-icon');
    themeToggle.classList.add('dark-theme-button');
    imgTheme.forEach(img => img.classList.add('img-theme-dark'));
    cardBodies.forEach(cardBody => cardBody.classList.add('card-body-theme'));
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  } else {
    body.classList.remove('dark-theme');
    navbar.classList.remove('dark-theme-navbar');
    header.classList.remove('dark-theme-header');
    navLinks.forEach(navLink => navLink.classList.remove('dark-theme-text'));
    navbarBrandIcon.classList.remove('dark-theme-icon');
    themeToggle.classList.remove('dark-theme-button');
    imgTheme.forEach(img => img.classList.remove('img-theme-dark'));
    cardBodies.forEach(cardBody => cardBody.classList.remove('card-body-theme'));
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  }
}

// Проверка темы при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    applyTheme(savedTheme);
  }
});

// Сохранение и переключение темы
document.getElementById('themeToggle').addEventListener('click', function() {
  const currentTheme = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
  applyTheme(currentTheme);
  localStorage.setItem('theme', currentTheme);
});