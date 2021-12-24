export default class buscaCEP {
    constructor(botao, buscador, logradouro, complemento, bairro, localidade, uf) {
        this.botao = document.querySelector(botao);
        this.buscador = document.querySelector(buscador);
        this.logradouro = document.querySelector(logradouro);
        this.complemento = document.querySelector(complemento);
        this.bairro = document.querySelector(bairro);
        this.localidade = document.querySelector(localidade);
        this.uf = document.querySelector(uf);
        this.erro1 = document.querySelector('#erro1');
        this.erro2 = document.querySelector('#erro2');
        this.log = document.querySelector('#log');
        this.com = document.querySelector('#com');
        this.bai = document.querySelector('#bai');
        this.loc = document.querySelector('#loc');
        this.fu = document.querySelector('#fu');

    }

    atualizarCEP() {
        const atualizado = this.buscador.value.replace(/(\d{5})(\d{3})/g, '$1-$2');
        this.buscador.value = atualizado;
    }

    clear() {
        this.buscador.value = '';
        this.logradouro.value = '';
        this.complemento.value = '';
        this.bairro.value = '';
        this.localidade.value = '';
        this.uf.value = '';
    }


    eventos() {
        this.buscador.addEventListener('keyup', this.atualizarCEP);
        this.buscador.addEventListener('keyup', (event) => {
            if (event.keyCode == 13) {
                    this.puxarCEP(this.buscador.value);
                if (this.buscador.value.length === 9) {
                    this.buscador.classList.remove('ativo');
                    this.erro2.classList.remove('ativo');
                    this.erro1.classList.remove('ativo');
                    this.puxarCEP(this.buscador.value)
                } else {
                    this.buscador.classList.add('ativo');
                    this.erro2.classList.add('ativo');
                    this.clear();
                }
            }
        });

        this.botao.addEventListener('click', () => {
            if (this.buscador.value.length === 9) {
                this.buscador.classList.remove('ativo');
                this.erro2.classList.remove('ativo');
                this.erro1.classList.remove('ativo');
                this.puxarCEP(this.buscador.value)
            } else {
                this.buscador.classList.add('ativo');
                this.erro2.classList.add('ativo');
                this.puxarCEP();
                this.clear();
            }
        });
    }

    limpar(body) {
        if(body.logradouro === '') {
            this.logradouro.setAttribute('style', 'display:none;')
            this.log.setAttribute('style', 'display:none;')
        }
        if(body.complemento === '') {
            this.complemento.setAttribute('style', 'display:none;')
            this.com.setAttribute('style', 'display:none;')
        }
        if(body.bairro === '') {
            this.bairro.setAttribute('style', 'display:none;')
            this.bai.setAttribute('style', 'display:none;')
        }
        if(body.localidade === '') {
            this.localidade.setAttribute('style', 'display:none;')
            this.loc.setAttribute('style', 'display:none;')
        }
        if(body.uf === '') {
            this.uf.setAttribute('style', 'display:none;')
            this.fu.setAttribute('style', 'display:none;')
        }
    }

    exibir(body) {
        if(body.logradouro != '') {
            this.logradouro.setAttribute('style', 'display:block;')
            this.log.setAttribute('style', 'display:block;')
        }
        if(body.complemento != '') {
            this.complemento.setAttribute('style', 'display:block;')
            this.com.setAttribute('style', 'display:block;')
        }
        if(body.bairro != '') {
            this.bairro.setAttribute('style', 'display:block;')
            this.bai.setAttribute('style', 'display:block;')
        }
        if(body.localidade != '') {
            this.localidade.setAttribute('style', 'display:block;')
            this.loc.setAttribute('style', 'display:block;')
        }
        if(body.uf != '') {
            this.uf.setAttribute('style', 'display:block;')
            this.fu.setAttribute('style', 'display:block;')
        }
    }

    puxarCEP(numCEP) {
        const cep = fetch('https://viacep.com.br/ws/' + numCEP + '/json/');
    
        cep.then(r => r.json())
        .then(body => {
            if (body.logradouro != undefined) {
                this.logradouro.value = body.logradouro;
                this.complemento.value = body.complemento;
                this.bairro.value = body.bairro;
                this.localidade.value = body.localidade;
                this.uf.value = body.uf;
                this.limpar(body)
                this.exibir(body);
            } else {
                this.erro1.classList.add('ativo');
                this.buscador.classList.add('ativo');
                this.limpar(body)
                this.clear();
            }
        });
    }

    bind() {
        this.atualizarCEP = this.atualizarCEP.bind(this);
        this.exibir = this.exibir.bind(this);
        this.limpar = this.limpar.bind(this);
    }

    init() {
        this.bind();
        this.eventos();
    }
}