const iniciar = document.querySelector('.iniciar');
const dias = document.querySelector('.dias h1');
const horas = document.querySelector('.horas h1');
const minutos = document.querySelector('.minutos h1');
const segundos = document.querySelector('.segundos h1');
const formulario = document.querySelector('#formulario');
const main = document.querySelector('#main');
const requisicao = document.querySelector('#requisicao');
const reiniciar = document.querySelector('#reiniciar');
const header = document.querySelector('header');


iniciar.addEventListener('click', pegarDados);

function pegarDados() {
    trocarTela()
    const data = formulario.value;
    const dia = data.slice(8,10);
    const mes = data.slice(5,7);
    const ano = data.slice(0,4);
    setInterval(() => {
        calcularDias(dia, mes, ano);
    }, 1000)
}

reiniciar.addEventListener('click', retornar);

function retornar() {
    trocarTela()
    location.reload();
}

function trocarTela() {
    header.classList.toggle('ativo');
    main.classList.toggle('ativo');
    requisicao.classList.toggle('ativo');
}

function calcularDias(dia, mes, ano) {
    switch (mes) {
        case '0':
            mes = 'Jan';
            break;
        case '1':
            mes = 'Feb';
            break;
        case '2':
            mes = 'Mar';
            break;
        case '3':
            mes = 'Apr';
            break;
        case '4':
            mes = 'May';
            break;
        case '5':
            mes = 'Jun';
            break;
        case '6':
            mes = 'Jul';
            break;
        case '7':
            mes = 'Aug';
            break;
        case '8':
            mes = 'Sep';
            break;
        case '9':
            mes = 'Oct';
            break;
        case '10':
            mes = 'Nov';
            break;
        case '11':
            mes = 'Dec';
            break;
    }
    let dataFuturo = new Date(mes + ' ' + dia + ' ' + ano);
    const data = new Date();
    console.log(dataFuturo)

    const diasAgora = transformarDias(data.getTime());
    const diasFuturo = transformarDias(dataFuturo.getTime());
    const faltaDia = Math.floor(diasFuturo - diasAgora);
    console.log(faltaDia);
    dias.innerHTML = faltaDia;

    const horasAgora = transformarHoras(data.getTime());
    const horasFuturo = transformarHoras(dataFuturo.getTime());
    const faltaHoras = Math.floor(horasFuturo - horasAgora);
    console.log(faltaHoras);
    horas.innerHTML = faltaHoras % 24;

    const minutosAgora = transformarMinutos(data.getTime());
    const minutosFuturo = transformarMinutos(dataFuturo.getTime());
    const faltaMinutos = Math.floor(minutosFuturo - minutosAgora);
    console.log(faltaMinutos);
    minutos.innerHTML = faltaMinutos % 60;
    
    const segundosAgora = transformarSegundos(data.getTime());
    const segundosFuturo = transformarSegundos(dataFuturo.getTime());
    const faltaSegundos = Math.floor(segundosFuturo - segundosAgora);
    console.log(faltaSegundos);
    segundos.innerHTML = faltaSegundos % 60;

}



function transformarDias(tempo) {
    return tempo / (24 * 60 * 60 * 1000);
}
function transformarHoras(tempo) {
    return tempo / (60 * 60 * 1000);
}
function transformarMinutos(tempo) {
    return tempo / (60 * 1000);
}
function transformarSegundos(tempo) {
    return tempo / 1000;
}


