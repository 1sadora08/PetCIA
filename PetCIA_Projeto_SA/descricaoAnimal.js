
window.onload = () => {
    // Recupera o animal armazenado no localStorage
    const animal = JSON.parse(localStorage.getItem('animalclicado'));

    // Preenche os elementos HTML com os dados do animal
    document.getElementById('AnimalImagem').src = animal.imagem;
    document.getElementById('animalNome').textContent = `Nome: ${animal.nomeAnimal}`;
    document.getElementById('animalEspecie').textContent = `Espécie: ${animal.resposta}`;
    document.getElementById('animalIdade').textContent = `Idade: ${animal.idade} Ano(s)`;
    document.getElementById('animalGenero').textContent = `Gênero: ${animal.genero}`;
    document.getElementById('animalDescricao').textContent = `Descrição: ${animal.descricao}`;
};