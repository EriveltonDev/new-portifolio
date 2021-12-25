const usuario = document.querySelector('#user');
const senha = document.querySelector('#password');
const botao = document.querySelector('a');
const msgError = document.querySelector('#msgError');
const msgSucess = document.querySelector('#msgSucess');

botao.addEventListener('click', validacao);


let cadastro = JSON.parse(localStorage.getItem('cadastro'));

console.log(cadastro);
function validacao() {
    cadastro.forEach(item => {
        if(item.usuario === usuario.value && item.senha === senha.value) {
        msgSucess.setAttribute('style', 'display:block;');
        msgError.setAttribute('style', 'display:none;');
        setTimeout(() => {
            window.location.href = 'sucesso.html'
        }, 2000);
        } else {
            msgError.setAttribute('style', 'display:block;');
        msgSucess.setAttribute('style', 'display:none;');
        }
    });
}