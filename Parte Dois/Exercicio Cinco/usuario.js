const listaDeUsuarios = [];

const criarUsuario = (nome, idade) => {
    const novoUsuario = { nome: nome, idade: idade };
    listaDeUsuarios.push(novoUsuario);
};

const listarUsuarios = () => {
    return listaDeUsuarios;
};

const buscarUsuarioPeloNome = (nomeParaBuscar) => {
    return listaDeUsuarios.find(usuario => usuario.nome === nomeParaBuscar);
};

module.exports = { criarUsuario, listarUsuarios, buscarUsuarioPeloNome };