let animalEditandoIndex = null;

function cadastrarAnimal() {
    const nomeAnimal = document.getElementById('nomeAnimal').value;
    const resposta = document.getElementById('resposta').value;
    const idade = document.getElementById('idade').value;
    const descricao = document.getElementById('descricao').value;
    const imagem = document.getElementById('imagem').value;
    const genero = document.getElementById('genero').value;


    if (!nomeAnimal || !resposta || !idade || !descricao || !imagem || !genero) {

        alert("Por favor, preencha todos os campos obrigatórios!");
        return; // Impede o cadastro se algum campo não estiver preenchido
    }

    const animal = {
        nomeAnimal: nomeAnimal,
        resposta: resposta,
        idade: idade,
        descricao: descricao,
        imagem: imagem,
        genero: genero
    };

    // Obtém os animais cadastrados no localStorage ou cria um array vazio
    const animais = JSON.parse(localStorage.getItem('animal')) || [];
    
    // Adiciona o novo animal ao array
    if (animalEditandoIndex !== null) {
        animais[animalEditandoIndex] = animal;  // Atualiza o animal no índice correspondente
        animalEditandoIndex = null;  // Limpa o índice de edição
    } else {
        animais.push(animal);  // Adiciona um novo animal
    }
    
    // Salva o array atualizado no localStorage
    localStorage.setItem('animal', JSON.stringify(animais));
    
    // Limpa os campos do formulário
    document.getElementById('formAnimal').reset();
    
    // Atualiza a lista de animais exibida na tela
    exibirAnimais();
}


//exibir os animais cadastrados
function exibirAnimais() {

    const animais = JSON.parse(localStorage.getItem('animal')) || [];
    
    const listaAnimais = document.getElementById('listaAnimais');
    
    // Limpa a lista antes de preencher novamente
    listaAnimais.innerHTML = '';

    // Itera sobre os animais e cria os elementos para exibi-los
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

        // Botão para excluir o animal
        const botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir';
        botaoExcluir.classList.add('botao-excluir');
        botaoExcluir.onclick = () => excluirAnimal(index); // Passa o índice do animal para exclusão
        animalInfo.appendChild(botaoExcluir);
        
        
        //colocar aqui botão pra editar o animal cadastrado (olhar meu github)
        const botaoEditar = document.createElement('button');
        botaoEditar.textContent = 'Editar';
        botaoEditar.classList.add('botao-editar');
        botaoEditar.onclick = () => editarAnimal(index);  // Chama a função para editar o animal
        animalInfo.appendChild(botaoEditar);

        // Adiciona a imagem e as informações ao item da lista
        li.appendChild(img);
        li.appendChild(animalInfo);

        // Adiciona o item à lista na página
        listaAnimais.appendChild(li);
    });
}

function editarAnimal(index) {
    const animais = JSON.parse(localStorage.getItem('animal')) || [];
    const animal = animais[index];

    document.getElementById('nomeAnimal').value = animal.nomeAnimal;
    document.getElementById('resposta').value = animal.resposta;
    document.getElementById('idade').value = animal.idade;
    document.getElementById('descricao').value = animal.descricao;
    document.getElementById('imagem').value = animal.imagem;
    document.getElementById('genero').value = animal.genero;

    animalEditandoIndex = index;  // Marca o animal que está sendo editado
}

function excluirAnimal(index) {
    const animais = JSON.parse(localStorage.getItem('animal')) || [];

    // Remove o animal do array pelo índice
    animais.splice(index, 1);

    // Atualiza o localStorage com o novo array de animais
    localStorage.setItem('animal', JSON.stringify(animais));

    exibirAnimais();
}

function limparAnimais() {
    localStorage.removeItem('animal');
    exibirAnimais();
}

function sair(){
    document.location.href = 'petcia_login.html'
}

function irParaAdotar() { //quando o botão for acionado, manda o usuário para outra tela//
    document.location.href = 'petcia_telaadotarg.html'
}

window.onload = exibirAnimais

