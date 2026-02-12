  function boasVindas(nome) {
    return "Olá, ${nome}! Seja bem-vindo(a) ao sistema.";
  }
  
  function despedida(nome) {
    return "Até logo, ${nome}! Volte sempre.";
  }
  
  const autorSistema = "Sistema NodeJS";
  
  module.exports = {
    boasVindas,
    despedida,
    autorSistema
  };  