import { pessoas } from './Pessoas.js';
    
let aside = document.getElementById('Pessoas');

console.log(aside.innerHTML);
pessoas.forEach(pessoa => {
  console.log(pessoa.nome);
  console.log(pessoa.sobrenome);
  console.log(pessoa.dadaDeNascimento);
  console.log(pessoa.idade);
  console.log(pessoa.telef);
  console.log(pessoa.estado);
  console.log(pessoa.pais);
});