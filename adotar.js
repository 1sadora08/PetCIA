 function carregarDetalhesAnimal() {
    // Obtém o índice do animal na URL
    const urlParams = new URLSearchParams(window.location.search);
    const indice = parseInt(urlParams.get('indice'), 10);

    // Obtém os animais cadastrados do localStorage
    const animais = JSON.parse(localStorage.getItem('animal')) || [];

    // Verifica se o índice é válido
    if (indice >= 0 && indice < animais.length) {
        const animal = animais[indice];

        // Atualiza as informações na tela
        document.getElementById('fotoAnimal').src = animal.imagem;
        document.getElementById('nomeAnimal').textContent = `Nome: ${animal.nomeAnimal}`;
        document.getElementById('resposta').textContent = `Nome: ${animal.resposta}`;
        document.getElementById('idade').textContent = `Idade: ${animal.idade}`;
        document.getElementById('genero').textContent = `Gênero: ${animal.genero}`;
        document.getElementById('descricao').textContent = `História: ${animal.descricao}`;
    } else {
        alert('Animal não encontrado.');
    }
}

window.onload = carregarDetalhesAnimal;