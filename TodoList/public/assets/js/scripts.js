const showMessage = 'show-message';
const emailLabel = document.querySelector('.txt_usuario');
const passwordLabel = document.querySelector('.txt_senha');
const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    limparErros(form);

    console.log(verificaCampoVazio(emailLabel, passwordLabel));

    if (!verificaCampoVazio(emailLabel, passwordLabel)) {
        form.submit();
    }
})

const limparErros = () => {
    form.querySelectorAll('.' + showMessage).forEach((error) => {
        error.classList.remove(showMessage);
    });
}

const mensagemDeErro = (input, msg) => {
    const formField = input.parentElement;
    const errorMessages = formField.querySelector('.error-message')
    errorMessages.innerHTML = msg;
    errorMessages.classList.add(showMessage);
}

const verificaCampoVazio = (...inputs) => {
    const arrayDeInputs = [...inputs];
    arrayDeInputs.map((x) => {
        if (!x.value) {
            mensagemDeErro(x, `O campo ${x.name} não pode estar vázio`);
            return false;
        }
    });
    return true;
}
