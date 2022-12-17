
// 5 Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    event.preventDefault();

    if (password === '' || email === '') {
        alert('Заполните все поля!')
    }
    else {
        const formData = {
            email,
            password,
        }
        console.log(formData);
        loginForm.reset();

    }
}