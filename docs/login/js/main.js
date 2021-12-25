const usuario = document.querySelector('#user');
const senha = document.querySelector('#password');
const cadastrar = document.querySelector('a');
const senha2 = document.querySelector('#password2');
const msgSucess = document.querySelector('.msgSucess');
const msgError = document.querySelector('.msgError');
const inputs = document.querySelectorAll('input');
const label0 = document.querySelector('#labelUser');
const label1 = document.querySelector('#labelSenha0');
const label2 = document.querySelector('#labelSenha');

cadastrar.addEventListener('click', verificarValores);


function verificarValores() {
    if(usuario.value.length >= 8 && senha.value.length >= 10 && senha2.value.length >= 10) {
        if (senha.value == senha2.value) {
            msgSucess.setAttribute('style', 'display:block;');
            msgError.setAttribute('style', 'display:none;');
            inputs.forEach((item) => {
                item.setAttribute('style', 'border: 3px solid green;')
            })
            criarCadastro();
            setTimeout( () => {
                window.location.href = 'login.html';
            },3000);
        } else {
            label2.setAttribute('style', 'color:red;');
            label2.innerHTML = 'As senhas não conferem';
        }
        
    } else {
        msgError.setAttribute('style', 'display:block;');
        msgSucess.setAttribute('style', 'display:none;');
        inputs.forEach((item) => {
            item.setAttribute('style', 'border: 3px solid red;')
        })
    }
}

usuario.addEventListener('keyup', checkUser );
senha.addEventListener('keyup', checkSenha );
senha2.addEventListener('keyup', checkSenha2);

function limpar() {
    msgError.setAttribute('style', 'display:none;');
        msgSucess.setAttribute('style', 'display:none;');
        inputs.forEach((item) => {
            item.setAttribute('style', 'border:none;')
        })
}

function checkUser() {
    limpar();
    if (usuario.value.length >= 8) {
        usuario.setAttribute('style', 'border: 3px solid green;');
    } else {
        usuario.setAttribute('style', 'border: 3px solid red;');
    }
}

function checkSenha() {
    limpar();
    if (senha.value.length >= 10) {
        senha.setAttribute('style', 'border: 3px solid green;');
    } else {
        senha.setAttribute('style', 'border: 3px solid red;');
    }
}

function checkSenha2() {
    limpar();
    if (senha2.value === senha.value) {
        senha2.setAttribute('style', 'border: 3px solid green;');
    } else {
        senha2.setAttribute('style', 'border: 3px solid red;');
    }
}

var cadastro = JSON.parse(localStorage.getItem('cadastro'));

function criarCadastro() {
    if (cadastro == null) {
        cadastro = [];
        cadastro.push({
            usuario: usuario.value,
            senha: senha.value
        });
        localStorage.setItem('cadastro', JSON.stringify(cadastro));
    } else {
        cadastro.push({
            usuario: usuario.value,
            senha: senha.value
        });
    }
}

