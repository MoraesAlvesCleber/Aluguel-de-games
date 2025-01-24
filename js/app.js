let jogosAlugados = 0;

function contarEExibirJogosAlugados(){
    console.log(`Quantidade de jogos Alugados ${jogosAlugados}`);
}
function alterarStatus(id, event) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    event.preventDefault();

    if (imagem.classList.contains('dashboard__item__img--rented')) {

        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            imagem.classList.remove('.dashboard__item__img--rented');
            botao.classList.remove('.dashboard__item__button--return');
            botao.textContent = 'Alugar';
        }
    } else {
        imagem.classList.add('.dashboard__item__img--rented');
        botao.classList.add('.dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++;
    }
    contarEExibirJogosAlugados();
} 
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});
setTimeout(function() {
    alert('Executado após 2 segundos!');
}, 2000);
