function validarNome(nome) {
    if (typeof nome !== "string") {
      return false;
    }
  
    if (nome.trim().length < 3) {
      return false;
    }
  
    return true;
  }
  
  function validarIdade(idade) {
    if (typeof idade !== "number") {
      return false;
    }
  
    if (idade <= 0) {
      return false;
    }
  
    return true;
  }
  
  module.exports = {
    validarNome,
    validarIdade
  };
  