function irParaCadastro() {
    document.location.href = 'petcia_cadastro.html'
}

function login() {
    let campoUsuarioLogin = document.getElementById('login'); 
    let campoSenhaLogin = document.getElementById('password'); 

    
    let usuarioLogin = campoUsuarioLogin.value;
    let senhaLogin = campoSenhaLogin.value;

   
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados")) || {};

let loginBemSucedido = false;

if(bancoDeDados[usuarioLogin]){
    if (bancoDeDados[usuarioLogin].password === senhaLogin){
        loginBemSucedido = true;
    }
}else{
    
    
    for (let usuario in bancoDeDados) {
        if(bancoDeDados[usuario].email === usuarioLogin && bancoDeDados[usuario].password === senhaLogin)
        loginBemSucedido = true;
    break;
        }
    }
if (loginBemSucedido) {
        alert("Login bem-sucedido!"); 
        window.location.href = 'petcia_telainicial.html'; 
    } else {
        alert("Nome de usuário ou senha incorretos.");
    }
}
