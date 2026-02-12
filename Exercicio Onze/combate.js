const ataque = Number(process.argv[2]);
const defesa = Number(process.argv[3]);

if (isNaN(ataque) || isNaN(defesa)) {
  console.log("Informe valores válidos para ataque e defesa.");
} else {
  let dano = ataque - defesa;

  if (dano < 0) {
    dano = 0;
  }

  console.log(`Dano causado: ${dano}`);
}