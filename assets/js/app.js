// Функция для применения темы
function applyTheme(theme) {
    let body = document.body;
    let navbar = document.querySelector('.navbar');
    let header = document.querySelector('header');
    let navLinks = document.querySelectorAll('.nav-link');
    let navbarBrandIcon = document.querySelector('.navbar-brand i');
    let searchButton = document.getElementById('searchButton');
    let cardBodies = document.querySelectorAll('.card-body');
    let themeIcon = document.getElementById('themeIcon');

    if (!themeIcon) {
        console.error('Theme icon not found');
        return;
    }

    if (theme === 'dark') {
        body.classList.add('dark-theme');
        if (navbar) navbar.classList.add('dark-theme-navbar');
        if (header) header.classList.add('dark-theme-header');
        navLinks.forEach(navLink => navLink.classList.add('dark-theme-text'));
        if (navbarBrandIcon) navbarBrandIcon.classList.add('dark-theme-icon');
        if (searchButton) searchButton.classList.add('dark-theme-button');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        body.classList.remove('dark-theme');
        if (navbar) navbar.classList.remove('dark-theme-navbar');
        if (header) header.classList.remove('dark-theme-header');
        navLinks.forEach(navLink => navLink.classList.remove('dark-theme-text'));
        if (navbarBrandIcon) navbarBrandIcon.classList.remove('dark-theme-icon');
        if (searchButton) searchButton.classList.remove('dark-theme-button');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }

    // Обновление стилей карточек
    cardBodies.forEach(cardBody => cardBody.classList.toggle('card-body-theme', theme === 'dark'));
}

// Проверка темы при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    }
    truncateText('.card-body p', 100); // Ограничиваем текст 100 символами
});

// Сохранение и переключение темы
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
        applyTheme(currentTheme);
        localStorage.setItem('theme', currentTheme);
    });
}

// Переменная для отслеживания состояния поиска
let searchVisible = false;

// Получаем элементы
const searchToggle = document.getElementById('searchToggle');
const searchInput = document.getElementById('searchInput');

if (searchToggle && searchInput) {
    // Слушаем нажатие на кнопку поиска
    searchToggle.addEventListener('click', function() {
        if (!searchVisible) {
            searchInput.style.display = 'block';  // Показываем поле
            searchInput.focus();  // Ставим фокус на поле
            searchToggle.classList.add('active');  // Добавляем класс активности к кнопке
        } else {
            searchInput.style.display = 'none';  // Скрываем поле
            searchToggle.classList.remove('active');  // Убираем класс активности с кнопки
        }
        searchVisible = !searchVisible;  // Меняем состояние
    });
}

// Фильтрация блюд при вводе в поле поиска
if (searchInput) {
    searchInput.addEventListener('input', function() {
        let filter = this.value.toLowerCase().trim(); // Получаем значение поиска и удаляем лишние пробелы
        let cards = document.querySelectorAll('.card'); // Получаем все карточки блюд
        let foundAny = false; // Переменная для отслеживания наличия совпадений

        cards.forEach(function(card) {
            let title = card.querySelector('.card-title').textContent.toLowerCase(); // Получаем название блюда
            const isVisible = title.includes(filter);
            card.style.display = isVisible ? '' : 'none'; // Показываем или скрываем карточку
            foundAny = foundAny || isVisible; // Устанавливаем флаг, что нашли хотя бы одну карточку
        });

        // Если ничего не найдено, отображаем сообщение
        const cardContainer = document.querySelector('.row.g-3');
        let messageElement = document.getElementById('no-results'); // Получаем элемент для сообщения

        if (!messageElement) {
            // Создаем элемент для сообщения, если его нет
            messageElement = document.createElement('p');
            messageElement.id = 'no-results'; // Устанавливаем id для этого элемента
            messageElement.textContent = 'Нічого не знайдено.'; // Текст сообщения
            messageElement.style.display = 'none'; // Скрываем по умолчанию
            cardContainer.appendChild(messageElement); // Добавляем элемент в контейнер карточек
        }

        // Показываем или скрываем сообщение в зависимости от результатов поиска
        messageElement.style.display = foundAny ? 'none' : 'block';
    });
}

// Функция для обрезки текста
function truncateText(selector, maxLength) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        let text = element.textContent;
        if (text.length > maxLength) {
            element.textContent = text.substring(0, maxLength) + '...'; // Обрезаем текст
        }
    });
}










/* ВНИЗУ КОД ЕЩЕ НЕ ПОЛЬНОСТЬЮ СТАБИЛЕН ДЛЯ КОРРЕКТНОЙ РАБОТЫ КНОПОК ЛАЙКА И ТД */
/* ВНИЗУ КОД ЕЩЕ НЕ ПОЛЬНОСТЬЮ СТАБИЛЕН ДЛЯ КОРРЕКТНОЙ РАБОТЫ КНОПОК ЛАЙКА И ТД */
/* ВНИЗУ КОД ЕЩЕ НЕ ПОЛЬНОСТЬЮ СТАБИЛЕН ДЛЯ КОРРЕКТНОЙ РАБОТЫ КНОПОК ЛАЙКА И ТД */


