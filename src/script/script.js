// array de objetos com os dados das pessoas
const pessoas = [
  {
    nome: 'Alex Junior',
    dadaDeNascimento: '12/11/2001',
    idade: 21,
    telef: '(10) 93213-9876',
    estado: 'CE',
    pais: 'Brasil'
  },
  {
    nome: 'Ezequiel Wartha',
    dadaDeNascimento: '15/03/2001',
    idade: 21,
    telef: '(10) 93213-9876',
    estado: 'MG',
    pais: 'Brasil'
  },
  {
    nome: 'Ester Alexandre',
    dadaDeNascimento: 'xx/xx/xxxx',
    idade: 19,
    telef: '(10) 93213-9876',
    estado: 'SP',
    pais: 'Brasil'
  },
];


const containerMain = document.getElementById('containerMain'); // elemento que contém o conteúdo principal do site
const divPessoas = document.querySelector('#Pessoas');          // elemento onde os botões vão ficar

//criando botões para cada pessoa no array
pessoas.forEach((p, index) => {
  divPessoas.innerHTML += `<div onclick="selecionarPessoa(this, ${index})" class="Pessoa card">${p.nome}</div>`;
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
    <div class="dadoP">${pessoas[index].nome}</div> 
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


const btnNovaPessoa = document.getElementById('btnNovaPessoa');           // botão para adicionar nova pessoa
const containerAddPessoa = document.getElementById('containerAddPessoa'); // elemento para inserção de dados
const btnAdicionar = document.getElementById('btnAdicionar');              // botão que envia os dados para o array

//inputs que vão receber os dados da nova pessoa
const inputNome = document.getElementById('inputNome');
const inputIdade = document.getElementById('inputIdade');
const inputData = document.getElementById('inputData');
const inputTelef = document.getElementById('inputTelef');
const inputEstado = document.getElementById('inputEstado');
const inputPais = document.getElementById('inputPais');

// console.log(btnNovaPessoa)

// funções dos botões
btnNovaPessoa.addEventListener('click', () => {
  containerMain.style.display = 'none';
  containerAddPessoa.style.display = 'flex';
});

btnAdicionar.addEventListener('click', () => {
  containerMain.style.display = 'flex';
  containerAddPessoa.style.display = 'none';
  
  pessoas.push(
    {
      nome: inputNome.value,
      dadaDeNascimento: inputData.value,
      idade: inputIdade.value,
      telef: inputTelef.value,
      estado: inputEstado.value,
      pais: inputPais.value
    },
  );
  divPessoas.innerHTML = '';
  pessoas.forEach((p, index) => {
    divPessoas.innerHTML += `<div onclick="selecionarPessoa(this, ${index})" class="Pessoa card">${p.nome}</div>`;
  });
});
