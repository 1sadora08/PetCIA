function irParaCadastro() {   //cria uma function com o objetivo de quando ativa, mandar para outra tela//
    document.location.href = 'petcia_cadastro.html'
}

function login() {   //cria uma function com o objetivo de pegar cada informação apresentada e salvar elas num banco de dados para serem acessadas depois//
    let campoUsuarioLogin = document.getElementById('login'); 
    let campoSenhaLogin = document.getElementById('password'); 
    let usuarioLogin = campoUsuarioLogin.value; //recebe o valor dos campos de usuário e senha para que seja comparado com o que á foi salvo no banco de dados//
    let senhaLogin = campoSenhaLogin.value;

   
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados")) || {};

    let loginBemSucedido = false;
    if (usuarioLogin === 'admin' && senhaLogin === 'admin123') {
        alert("Login de Administrador bem-sucedido!"); 
        window.location.href = 'Cadastro_Animal.html'; 
    } else {
        let loginBemSucedido = false;
    
        if (bancoDeDados[usuarioLogin]) {
            if (bancoDeDados[usuarioLogin].password === senhaLogin) {
                loginBemSucedido = true;
            }
        } else {
            for (let usuario in bancoDeDados) {
                if (bancoDeDados[usuario].email === usuarioLogin && bancoDeDados[usuario].password === senhaLogin) {
                    loginBemSucedido = true;
                    break;
                }
            }
        }
    
        if (loginBemSucedido) {
            alert("Login bem-sucedido!"); 
            window.location.href = 'petcia_telainicial.html'; 
        } else {
            alert("Nome de usuário ou senha incorretos.");
        }
    }
}

function clique() {
    let modal = document.getElementById('modal');
    let fundoescuro = document.getElementById('fundoescuro');

    fundoescuro.style.display = 'block'
    modal.style.display = 'block'; 
    
}

function fecharmodal(){
    let modal = document.getElementById('modal');
    let fundoescuro = document.getElementById('fundoescuro');

    fundoescuro.style.display = 'none'
    modal.style.display = 'none'
}