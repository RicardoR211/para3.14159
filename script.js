const yesBtn = document.getElementById('green');
const redBtn = document.getElementById('red');

const textos = [
    "Tem certeza?",
    "Muita certeza?",
    "Tu ta brava?",
    "Poxa, pi",
    "Pensa um pouquinho",
    "Se for um nao eu vou ficar triste",
    "Tipo muuuuuiiiiito triste",
    "Ta, vou parar de perguntar",
    "Caô, fala sim ae na humilda ❤️"
]

let textoIndex = 0;

function clicarBotaoNao(){
    console.log("funcionando")
    redBtn.textContent = textos[textoIndex];
    textoIndex = (textoIndex + 1) % textos.length;
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = `${currentSize * 1.5}px`;
}

function clicarBotaoSim(){
    window.location.href = "yes.html";
}