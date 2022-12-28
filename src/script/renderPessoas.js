import { pessoas } from './Pessoas.js';

const renderPessoas = {
  
  Pessoas: document.getElementById('Pessoas'),
  
  renderBnt: () => {

    pessoas.forEach(pessoa => {
      
      let cardPessoa = document.createElement("div");
  
      // cardPessoa.classList.add('Pessoa', 'card');
      cardPessoa.innerHTML = `<div class="Pessoa card">${pessoa.nome} ${pessoa.sobrenome}</div>`;
 
      renderPessoas.Pessoas.appendChild(cardPessoa);
  
    })

  },

  renderClick: (element) => {

    console.log(element);

    for (let o = renderPessoas.Pessoas.children.length; o > 0; o--) {

      renderPessoas.Pessoas.childNodes[o].firstChild.classList.remove('active');

    };

    element.classList.add('active');
    // console.log(Pessoas.childNodes);
  },

};

export { renderPessoas };
