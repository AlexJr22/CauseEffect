import { pessoas } from './Pessoas.js';

let Pessoas = document.getElementById('Pessoas');

pessoas.forEach(pessoa => {

  let cardPessoa = document.createElement("div");

  cardPessoa.innerHTML = `<div onclick="active(this)" class="Pessoa card">${pessoa.nome} ${pessoa.sobrenome}</div>`;

  Pessoas.appendChild(cardPessoa);

});
