function irParaAdotar() { //quando o botão for assionado, manda o usuário para outra tela//
    document.location.href = 'petcia_telaadotarg.html'
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

function irParaAdotarcao() { //quando o botão for assionado, manda o usuário para outra tela//
    document.location.href = 'petcia_telaadotarc.html'
}

function irParaAdotarcoelho() { //quando o botão for assionado, manda o usuário para outra tela//
    document.location.href = 'petcia_telaadotarcoe.html'
}

function irParaAdotarpassaro() { //quando o botão for assionado, manda o usuário para outra tela//
    document.location.href = 'petcia_telaadotarpassaro.html'
}

function irParaDescrição() { //quando o botão for assionado, manda o usuário para outra tela//
    document.location.href = 'Descrição_Animal.html'
}

function cadastrodoanimal() { //quando o botão for assionado, manda o usuário para outra tela//
    document.location.href = 'Cadastro_Animal.html'
}
