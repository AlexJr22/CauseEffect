import { pessoas } from './Pessoas.js';
    
let Pessoa = document.getElementById('Pessoas');

pessoas.forEach(pessoa => {

  let cardPessoa = document.createElement("div");
  
  cardPessoa.classList.add('Pessoa', 'card');
  cardPessoa.innerHTML = `${pessoa.nome} ${pessoa.sobrenome}`;

  Pessoa.appendChild(cardPessoa);
});