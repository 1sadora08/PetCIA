function irParaLogin() {
    document.location.href = 'petcia_login.html'  //cria uma function com o objetivo de quando ativa, mandar para outra tela//
}
  
function cadastrar(){   //cria uma function com o objetivo de pegar cada informação apresentada e salvar elas num banco de dados para serem acessadas depois//
    let email = document.getElementById('email').value;
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('password').value;
    let confirmaSenha = document.getElementById('passwordconfirme').value;
    let RG = document.getElementById('RG').value;
    let telefone = document.getElementById('telefone').value;
    let CPF = document.getElementById('CPF').value;
    let data = document.getElementById('data').value;
    let CEP = document.getElementById('CEP').value;


    if (!email || !usuario || !senha || !confirmaSenha || !nome || !RG || !telefone || !CPF || !data || !CEP ) {
        alert("Todos os campos são obrigatórios!"); // Alerta se algum campo estiver vazio
        return; // Sai da função
    }
    
    if (senha === confirmaSenha) {  //confirma se a confirmação da senha é a mesma que a anterior, caso for, é salva, se não, é pedido uma verificação.//
        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados")) || {}; //ele pega um item no local storage e transforma a string em um objeto com JSON adicionando isso no objeto "bancoDeDados", mas caso não funcione, o objeto irá ser inicializado vazio.//

        
        if (bancoDeDados[usuario]) { //caso o nome de usuário já esteja salvo, é mandado um alerta avisando que já foi cadastrado com esse usuário.//
            alert("Nome de usuário já cadastrado.");
        }

    
        bancoDeDados[usuario] = { usuario: usuario, email: email, password: senha, nome: nome, RG: RG, telefone: telefone, CPF: CPF, data: data, CEP: CEP };  //é criado um objeto no qual as informações de cadastro são inseridas//

    
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados)); //o banco de dados é transformado de um objeto para uma string//

        alert("Usuário cadastrado com sucesso!");
        
    } else {
        alert("As senhas são diferentes!");
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