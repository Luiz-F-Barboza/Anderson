const form = document.getElementById('loginForm');


form.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value.trim();
  const emailError = document.getElementById('emailError');
  const senhaError = document.getElementById('senhaError');

  emailError.textContent = '';
  senhaError.textContent = '';

  const dadosLocalStorage = localStorage.getItem('usuarioCadastrado');
  const usuario = JSON.parse(dadosLocalStorage);

  let valid = true;

  if (!email.includes('@')) {
    emailError.textContent = 'E-mail inválido';
    valid = false;
  }

  if (senha.length < 6) {
    senhaError.textContent = 'A senha deve ter no mínimo 6 caracteres';
    valid = false;
  }

  if (!valid){form.reset();}

  if (!usuario) {
    emailError.textContent = 'Nenhum usuário cadastrado.';
    return;
  }

  if (email === usuario.email && senha === usuario.senha) {
    alert('Autenticado com sucesso!');
    window.location.href = 'dashboard.html';
  } else {
    {
      alert('Algum dos dados inseridos está errado.');
      return;
    }
  }

  if (!valid) return;
});

// L.A.S