// Получаем все кнопки лайка и "Дивитись рецепт"
const likeButtons = document.querySelectorAll('.btn.bg-secondary-subtle');
const headerLikeCount = document.getElementById('headerLikeCount');

// Получаем все кнопки "Дивитись рецепт"
const recipeButtons = document.querySelectorAll('.btn.bg-dark');

recipeButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Убираем класс активности у всех кнопок
        recipeButtons.forEach(btn => {
            btn.classList.remove('active'); // Убираем активный класс
        });
        
        // Добавляем класс активности к текущей кнопке
        button.classList.add('active');
    });
});








// Переменная для отслеживания состояния отображения только лайкнутых карточек
let showingLiked = false;

// Функция для загрузки состояния лайков из localStorage
function loadLikeStates() {
    const likeStates = JSON.parse(localStorage.getItem('likedRecipes')) || {};
    likeButtons.forEach((button) => {
        const card = button.closest('.card');
        const cardTitle = card.querySelector('.card-title').textContent;

        // Проверяем, есть ли лайк для этой карточки
        if (likeStates[cardTitle]) {
            button.classList.add('red'); // Если лайкнут, добавляем класс "red"
        }
    });
    updateHeaderLikeCount(likeStates);
    
    // Проверяем состояние кнопки "Избранное"
    showingLiked = JSON.parse(localStorage.getItem('showingLiked')) || false;
    const showLikedButton = document.getElementById('showLiked');
    if (showingLiked) {
        showLikedButton.classList.add('active'); // Если кнопка активна, добавляем класс
    }
}

// Обновляем счетчик лайков в заголовке
function updateHeaderLikeCount(likeStates) {
    const likeCount = Object.keys(likeStates).length; // Получаем количество лайков
    headerLikeCount.textContent = `${likeCount}`; // Обновляем текст в заголовке

    // Меняем цвет сердечка в заголовке в зависимости от состояния
    const showLikedButton = document.getElementById('showLiked');
    if (likeCount > 0) {
        showLikedButton.classList.add('active'); // Добавляем класс "active", если есть лайки
    } else {
        showLikedButton.classList.remove('active'); // Убираем класс "active", если нет лайков
    }
}

// Обработчик события для кнопок лайка
likeButtons.forEach((button) => {
    button.addEventListener('click', function() {
        const card = button.closest('.card');
        const cardTitle = card.querySelector('.card-title').textContent;
        const likeStates = JSON.parse(localStorage.getItem('likedRecipes')) || {};

        // Проверяем, если кнопка уже лайкнута
        if (button.classList.contains('red')) {
            button.classList.remove('red'); // Убираем класс "red"
            delete likeStates[cardTitle]; // Удаляем запись из объекта состояния лайков
            
            // Если кнопка активна, скрываем карточку сразу
            if (showingLiked) {
                card.style.display = 'none'; // Скрываем карточку
            }
        } else {
            button.classList.add('red'); // Добавляем класс "red"
            likeStates[cardTitle] = true; // Сохраняем лайк
        }

        // Обновляем состояние в localStorage
        localStorage.setItem('likedRecipes', JSON.stringify(likeStates));
        updateHeaderLikeCount(likeStates); // Обновляем состояние лайков в заголовке
    });
});

// Функция для отображения только лайкнутых карточек
document.getElementById('showLiked').addEventListener('click', function () {
    let cards = document.querySelectorAll('.card');
    let likedRecipes = JSON.parse(localStorage.getItem('likedRecipes')) || {};

    showingLiked = !showingLiked; // Переключаем состояние отображения

    // Сохраняем состояние кнопки "Избранное" в localStorage
    localStorage.setItem('showingLiked', showingLiked);

    cards.forEach(card => {
        const cardTitle = card.querySelector('.card-title').textContent;

        // Если показываем лайкнутые карточки
        if (showingLiked) {
            if (likedRecipes[cardTitle]) {
                card.style.display = ''; // Показываем лайкнутую карточку
            } else {
                card.style.display = 'none'; // Скрываем нелайкнутую карточку
            }
        } else {
            card.style.display = ''; // Показываем все карточки
        }
    });

    // Меняем цвет сердечка в заголовке в зависимости от состояния
    const showLikedButton = document.getElementById('showLiked');
    if (showingLiked) {
        showLikedButton.classList.add('active'); // Добавляем класс "active"
    } else {
        showLikedButton.classList.remove('active'); // Убираем класс "active"
    }
});

// Загружаем состояния при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    loadLikeStates(); // Загружаем состояния лайков
});












