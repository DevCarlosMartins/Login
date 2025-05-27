const botao = document.getElementById("btnCadastrar"); // Corrigido para id
const listaUsuariosCadastrados = [];

// Cadastrar Usuário
botao.addEventListener('click', function(){
  const objUsuario = {
    usuario: document.getElementById("usuarios").value, // Corrigido para id
    senha: document.getElementById("senha").value       // Corrigido para id
  };
  listaUsuariosCadastrados.push(objUsuario);
  const listaJson = JSON.stringify(listaUsuariosCadastrados);
  localStorage.setItem("usuarios", listaJson);
  listar();
});

// Listar Usuários
function listar(){
  const listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  let tabela = document.getElementById('listaUsuariosCadastrados');
  tabela.innerHTML = "";

  listaUsuarios.forEach((user, index ) =>{
    let linha = document.createElement('tr');
    linha.innerHTML = `
      <td>${user.usuario}</td>
      <td>${user.senha}</td>
      <td>
        <button>Editar</button>
        <button>Remover</button>
      </td>
    `;
    tabela.appendChild(linha);
  });
}

listar();