const { validarNome, validarEmail, validarSenha, validarFormulario } = require("./validacao");

// ─── Nome ───────────────────────────────────────────
describe("validarNome", () => {
  test("aceita nome válido", () => {
    expect(validarNome("João Silva").valido).toBe(true);
  });

  test("rejeita nome vazio", () => {
    const resultado = validarNome("");
    expect(resultado.valido).toBe(false);
    expect(resultado.erro).toBe("Nome deve ter pelo menos 3 caracteres");
  });

  test("rejeita nome com menos de 3 caracteres", () => {
    expect(validarNome("Jo").valido).toBe(false);
  });

  test("rejeita nome só com espaços", () => {
    expect(validarNome("   ").valido).toBe(false);
  });
});

// ─── Email ──────────────────────────────────────────
describe("validarEmail", () => {
  test("aceita email válido", () => {
    expect(validarEmail("joao@gmail.com").valido).toBe(true);
  });

  test("rejeita email sem @", () => {
    expect(validarEmail("joaogmail.com").valido).toBe(false);
  });

  test("rejeita email sem domínio", () => {
    expect(validarEmail("joao@").valido).toBe(false);
  });

  test("rejeita email vazio", () => {
    expect(validarEmail("").valido).toBe(false);
  });
});

// ─── Senha ──────────────────────────────────────────
describe("validarSenha", () => {
  test("aceita senha válida", () => {
    expect(validarSenha("Senha123").valido).toBe(true);
  });

  test("rejeita senha curta", () => {
    expect(validarSenha("Ab1").valido).toBe(false);
  });

  test("rejeita senha sem maiúscula", () => {
    expect(validarSenha("senha123").valido).toBe(false);
  });

  test("rejeita senha sem número", () => {
    expect(validarSenha("SenhaForte").valido).toBe(false);
  });
});

// ─── Formulário completo ────────────────────────────
describe("validarFormulario", () => {
  test("aprova formulário totalmente válido", () => {
    const resultado = validarFormulario({
      nome: "João Silva",
      email: "joao@gmail.com",
      senha: "Senha123"
    });
    expect(resultado.valido).toBe(true);
    expect(resultado.erros).toHaveLength(0);
  });

  test("rejeita formulário com todos os campos inválidos", () => {
    const resultado = validarFormulario({
      nome: "Jo",
      email: "nao-e-email",
      senha: "fraca"
    });
    expect(resultado.valido).toBe(false);
    expect(resultado.erros).toHaveLength(3);
  });

  test("acumula erros de campos diferentes", () => {
    const resultado = validarFormulario({
      nome: "João Silva",
      email: "emailinvalido",
      senha: "Senha123"
    });
    expect(resultado.valido).toBe(false);
    expect(resultado.erros).toHaveLength(1);
  });
});