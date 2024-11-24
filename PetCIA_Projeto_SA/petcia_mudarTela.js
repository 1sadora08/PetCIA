function irParaAdotar() { //quando o botão for acionado, manda o usuário para outra tela//
    document.location.href = 'petcia_telaadotarg.html'
}

function irParaInicial() {  //quando o botão for acionado, manda o usuário para outra tela//
    document.location.href = 'petcia_telainicial.html'
}

function doar() {
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



function irParaAdotarcao() { //quando o botão for acionado, manda o usuário para outra tela//
    document.location.href = 'petcia_telaadotarc.html'
}

function irParaAdotarcoelho() { //quando o botão for acionado, manda o usuário para outra tela//
    document.location.href = 'petcia_telaadotarcoe.html'
}

function irParaAdotarpassaro() { //quando o botão for acionado, manda o usuário para outra tela//
    document.location.href = 'petcia_telaadotarpassaro.html'

}


function cadastrodoanimal() { //quando o botão for assionado, manda o usuário para outra tela//
    document.location.href = 'Cadastro_Animal.html'
}

function sair(){
    document.location.href = 'petcia_login.html'
}

function descricaoAnimalCad(){
    document.location.href = 'Descrição_AnimalCadastrado.html'
    
    
}


function fecharadote(){
    let carrinhoAdocao = document.getElementById('carrinhoAdocao');

    carrinhoAdocao.style.display = 'none'
}

function exibirAnimais() {
    const animais = JSON.parse(localStorage.getItem('animal')) || [];
        const listaAnimais = document.getElementById('listaAnimais2');
        listaAnimais.innerHTML = '';
        
        //o negócio da url é uma constante que servirá para determinar a página com as condicionais
        const url = window.location.href;

        // Determina se a página atual é para cães ou gatos ou coelhos ou coelhdsdd
        let especie;
        if (url.includes("petcia_telaadotarc.html")) {
            especie = "cao";
        } else if (url.includes("petcia_telaadotarg.html")) {
            especie = "gato";
        }
        else if (url.includes("petcia_telaadotarcoe.html")) {
            especie = "coelho";
        }else if (url.includes("petcia_telaadotarpassaro.html")) {
            especie = "passaro";
        }
    
        // Filtra os animais pela espécie e exibe apenas os da espécie atual
        const animaisFiltrados = animais.filter(animal => animal.resposta === especie);
    
        animaisFiltrados.forEach(animal => {
            const div = document.createElement('div');
            // Define as classes conforme a espécie do animal
            if (especie === "cao") {
                div.classList.add('caoadoção')
            }else if (especie === "gato") {
                div.classList.add('gatoadoção')
            }else if (especie === "coelho") {
                div.classList.add('coelhoadoção')
            }else if (especie === "passaro") {
                div.classList.add('passaroadoção')
            }
            

        const botaoContainer = document.createElement('div'); // Cria um container para os botões
        botaoContainer.classList.add('botaoContainer');

        // Ele tá Criando a imagem
        const img = document.createElement('img');
        img.src = animal.imagem;
        img.classList.add('caes','gatos','coelhos','passaros');  // Aplica a classe que define o estilo das imagens (do tamanho correto)

        // Criando o nome do animal
        const nome = document.createElement('p');
        nome.textContent = animal.nomeAnimal;
        

        const botao = document.createElement('button');
        botao.textContent = 'Info';
        botao.classList.add('infoAnimal');
        
        // Aqui adicionamos o evento de clique ao botão 'info'
        botao.addEventListener('click', () => {
            // Salva as informações do animal no localStorage
            localStorage.setItem('animalclicado', JSON.stringify(animal));
            // Redireciona para a página de detalhes do animal
            window.location.href = 'Descrição_AnimalCadastrado.html'; 
        });

        
        const botao2 = document.createElement('button')
        botao2.textContent = 'Adotar'
        botao2.classList.add('infoAnimal')
        botao2.onclick = () => adicionarAoCarrinho(animal)


        // Adicionando a imagem e o nome dentro da div
        div.appendChild(img);
        div.appendChild(nome);
        botaoContainer.appendChild(botao);
        botaoContainer.appendChild(botao2);

        // Adicionando a div que contém os botões à div do animal
        div.appendChild(botaoContainer);
                

                // Adicionando a div à lista de animais cadastrados
                listaAnimais.appendChild(div);
            });

            
        }



function adicionarAoCarrinho(animal) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    const animalExistente = carrinho.find(p => p.nomeAnimal === animal.nomeAnimal);

    if (animalExistente) {
        alert('Este animal já foi adicionado ao carrinho.');
    } else {
        // Adiciona o produto ao carrinho
        carrinho.push(animal);
        localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Atualiza o localStorage com o novo carrinho
        alert('Animal adicionado ao carrinho!');
    }
}

exibirAnimais()

