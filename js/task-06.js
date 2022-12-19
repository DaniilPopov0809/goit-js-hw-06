const inputTextEl = document.querySelector('#validation-input');
const inputLength = +inputTextEl.dataset.length;

inputTextEl.addEventListener('blur', onTextInput);

function onTextInput() {
    if (inputTextEl.value.length === inputLength) {
        inputTextEl.classList.add('valid');
        inputTextEl.classList.remove('invalid');
    }
    else {
        inputTextEl.classList.add('invalid');
        inputTextEl.classList.remove('valid');
    }
}
