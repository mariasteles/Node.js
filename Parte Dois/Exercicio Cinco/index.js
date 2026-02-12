const bancoDados = require('./usuarios');

bancoDados.criarUsuario("Ana", 25);
bancoDados.criarUsuario("Beto", 30);
bancoDados.criarUsuario("Carla", 22);

console.log("--- Lista de Todos os Usuários ---");
const todos = bancoDados.listarUsuarios();
console.log(todos);

console.log("\n--- Testando a Busca ---");
const usuarioEncontrado = bancoDados.buscarUsuarioPeloNome("Beto");

if (usuarioEncontrado) {
    console.log("Usuário encontrado:", usuarioEncontrado);
} else {
    console.log("Usuário não cadastrado.");
}