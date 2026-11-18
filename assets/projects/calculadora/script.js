// ALUNA: MARIA LUIZA BANDEIRA DE MATOS

var tela = document.getElementById("display")
var btn = document.querySelectorAll("body .btn")

function mudarCor(valor){
    btn.forEach(function(botao){
        if (botao.textContent == valor){
            botao.style.backgroundImage = "linear-gradient(red, black)"
        }
        setTimeout(function(){
            botao.style.backgroundImage = ""
        }, 100)
    })
}

function pressed(valor){
    if (tela.textContent == "Erro") {
        tela.textContent = ""
    }

    if (tela.textContent.length >= 10){
        return
    }

    const operadores = ["+", "-", "*", "/", "."]
    const ultimo = tela.textContent.slice(-1)

    if (operadores.includes(valor) && operadores.includes(ultimo)) {
        tela.textContent = "Erro"
        return
    }

    mudarCor(valor)

    if (valor == "." && (tela.textContent == "" || operadores.includes(ultimo))) {
        valor = "0."
    }

    tela.textContent += valor
}

function clearAll(){
    tela.textContent = ""
    mudarCor("C")
}

function backspace(){
    tela.textContent = tela.textContent.slice(0, -1)
    mudarCor("<")
}

function calculate(){
    var expressao = tela.textContent

    try {
        var resultado = eval(expressao)

        if (!isFinite(resultado)) {
            tela.textContent = "Erro"
        } else {
            tela.textContent = resultado
        }
    } catch (erro) {
        tela.textContent = "Erro"
    }
    mudarCor("=")
}

document.addEventListener("keydown", function(event){
    if (event.key === "0"){
        pressed(0)
    }
    if (event.key === "1"){
        pressed(1)
    }
    if (event.key === "2"){
        pressed(2)
    }
    if (event.key === "3"){
        pressed(3)
    }
    if (event.key === "4"){
        pressed(4)
    }
    if (event.key === "5"){
        pressed(5)
    }
    if (event.key === "6"){
        pressed(6)
    }
    if (event.key === "7"){
        pressed(7)
    }
    if (event.key === "8"){
        pressed(8)
    }
    if (event.key === "9"){
        pressed(9)
    }
    if (event.key === "+"){
        pressed("+")
    }
    if (event.key === "-"){
        pressed("-")
    }
    if (event.key === "/"){
        pressed("/")
    }
    if (event.key === "*"){
        pressed("*")
    }
    if (event.key === "."){
        pressed(".")
    }
    if (event.key === "Backspace"){
        mudarCor("<")
        backspace()
    }
    if (event.key === "Enter"){
        mudarCor("=")
        calculate()
    }
    if (event.key === "Escape"){
        mudarCor("C")
        clearAll()
    }
})