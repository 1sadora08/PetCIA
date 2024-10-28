// Função para adicionar um produto ao localStorage
function cadastrarAnimal(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const preco = document.getElementById('preco').value;
    const descricao = document.getElementById('descricao').value;

    const produto = {
        email,
        preco,
        descricao
    };

    // Recupera os produtos existentes do localStorage
    const animal = JSON.parse(localStorage.getItem('animal')) || [];
    produtos.push(produto);

    // Salva os produtos atualizados no localStorage
    localStorage.setItem('animal', JSON.stringify(produtos));

    // Limpa os campos do formulário
    document.getElementById('formAnimal').reset();

    // Atualiza a lista de produtos exibida
    exibirProdutos();
}

// Função para exibir os produtos cadastrados
function exibirAnimais() {
    const animais = JSON.parse(localStorage.getItem('animal')) || [];
    const listaProdutos = document.getElementById('listaAnimais');
    listaProdutos.innerHTML = '';

    animais.forEach(animais => {
        const li = document.createElement('li');
        li.textContent = `${animais.nome} - R$${animais.preco} - ${animais.descricao}`;
        listaAnimais.appendChild(li);
    });
}

function limparAnimais() {
    localStorage.removeItem('animal');
    exibirProdutos();
}

// Adiciona o evento de submissão do formulário
document.getElementById('formAnimal').addEventListener('submit', cadastrarAnimal);

// Exibe os produtos cadastrados ao carregar a página
window.onload = exibirAnimais;

//em desenvolvimento