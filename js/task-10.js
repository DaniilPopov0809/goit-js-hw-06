function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonCreateEl = document.querySelector('[data-create]');
const buttonDestroyEl = document.querySelector('[data-destroy]');
const inputAmountEl = document.querySelector('#controls input');
const divBoxesEl = document.querySelector('#boxes');
let amountDiv;

function createBoxes(amount) {
  destroyBoxes();

  const arrDiv = [];
  let divHeigth = 30;
  let divWidth = 30;

  for (let i = 1; i <= amount; i++) {
    const colorDiv = getRandomHexColor();
    const div = `<div style='height: ${divHeigth}px; width: ${divWidth}px;
background-color: ${colorDiv}'></div>`;

    arrDiv.push(div);
    divHeigth += 10;
    divWidth += 10;
  }

  divBoxesEl.insertAdjacentHTML('afterbegin', arrDiv.join(' '));
}

function destroyBoxes() {
  divBoxesEl.innerHTML = '';
}

buttonCreateEl.addEventListener('click', () => createBoxes(amountDiv));
buttonDestroyEl.addEventListener('click', destroyBoxes);
inputAmountEl.addEventListener('input', (event) => amountDiv = event.currentTarget.value);



