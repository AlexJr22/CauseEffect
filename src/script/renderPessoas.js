import { pessoas } from './Pessoas.js';

const renderPessoas = {
  
  Pessoas: document.getElementById('Pessoas'),
  
  renderBnt: () => {

    pessoas.forEach(pessoa => {
      
      let cardPessoa = document.createElement("div");
  
      cardPessoa.classList.add('Pessoa', 'card');
      cardPessoa.innerHTML = `${pessoa.nome} ${pessoa.sobrenome}`;
 
      renderPessoas.Pessoas.appendChild(cardPessoa);

    });

    let pessoa = document.querySelectorAll('.Pessoa');
    console.log(pessoa);
    
    for (let i = pessoa.length; i > 0; i--) {

    };
  },

};

export { renderPessoas };
