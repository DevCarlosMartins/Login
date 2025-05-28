// fazer o cadastro
const botao = document.getElementById('btnCadastrar');
//const listaUsuariosCadastrados = [];

// cadastrar
botao.addEventListener('click', function (){
    const listaUsuariosCadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];
    const objUsuario = {
        usuario: document.getElementById('usuario').value,
        senha: document.getElementById('senha').value
    };
    listaUsuariosCadastrados.push(objUsuario);
    const listaJson = JSON.stringify(listaUsuariosCadastrados);
    localStorage.setItem('usuarios', listaJson);
    listar();
}

);

//listar
function listar(){
    const listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    let tabela = document.getElementById('listaUsuariosCadastrados');
    tabela.innerHTML = "";
    listaUsuarios.forEach((objeto, index) => {
        let linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${objeto.usuario}</td>
            <td>${objeto.senha}</td>
            <td>
                <button class="btn-lista" onclick="editarUsuario()">Editar</button>
                <button class="btn-lista" id="removerUsuario" onclick="removerUsuario()">Remover</button>
            </td>
        `;
        tabela.appendChild(linha);
    });
}

function removerUsuario(index){
  const listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  if (confirm("Deseja remover este usuário?")){
  listaUsuarios.splice(index,1);
  let listaJson = JSON.stringify(listaUsuarios);
  localStorage.setItem("usuarios", listaJson);
  listar();
  }

};

listar();