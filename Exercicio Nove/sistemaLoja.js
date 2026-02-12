const nomeItem = process.argv[2];
const preco = Number(process.argv[3]);
const ouro = Number(process.argv[4]);

if (!nomeItem || isNaN(preco) || isNaN(ouro)) {
  console.log("Informe: nome do item, preço e ouro do jogador.");
} else {
  if (ouro >= preco) {
    console.log(`Pode comprar ${nomeItem}`);
  } else {
    console.log(`Não pode comprar ${nomeItem}`);
  }
}