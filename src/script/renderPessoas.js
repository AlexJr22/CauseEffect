import { pessoas } from './Pessoas.js';

const renderPessoas = {
  
  Pessoas: document.getElementById('Pessoas'),
  
  renderBnt: () => {

    pessoas.forEach(pessoa => {
      
      let cardPessoa = document.createElement("div");
  
      cardPessoa.classList.add('Pessoa', 'card');
      cardPessoa.innerHTML = `${pessoa.nome} ${pessoa.sobrenome}`;
 
      renderPessoas.Pessoas.appendChild(cardPessoa);
  
    })

  },

};

export { renderPessoas };
