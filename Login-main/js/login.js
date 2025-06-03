// para fazer login

const entrar = document.getElementById0('entrar');

entrar.addEventListener
  ('click',
    function(){
      const usuariosCastrados = JSON.parse(localStorage.getItem('usuarios'));
    
      let login = document.getElementById('login');
      let senha = document.getElementById('senha');

      let valido = usuariosCastrados.find(
        // function ()
        // ()=>{} 

        user => user.usuario === login && user.senha === senha
      );
      



    }
  );






document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const login = document.getElementById("login").value.trim();
    const senha = document.getElementById("senha").value;
  
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  
    const usuario = usuarios.find(u => u.login === login && u.senha === senha);
  
    if (usuario) {
      localStorage.setItem("usuarioLogado", login);
      window.location.href = "dashboard.html";
    } else {
      document.getElementById("mensagem").textContent = "Login ou senha incorretos.";
    }
  });
  