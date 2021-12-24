export default class calculadora {
    constructor(botoes, display, botaoLimpar) {
    this.botoes = document.querySelectorAll(botoes);
    this.display = document.querySelector(display);
    this.botaoLimpar = document.querySelector(botaoLimpar);
    }

    puxarTexto(event) {
        if (event.target.innerHTML === 'C' ) {
            this.limpar();
        } else if (event.target.id === "apagar" ) {
            this.backspace();
        } else if (event.target.innerHTML === '=') {
            this.calcular();
        } else {
            this.display.innerHTML += event.target.innerHTML;
        }
    }

    calcular() {
        const resultado = this.display.innerHTML;
        if (resultado) {
            const resultadoParcial = eval(resultado);
            if (resultadoParcial%1 === 0) {
                this.display.innerHTML = resultadoParcial;
            } else {
                this.display.innerHTML = resultadoParcial.toFixed(2);
            }
        } else {
            window.alert('Não há nada para calcular!')
        }
    }

    event() {
        this.botoes.forEach(botao => {
            botao.addEventListener('click', this.puxarTexto);
        });
    }

    bind() {
        this.puxarTexto = this.puxarTexto.bind(this);
        this.calcular = this.calcular.bind(this);
        this.backspace = this.backspace.bind(this);
        this.limpar = this.limpar.bind(this);
    }

    backspace() {
        const conteudo = this.display.innerHTML;
        this.display.innerHTML = conteudo.substring(0, conteudo.length -1);
        
    }
    
    limpar() {
        this.display.innerHTML = "";
    }
    

    init() {
        this.bind();
        this.event();
    }
}