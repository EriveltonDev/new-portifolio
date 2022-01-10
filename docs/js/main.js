const btnMenu = document.querySelector('.hamburguer');
const nav = document.querySelector('nav');
const botoes = document.querySelectorAll('nav a');

btnMenu.addEventListener('click', abrirMenu);

function abrirMenu() {
    nav.classList.toggle('ativo');
    btnMenu.classList.toggle('ativo');
}

botoes.forEach((item) => {
    item.addEventListener('click', fecharMenu);
})

function fecharMenu() {
    nav.classList.toggle('ativo');
    btnMenu.classList.toggle('ativo');
}

