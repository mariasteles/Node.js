const comando = process.argv[2];

if (!comando) {
  console.log("Informe um comando: atacar, defender ou fugir.");
} else if (comando === "atacar") {
  console.log("⚔️ Você atacou o inimigo!");
} else if (comando === "defender") {
  console.log("🛡️ Você se defendeu!");
} else if (comando === "fugir") {
  console.log("🏃 Você fugiu da batalha!");
} else {
  console.log("Comando inválido.");
}