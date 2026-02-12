const nivel = Number(process.argv[2]);

if (isNaN(nivel) || nivel <= 0) {
  console.log("Por favor, informe um nível válido.");
} else if (nivel >= 1 && nivel <= 10) {
  console.log("Iniciante");
} else if (nivel >= 11 && nivel <= 30) {
  console.log("Intermediário");
} else {
  console.log("Veterano");
}