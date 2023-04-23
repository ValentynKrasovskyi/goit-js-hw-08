import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

// Отримуємо елементи форми
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');


// Налаштовуємо слухачів подій
form.addEventListener('input', throttle(saveFormState, 500));
window.addEventListener('load', restoreFormState);
form.addEventListener('submit', handleSubmit);


// Функція, яка зберігає значення полів у локальне сховище
const saveFormState = () => {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

// Функція, яка заповнює поля форми зі значеннями з локального сховища
const restoreFormState = () => {
  const state = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (state) {
    emailInput.value = state.email;
    messageInput.value = state.message;
  }
};

// Функція, яка очищує сховище та поля форми та виводить у консоль об'єкт з полями email та message
const handleSubmit = event => {
  event.preventDefault();
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.removeItem(STORAGE_KEY);
  emailInput.value = '';
  messageInput.value = '';
  console.log(state);
};