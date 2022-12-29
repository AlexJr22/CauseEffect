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

pessoas.forEach((p, index) => {
  divPessoas.innerHTML += `<div onclick="selecionarPessoa(this, ${index})" class="Pessoa card">${p.nome} ${p.sobrenome}</div>`;
});


const selecionarPessoa = (element, index) => {

  // adiciona e remore a class="active"
  for (let i = 0; i < divPessoas.children.length; i++) {
    divPessoas.children[i].classList.remove('active');
  };

  element.classList.add('active');
  
  // mostrar os dados das pessoas
  console.log(index);

  // elementos onde os dados vão aparecer
  document.querySelector('#Nome').innerHTML = `
    <div class="dado">Nome:</div>
    <div class="dadoP">${pessoas[index].nome} ${pessoas[index].sobrenome}</div> 
  `;  // adiciona o nome

  document.querySelector('#Idade').innerHTML = `
    <div class="dado">Idade:</div>
    <div class="dadoP">${pessoas[index].idade}</div>
  `;  // adiciona a idade 
    
  document.querySelector('#DataDeNascimento').innerHTML = `
    <div class="dado">Data de Nascimento:</div>
    <div class="dadoP">${pessoas[index].dadaDeNascimento}</div>  
  `;  // adiciona a data de nascimento

  document.querySelector('#Telefone').innerHTML = `
    <div class="dado">Telefone:</div>
    <div class="dadoP">${pessoas[index].telef}</div>
  `;  // adiciona o telefone

  document.querySelector('#Estado').innerHTML = `
    <div class="dado">Estado:</div>
    <div class="dadoP">${pessoas[index].estado}</div> 
  `;  // adiciona o estado 

  document.querySelector('#Pais').innerHTML = `
    <div class="dado">País:</div>
    <div class="dadoP">${pessoas[index].pais}</div>
  `;  // adiciona o país
};


const bntAdd = document.querySelector('#novaP');

bntAdd.addEventListener('click', () => {

  pessoas.push({
    
  });
  
  divPessoas.innerHTML = '';
  pessoas.forEach((p, index) => {
    divPessoas.innerHTML += `<div onclick="selecionarPessoa(this, ${index})" class="Pessoa card">${p.nome} ${p.sobrenome}</div>`;
  });

  console.log(pessoas);
})
