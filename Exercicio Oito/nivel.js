const nivel = Number(process.argv[2]);

if (isNaN(nivel) || nivel <= 0) {
  console.log("Por favor, informe um nível válido.");
} else {
  const xp = nivel * 100;
  console.log(`Para o próximo nível, você precisa de ${xp} XP.`);
}