const verificaLogin = () => {
    const emailLabel = document.querySelector('.txt_usuario');
    const passwordLabel = document.querySelector('.txt_senha');

    verificaCampoVazio(emailLabel.value, passwordLabel.value);
}

const mensagemDeErro = (msg) => {
    let msgError = document.querySelector('.error_msg');
    msgError.innerHTML = msg;
    msgError.removeAttribute('hidden');
}

const verificaCampoVazio = (...inputs) => {
    const arrayDeInputs = [...inputs];
    arrayDeInputs.map((x) => {
        console.log(x);
    })
}
