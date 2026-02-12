// Pegando os argumentos
const numero1 = Number(process.argv[2]);
const numero2 = Number(process.argv[3]);

// Verificando se são números válidos
if (isNaN(numero1) || isNaN(numero2)) {
  console.log("Por favor, informe dois números válidos.");
} else {
  const soma = numero1 + numero2;
  const multiplicacao = numero1 * numero2;

  console.log(`Soma: ${soma}`);
  console.log(`Multiplicação: ${multiplicacao}`);
}