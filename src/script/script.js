// array de objetos com os dados das pessoas
const pessoas = [
  {
    nome: 'Alex',
    sobrenome: 'Junior',
    dadaDeNascimento: '12/11/2001',
    idade: 21,
    telef: '(10) 93213-9876',
    estado: 'CE',
    pais: 'Brasil'
  },
  {
    nome: 'Ezequiel',
    sobrenome: 'Wartha',
    dadaDeNascimento: '15/03/2001',
    idade: 21,
    telef: '(10) 93213-9876',
    estado: 'MG',
    pais: 'Brasil'
  },
  {
    nome: 'Ester',
    sobrenome: 'Alexandre',
    dadaDeNascimento: 'xx/xx/xxxx',
    idade: 19,
    telef: '(10) 93213-9876',
    estado: 'SP',
    pais: 'Brasil'
  },
];

//criando botões para cada pessoa no array

const divPessoas = document.getElementById('Pessoas'); // elemento onde os botões vão ficar

pessoas.forEach(pessoa => {

  const cardPessoa = document.createElement('div'); // criando um elemento para receber os dados

  cardPessoa.classList.add('Pessoa', 'card'); // adicionando class ao elemento
  cardPessoa.innerHTML = `${pessoa.nome} ${pessoa.sobrenome}`; // adicionando o conteúdo
  divPessoas.appendChild(cardPessoa); //  adicionando o elemento a divPessoas

});

