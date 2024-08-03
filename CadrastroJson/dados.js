function pegarjson() {

    var nome = document.getElementById("nome").value;
    var senha = document.getElementById("senha").value;
    var email = document.getElementById("email").value;

    var usuario = {
        nome: nome,
        senha: senha,
        email: email
    }

    //checar se o campo n esta vazio
    if (nome === "" || senha === "" || email === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    console.log(nome);

    // criando a lista
    var usuarios = JSON.parse(localStorage.getItem("usuariosJSON")) || []

    console.log(usuarios);

    //adiciona o item na lista
    usuarios.push(usuario);

    //salvando o item no local
    localStorage.setItem("usuariosJSON", JSON.stringify(usuarios));
    alert("Obrigado por Cadastrar.")
}

function pegarjson() {
    //pega o JSON
    let text = localStorage.getItem("usuariosJSON");

    //deserializa o JSON
    let obj = JSON.parse(text);
    console.log(obj);

    var usuarios = JSON.parse(localStorage.getItem("usuariosJSON")) || [];
    var modalBody = document.getElementById("modal-body");
    console.log(modalBody);
    modalBody.innerHTML = ""; //Limpar o conteúdo anterior
}