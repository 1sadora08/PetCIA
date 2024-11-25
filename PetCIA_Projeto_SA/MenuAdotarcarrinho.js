function abriradocao() {
    let carrinhoAdocao = document.getElementById('carrinhoAdocao');
    carrinhoAdocao.style.display = 'block'; 

    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const listaAdotados = document.getElementById('listaAdotados');
    listaAdotados.innerHTML = '';  // Limpa a lista para que a exibição seja atualizada.

    // Se o carrinho estiver vazio, exibe uma mensagem e retorna para não tentar criar elementos
    if (carrinho.length === 0) {
        listaAdotados.innerHTML = 'Seu carrinho está vazio!';
        return;
    }

    // Itera sobre os itens do carrinho (cada item é um produto).
    carrinho.forEach((animal, index) => {
        const li = document.createElement('li');
        
        const img = document.createElement('img');
        img.src = animal.imagem;
        img.style.margin = '5px';  
        img.style.width = '300px';    
        img.style.height = 'auto';   

       
        li.textContent = `${animal.nomeAnimal}`;

        
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remover';  // Define o texto do botão.
        removeBtn.classList.add('remove-from-cart-btn');  // CSS para estilizar esse botão.

        removeBtn.onclick = () => removerDoCarrinho(index);  
        li.appendChild(img);
        li.appendChild(removeBtn);

        // Adiciona o item da lista (<li>) à lista do carrinho na página HTML.
        listaAdotados.appendChild(li);
    });
}

function removerDoCarrinho(index) {
    // 1. Recupera os itens do carrinho do localStorage
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // 2. Remove o animal pelo índice
    carrinho.splice(index, 1);

    // 3. Atualiza o carrinho no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    // 4. Atualiza a visualização do carrinho
    abriradocao();  // Recarrega a lista do carrinho para refletir as mudanças
}
