function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeColorEl = document.querySelector('.change-color');
const colorValueEl = document.querySelector('.color');
const bgcBodyEl = document.querySelector('body');

buttonChangeColorEl.addEventListener('click', onColorChange);

function onColorChange() {
  const color = getRandomHexColor();
  colorValueEl.textContent = color;
  bgcBodyEl.style.backgroundColor = color;
}