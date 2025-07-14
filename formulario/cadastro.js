const cadastro = document.getElementById('cadastroForm');

cadastro.addEventListener('submit', function (e) {
  e.preventDefault();

  // Coleta os valores dos campos
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value.trim();
  const confirmarSenha = document.getElementById('confirmarSenha').value.trim();

  // Elementos de erro
  const nomeError = document.getElementById('nomeError');
  const emailError = document.getElementById('emailError');
  const senhaError = document.getElementById('senhaError');
  const confirmarSenhaError = document.getElementById('confirmarSenhaError');

  // Limpa os erros anteriores
  nomeError.textContent = '';
  emailError.textContent = '';
  senhaError.textContent = '';
  confirmarSenhaError.textContent = '';

  let valido = true;

  // Validação
  if (nome === '') {
    nomeError.textContent = 'Por favor, informe seu nome.';
    valido = false;
  }

  if (email === '') {
    emailError.textContent = 'Por favor, informe seu e-mail.';
    valido = false;
  }

  if (senha.length < 6) {
    senhaError.textContent = 'A senha deve ter no mínimo 6 caracteres.';
    valido = false;
  }

  if (senha !== confirmarSenha) {
    confirmarSenhaError.textContent = 'As senhas não coincidem.';
    valido = false;
  }

  if (!valido){
    return
  };

  const users = [];

  // Salva os dados no localStorage
  
  const usuario = {
    nome: nome,
    email: email,
    senha: senha // Obs: em app real, nunca salve senhas assim
  };

  users.push('usuario');

  localStorage.setItem('usuarioCadastrado', JSON.stringify(usuario));

  alert('Cadastro realizado com sucesso!');
  window.location.href = 'login.html';
});

// L.A.S