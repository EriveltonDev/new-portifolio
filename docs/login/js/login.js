const usuario = document.querySelector('#user');
const senha = document.querySelector('#senha');
const cadastrar = document.querySelector('#cadastrar');
const olho = document.querySelector('#olho');
const msgError = document.querySelector('h1');
const container = document.querySelector('.container');
const span = document.querySelector('span');

cadastrar.addEventListener('click', validar);
olho.addEventListener('click' , mostrarSenha);

function validar() {
    let formularios = JSON.parse(localStorage.getItem('formularios'));
    formularios.forEach(item => {
        if (item.usuario == usuario.value && item.senha == senha.value) {
            container.setAttribute('style', 'display:none;');
            span.setAttribute('style', 'display:block;');
            setTimeout(() => {
                window.location.href = "https://eriveltondev.github.io/portifolio-principal/"
            }, 3000)
        } else {
            msgError.setAttribute('style', 'visibility:visible;')
        }
    });
}


function mostrarSenha() {
    if (senha.type == 'password') {
        senha.type = 'text';
    } else {
        senha.type = 'password'
    }
}
