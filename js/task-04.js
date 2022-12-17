let counterValue = 0;

const actions = document.querySelectorAll('#counter button');
const counterValueEl = document.querySelector('#value');
const buttonDecrement = actions[0];
const buttonIncrement = actions[1];

buttonDecrement.addEventListener('click', onCountDecrement);
buttonIncrement.addEventListener('click', onCountIncrement);

function onCountDecrement() {
    counterValue -= 1;
    counterValueEl.textContent = counterValue; 
}

function onCountIncrement() {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
}


