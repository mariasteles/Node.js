const fs = require('fs');

const criarArquivo = (nome, conteudo) => {

    fs.writeFileSync(nome, conteudo);
    console.log(`Arquivo "${nome}" criado com sucesso!`);
};

const lerArquivo = (nome) => {

    const dados = fs.readFileSync(nome, 'utf8');
    return dados;
};

module.exports = { criarArquivo, lerArquivo };