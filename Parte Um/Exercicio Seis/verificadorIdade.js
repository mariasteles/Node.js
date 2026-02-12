const idade = Number(process.argv[2]);

if (isNaN(idade)) {
  console.log("Por favor, informe uma idade válida.");
} else if (idade < 18) {
  console.log("Menor de idade");
} else {
  console.log("Maior de idade");
}