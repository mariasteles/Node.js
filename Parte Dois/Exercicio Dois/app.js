const mensagens = require('./mensagens');

const nomeUsuario = "Carlos";

console.log(mensagens.boasVindas(nomeUsuario));
console.log(mensagens.despedida(nomeUsuario));
console.log("Autor do sistema:", mensagens.autorSistema);