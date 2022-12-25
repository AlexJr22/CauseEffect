import { pessoas } from './Pessoas.js';
    
let aside = document.getElementById('Pessoas');

pessoas.forEach(pessoa => {

  let cardPessoa = document.createElement("div");
  cardPessoa.innerHTML = `<div class="Pessoa card">${pessoa.nome} ${pessoa.sobrenome}</div>`

  aside.appendChild(cardPessoa);
});