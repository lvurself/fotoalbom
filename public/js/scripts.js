const button = document.querySelector('.buton');
const form = document.querySelector('.form');

button.addEventListener('click', () => {
  form.classList.add('form--no');
});
