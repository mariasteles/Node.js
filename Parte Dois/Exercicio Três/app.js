const { validarNome, validarIdade } = require('./validacoes');

console.log("Nome 'Ana':", validarNome("Ana"));
console.log("Nome 'Jo':", validarNome("Jo"));
console.log("Nome 123:", validarNome(123));

console.log("----------------------");

console.log("Idade 25:", validarIdade(25));
console.log("Idade 0:", validarIdade(0));
console.log("Idade -5:", validarIdade(-5));
console.log("Idade '20':", validarIdade("20"));
