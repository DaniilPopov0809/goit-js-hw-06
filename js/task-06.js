const inputTextEl = document.querySelector('#validation-input');
const inputLength = +inputTextEl.dataset.length;

inputTextEl.addEventListener('blur', onTextInput);

function onTextInput(event) {
    (event.currentTarget.value.length === inputLength) ?
        inputTextEl.classList.add('valid') : inputTextEl.classList.add('invalid');
    }
    