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
    divPessoas.innerHTML += `
        <div onclick="selecionarPessoa(${index})" class="Pessoa card">${p['nome']}</div>
    `;
});


// função para selecionar as pessoas do array
const selecionarPessoa = (index) => {

    // adiciona e remore a class="active"
    for (let i = 0; i < divPessoas.children.length; i++) {
        divPessoas.children[i].classList.remove('active');
    };
    divPessoas.children[index].classList.add('active');


    // mostrar os dados das pessoas
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


// adidionando uma nova pessoa ao array
const btnNovaPessoa = document.getElementById('btnNovaPessoa');           // botão para adicionar nova pessoa
const containerAddPessoa = document.getElementById('containerAddPessoa'); // elemento para inserção de dados
const btnAdicionar = document.getElementById('btnAdicionar');             // botão que envia os dados para o array

//inputs que vão receber os dados da nova pessoa
const inputNome = document.getElementById('inputNome');
const inputIdade = document.getElementById('inputIdade');
const inputData = document.getElementById('inputData');
const inputTelef = document.getElementById('inputTelef');
const inputEstado = document.getElementById('inputEstado');
const inputPais = document.getElementById('inputPais');

// funções dos botões
btnNovaPessoa.addEventListener('click', () => {
    containerMain.style.display = 'none';
    containerAddPessoa.style.display = 'flex';
});

btnAdicionar.addEventListener('click', () => {
    
    const data = String(inputData.value).split('-'); // converte o valor do inputData para um array com 3 posições 

    // calcular a idade da pessea
    const idade = (data = Array)  => { // essa função vai receber a const date acima para calcular a idade da pessoa
        var date = new Date,
        ano_atual = date.getFullYear();
        mes_atual = date.getMonth() + 1;
        dia_atual = date.getDate();
    
        let ano_aniversario = data[0];
        let mes_aniversario = data[1];
        let dia_aniversario = data[2];
        
        let idade_atual = ano_atual - ano_aniversario;
    
        if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
            idade_atual--;
        };
        
        return idade_atual < 0 ? 0 : idade_atual;
    }; 

    // valida se todos os campos estão preenchidos
    if(inputNome.value && inputData.value && inputTelef.value && inputEstado.value && inputPais.value) {
        containerMain.style.display = 'flex';
        containerAddPessoa.style.display = 'none';
        
        // adicionar a nova pessoa
        pessoas.push(
            {
                nome: inputNome.value,
                dadaDeNascimento: inputData.value,
                idade: idade(data),
                telef: inputTelef.value,
                estado: inputEstado.value,
                pais: inputPais.value
            },
        );

        // limpa a divPessoas e recria todos os botões
        divPessoas.innerHTML = '';
        pessoas.forEach((p, index) => {
            divPessoas.innerHTML += `
                <div onclick="selecionarPessoa(${index})" class="Pessoa card">${p['nome']}</div>
            `;
        });
        
    } else {
        alert('Preencha todos os campos');
    };

});
