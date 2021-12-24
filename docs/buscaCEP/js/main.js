import buscaCEP from "./buscaFetch.js";

const busca = new buscaCEP ('a', '#buscador', '#logradouro', '#complemento', '#bairro', '#localidade', '#uf');

busca.init();
