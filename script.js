const button = document.getElementById('prev');
const img = document.getElementById('myImg');
const body = document.querySelector('body');

button.addEventListener('click', () => {
  img.src = 'download.jpg';
  button.remove();
  body.classList.add('blink');
  setTimeout(() => {
    body.classList.remove('blink');
  }, 1000); // this removes the blink class after 1 second
});