const usuario = document.querySelector('#user');
const senha = document.querySelector('#senha');
const cadastrar = document.querySelector('#cadastrar');
const olho = document.querySelector('#olho');
const msgSucess = document.querySelector('h1');
const msgError = document.querySelector('h2');
const container = document.querySelector('.container');
const span = document.querySelector('span');

cadastrar.addEventListener('click', guardarDados);
olho.addEventListener('click' , mostrarSenha);
function guardarDados() {
    let formularios = JSON.parse(localStorage.getItem('formularios'));
    if (formularios == null) {
        formularios = [];
        if (usuario.value != '' && senha.value != '') {
            formularios.push({
                usuario:usuario.value,
                senha:senha.value
            })
            localStorage.setItem('formularios', JSON.stringify(formularios));
            msgError.setAttribute('style', 'visibility:hidden;');
            msgSucess.setAttribute('style', 'visibility: visible');
            redirecionamento()
        } else {
            msgError.setAttribute('style', 'display:block');
            msgSucess.setAttribute('style', 'display:none;')
        }
        
    } else {
        if (usuario.value != '' && senha.value != '') {
            formularios.push({
                usuario:usuario.value,
                senha:senha.value
            })
            localStorage.setItem('formularios', JSON.stringify(formularios));
            msgError.setAttribute('style', 'visibility:hidden;');
            msgSucess.setAttribute('style', 'visibility: visible');
            redirecionamento()
        } else {
            msgError.setAttribute('style', 'display:block');
            msgSucess.setAttribute('style', 'display:none;')
        }
    }
}

function mostrarSenha() {
    if (senha.type == 'password') {
        senha.type = 'text';
    } else {
        senha.type = 'password'
    }
}

function redirecionamento() {
    container.setAttribute('style', 'display:none;');
    span.setAttribute('style', 'display:block;');
    setTimeout(() => {
        window.location.href = "./login.html"
    }, 4000) 
}