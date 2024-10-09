function irParaAdotar() { //quando o botão for assionado, manda o usuário para outra tela//
    document.location.href = 'petcia_telaadotar.html'
}

function irParaInicial() {  //quando o botão for assionado, manda o usuário para outra tela//
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