const escolhaComputadorDisplay = document.getElementById('escolha-computador')
const escolhaUsuarioDisplay = document.getElementById('escolha-usuario')  
const resultadoDisplay = document.getElementById('resultado')
const possiveisEscolhas = document.querySelectorAll('button')
let escolhaUsuario
let escolhaComputador
let resultado

possiveisEscolhas.forEach(possiveisEscolhas => possiveisEscolhas.addEventListener('click', (e) => {
    escolhaUsuario = e.target.id
    escolhaUsuarioDisplay.innerHTML = escolhaUsuario
    gerarEscolhaComputador()
    pegarResultado()
}))
function gerarEscolhaComputador() {
    const numeroRandom = Math.floor(Math.random() * possiveisEscolhas.length)
    console.log(numeroRandom)

    if (numeroRandom === 1) {
        escolhaComputador = 'pedra'
    }
    if (numeroRandom === 2) {
        escolhaComputador = 'tesoura'
    }
    if (numeroRandom === 3) {
        escolhaComputador = 'papel'
    }
    escolhaComputadorDisplay.innerHTML = escolhaComputador
}

function pegarResultado(){
    if (escolhaComputador === escolhaUsuario) {
        resultado = 'Empate! &#x1F624;'
    }
    if (escolhaComputador === 'pedra' && escolhaUsuario ==='papel') {
        resultado = 'Você ganhou! &#x1F973;'
    }
    if (escolhaComputador === 'pedra' && escolhaUsuario ==='tesoura') {
        resultado = 'Perdeste! &#x1F62D;'
    }
    if (escolhaComputador === 'tesoura' && escolhaUsuario ==='papel') {
        resultado = 'Perdeste! &#x1F62D;'
    }
    if (escolhaComputador === 'papel' && escolhaUsuario ==='tesoura') {
        resultado = 'Você ganhou! &#x1F973;'
    }
    if (escolhaComputador === 'tesoura' && escolhaUsuario ==='pedra') {
        resultado = 'Você ganhou! &#x1F973;'
    }
    if (escolhaComputador === 'tesoura' && escolhaUsuario ==='tesoura') {
        resultado = 'Empate! &#x1F624;'
    }
    if (escolhaComputador === 'papel' && escolhaUsuario ==='pedra') {
    resultado = 'Perdeste! &#x1F62D;'
    }
    resultadoDisplay.innerHTML = resultado
}