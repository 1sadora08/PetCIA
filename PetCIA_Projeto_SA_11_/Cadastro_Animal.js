// Função para adicionar um produto ao localStorage
function cadastrarAnimal() {
    const descricao = document.getElementById('descricao').value;
    const resposta = document.getElementById('resposta').value;
    const idade = document.getElementById('idade').value;
    const imagem = document.getElementById('imagem').value;
    const nomeAnimal = document.getElementById('nomeAnimal').value;
    const genero = document.getElementById('genero').value;
    
    const animalCadastrado = {
        descricao,
        resposta,
        idade,
        imagem,
        nomeAnimal,
        genero
    };

    if (!descricao || !resposta || !idade || !imagem || !genero || !nomeAnimal) {
        alert("Todos os campos são obrigatórios!"); // Alerta se algum campo estiver vazio
        return; // retornar a função
    }

    // Recupera os produtos existentes do localStorage
    const animais = JSON.parse(localStorage.getItem('animal')) || [];
    animais.push(animalCadastrado);

    // Salva os produtos atualizados no localStorage
    localStorage.setItem('animal', JSON.stringify(animais));

    // Atualiza a lista de produtos exibida
    exibirAnimais();
}

// Função para exibir os produtos cadastrados
function exibirAnimais() {
    const animais = JSON.parse(localStorage.getItem('animal')) || [];
    const listaAnimais = document.getElementById('listaAnimais');
    listaAnimais.innerHTML = '';

    animais.forEach((animal, index) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = animal.imagem;
        
        const animalInfo = document.createElement('div');
        animalInfo.classList.add('animal-info');

        const nomeAnimal = document.createElement('p');
        nomeAnimal.textContent = `Nome: ${animal.nomeAnimal}`;
        animalInfo.appendChild(nomeAnimal);

        const especie = document.createElement('p');
        especie.textContent = `Espécie: ${animal.resposta}`;
        animalInfo.appendChild(especie);

        const idade = document.createElement('p');
        idade.textContent = `Idade: ${animal.idade}`;
        animalInfo.appendChild(idade);

        const genero = document.createElement('p');
        genero.textContent = `Gênero: ${animal.genero}`;
        animalInfo.appendChild(genero);

        const descricao = document.createElement('p');
        descricao.textContent = `Descrição: ${animal.descricao}`;
        animalInfo.appendChild(descricao);
        

        // Adiciona a imagem e as informações ao item da lista
        li.appendChild(img);
        li.appendChild(animalInfo);

        // Cria o botão de deletar
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Deletar';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = () => deletarAnimal(index);

        // Adiciona o botão de deletar ao item da lista
        li.appendChild(deleteBtn);

        // Adiciona o item da lista à lista principal
        listaAnimais.appendChild(li);
    });
}

// Função para deletar um animal do localStorage
function deletarAnimal(index) {
    const animais = JSON.parse(localStorage.getItem('animal')) || [];
    
    // Remove o animal no índice específico
    animais.splice(index, 1);

    // Atualiza o localStorage com o novo array de animais
    localStorage.setItem('animal', JSON.stringify(animais));

    // Atualiza a exibição dos animais
    exibirAnimais();
}

function limparAnimais() {
    localStorage.removeItem('animal');
    exibirAnimais();
}

// Exibe os produtos cadastrados ao carregar a página
window.onload = exibirAnimais;