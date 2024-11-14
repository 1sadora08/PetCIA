function exibirAnimais() {
    const animais = JSON.parse(localStorage.getItem('animal')) || [];
    const listaAnimais = document.getElementById('ListaDescrição');
    listaAnimais.innerHTML = '';

    animais.forEach((animal, ) => {
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

        // Adiciona o item da lista à lista principal
        listaAnimais.appendChild(li);
    });
}
exibirAnimais(); 
