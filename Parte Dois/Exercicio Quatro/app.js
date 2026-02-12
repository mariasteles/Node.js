const operacoes = require('./utils/operacoes');
const { eNumero } = require('./utils/validacoes');

const num1 = 10;
const num2 = 5;

if (eNumero(num1) && eNumero(num2)) {
    console.log(`Calculando com os números: ${num1} e ${num2}`);

    console.log("Soma:", operacoes.somar(num1, num2));
    console.log("Subtração:", operacoes.subtrair(num1, num2));
    console.log("Multiplicação:", operacoes.multiplicar(num1, num2));
    console.log("Divisão:", operacoes.dividir(num1, num2));
} else {
    console.log("Erro: Um dos valores inseridos não é um número válido!");
}