const eNumero = (valor) => {
    return typeof valor === 'number' && !isNaN(valor);
};

module.exports = { eNumero };