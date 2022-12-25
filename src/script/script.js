import { pessoas } from './Pessoas.js';
    
let Pessoa = document.getElementById('Pessoas');

pessoas.forEach(pessoa => {

  let cardPessoa = document.createElement("div");
  cardPessoa.innerHTML = `
  <div class="Pessoa card">${pessoa.nome} ${pessoa.sobrenome}</div>
  `;

  Pessoa.appendChild(cardPessoa);
});