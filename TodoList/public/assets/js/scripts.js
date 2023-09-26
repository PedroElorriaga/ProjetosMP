const showMessage = 'show-message';
const emailLabel = document.querySelector('.txt_usuario');
const passwordLabel = document.querySelector('.txt_senha');
const form = document.querySelector('.form');

const verificaLogin = () => {
    limparErros(form);
    verificaCampoVazio(emailLabel, passwordLabel);
}

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
            return mensagemDeErro(x, `O campo ${x.name} não pode estar vázio`)
        }
        return true
    });
}
