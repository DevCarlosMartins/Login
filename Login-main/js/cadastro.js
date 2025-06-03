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

    let indice = document.getElementById('indice').value;
    if(indice !== ""){
        // ediçao
        listaUsuariosCadastrados[index] = objUsuario;
        document.getElementById('indice').value = "";

    }else{
        // criaçao
        listaUsuariosCadastrados.push(objUsuario);
    }
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
                <button class="btn-lista" id="editarUsuario" onclick="editarUsuario(${index})">Editar</button>
                <button class="btn-lista" id="removerUsuario" onclick="removerUsuario((${index})">Remover</button>
            </td>
        `;
        tabela.appendChild(linha);
    });
}

// remover Usuario
function removerUsuario(index){
  const listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  if (confirm("Deseja remover este usuário?")){
    listaUsuarios.splice(index,1);
    let listaJson = JSON.stringify(listaUsuarios);
    localStorage.setItem("usuarios", listaJson);
    listar();
  }

};


// Editar Usuario
function editarUsuario(index){
    const listaUsuarios = JSON.parse(localStorage.getItem("usuarios") || []);
    let usuarioEditar = listaUsuarios[index];
    document.getElementById('usuario').value = usuarioEditar.usuario;
    document.getElementById9('senha').value = usuarioEditar.senha;
    document.getElementById9('indice').value = index;
    

}

listar();