// TRIO: MARIA LUIZA BANDEIRA DE MATOS, GABRIEL OLIVEIRA SOUZA, IGOR GABRIEL DE SOUZA OLIVEIRA

var lamp = document.getElementById('lamp')
var inicial = false

lamp.addEventListener ("click", function(){
    if (inicial){
        document.body.style.background = "radial-gradient(circle, white 8%, rgb(0, 0, 0) 100%"
        lamp.src = "assets/lamp_off.png"
        lamp.alt = "Lâmpada apagada"
        inicial = false;
    }else{
        document.body.style.background = "radial-gradient(circle, white 8%, rgb(235, 182, 8) 100%"
        lamp.src = "assets/lamp_on.png"
        lamp.alt = "Lâmpada ligada"
        inicial = true
    }
})