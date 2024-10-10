// sessão
function validarSessao(cargo_permitido, local) {
    var nome = sessionStorage.NOME_USUARIO;
    var cargo = sessionStorage.CARGO;
    var user = document.getElementById("user");

    if (nome != null && cargo != null) {
        user.innerHTML = `Olá, ${nome}! (${cargo})`;
        var cargo = sessionStorage.CARGO;
        if (cargo != cargo_permitido) {
            window.location = local;
        }
    } else {
        window.location = "../index.html";
    }
}

function sair() {
    sessionStorage.clear();
    window.location = "login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

