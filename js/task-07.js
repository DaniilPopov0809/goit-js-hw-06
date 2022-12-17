const inputSizeControlEl = document.querySelector('#font-size-control');
const outputSizeText = document.querySelector('#text');

inputSizeControlEl.addEventListener('input', onValueInput);

function onValueInput(event) {
    outputSizeText.style.fontSize = `${event.currentTarget.value}px`;
}

