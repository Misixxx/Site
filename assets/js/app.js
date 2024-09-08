  // Вгадайка
  const secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 10;
let roundNumber = 0;
const guessedNumbers = [];

function guessNumber() {
    const guessInput = document.getElementById("guessInput");
    const guessButton = document.querySelector("button");
    const resultMessage = document.getElementById("result");
    const roundNumberElement = document.getElementById("roundNumber");
    const imageElement = document.getElementById("resultImage");

    if (guessButton.disabled) {
        resultMessage.textContent = "Гра закінчена.";
        return;
    }

    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        resultMessage.textContent = "Введіть корректне число від 1 до 100.";
        return;
    }

    if (guessedNumbers.includes(userGuess)) {
        resultMessage.textContent = "Ви вже вводили це число. Спробуйте інше.";
        return;
    }

    guessedNumbers.push(userGuess);
    attempts--;

    if (userGuess === secretNumber) {
        resultMessage.textContent = `Вітаю! Ви вгадали число ${secretNumber}!`;
        disableInputAndButton();
        imageElement.src = "./assets/images/right.png";
    } else {
        const hint = userGuess < secretNumber ? "більше" : "менше";
        resultMessage.textContent = `Невірно. Загаданне число ${hint} вашого.`;
        imageElement.src = "./assets/images/wrong.png";

        if (attempts === 0) {
            resultMessage.textContent = `Нажаль, ви програли. Загаданне число було: ${secretNumber}.`;
            disableInputAndButton();
            imageElement.src = "./assets/images/wrong.png";
        }
    }
    roundNumber++;
    roundNumberElement.textContent = roundNumber;
    guessInput.value = "";
    
    if (roundNumber > 10) {
        disableInputAndButton();
    }
}

function disableInputAndButton() {
    const guessInput = document.getElementById("guessInput");
    const guessButton = document.querySelector("button");

    guessInput.disabled = true;
    guessButton.disabled = true;
}

document.getElementById("totalRounds").textContent = 10;


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

