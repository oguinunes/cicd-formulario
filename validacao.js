function validarNome(nome) {
  if (!nome || nome.trim().length < 3) {
    return { valido: false, erro: "Nome deve ter pelo menos 3 caracteres" };
  }
  return { valido: true };
}

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !regex.test(email)) {
    return { valido: false, erro: "Email inválido" };
  }
  return { valido: true };
}

function validarSenha(senha) {
  if (!senha || senha.length < 8) {
    return { valido: false, erro: "Senha deve ter pelo menos 8 caracteres" };
  }
  if (!/[A-Z]/.test(senha)) {
    return { valido: false, erro: "Senha deve ter pelo menos uma letra maiúscula" };
  }
  if (!/[0-9]/.test(senha)) {
    return { valido: false, erro: "Senha deve ter pelo menos um número" };
  }
  return { valido: true };
}

function validarFormulario(dados) {
  const nome  = validarNome(dados.nome);
  const email = validarEmail(dados.email);
  const senha = validarSenha(dados.senha);

  const erros = [];
  if (!nome.valido)  erros.push(nome.erro);
  if (!email.valido) erros.push(email.erro);
  if (!senha.valido) erros.push(senha.erro);

  return {
    valido: erros.length === 0,
    erros
  };
}

module.exports = { validarNome, validarEmail, validarSenha, validarFormulario };