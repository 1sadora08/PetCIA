
function irParaLogin() {
    document.location.href = 'petcia_login.html'
}
  
function cadastrar(){
    let email = document.getElementById('email').value;
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('password').value;
    let confirmaSenha = document.getElementById('passwordconfirme').value;
 
    if (senha === confirmaSenha) {
        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados")) || {};

        
        if (bancoDeDados[usuario]) {
            alert("Nome de usuário já cadastrado."); 
        }

    
        bancoDeDados[usuario] = { usuario: usuario, email: email, password: senha };

    
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));

        alert("Usuário cadastrado com sucesso!");
    } else {
        alert("As senhas são diferentes!");
    }
}