
    const form = document.getElementById('loginForm');
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');
    const emailError = document.getElementById('emailError');
    const senhaError = document.getElementById('senhaError');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      let valid = true;

      // Validar email
      if (!email.value.includes('@')) {
        emailError.textContent = 'E-mail inválido';
        valid = false;
      } else {
        emailError.textContent = '';
      }

      // Validar senha
      if (senha.value.length < 6) {
        senhaError.textContent = 'A senha deve ter no mínimo 6 caracteres';
        valid = false;
      } else {
        senhaError.textContent = '';
      }

      if (valid) {
        alert('Login realizado com sucesso!');
        form.reset();
      }
    });