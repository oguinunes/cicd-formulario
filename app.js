const { validarFormulario } = require("./validacao");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-cadastro");
  const feedback = document.getElementById("feedback");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const dados = {
      nome:  document.getElementById("nome").value,
      email: document.getElementById("email").value,
      senha: document.getElementById("senha").value,
    };

    const resultado = validarFormulario(dados);

    if (resultado.valido) {
      feedback.className = "sucesso";
      feedback.textContent = "Cadastro realizado com sucesso!";
    } else {
      feedback.className = "erro";
      feedback.innerHTML = resultado.erros.map(e => `<p>${e}</p>`).join("");
    }
  });
});