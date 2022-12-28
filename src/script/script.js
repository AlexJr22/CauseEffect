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

const divPessoas = document.querySelector('#Pessoas'); // elemento onde os botões vão ficar

pessoas.map(p => {
  divPessoas.innerHTML += `<div onclick="selecionarPessoa(this)" class="Pessoa card">${p.nome} ${p.sobrenome}</div>`;
});

const selecionarPessoa = (element) => {

  // adiciona e remore a class="active"
  for (let i = 0; i < divPessoas.children.length; i++) {
    divPessoas.children[i].classList.remove('active');
  };

  element.classList.add('active');
};