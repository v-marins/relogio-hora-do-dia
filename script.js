var intervald = window.setInterval(() => {carregar()},1000);

function carregar(){
var horario = window.document.getElementById("horario")
var msg = window.document.getElementById("msg")
var img = window.document.getElementById("imagem")
var data = new Date()
var hora = data.getHours()
var horaString = data.toLocaleTimeString()
horario.innerHTML = `São Exatamente: ${horaString}`

if(hora >= 0 && hora < 12){
    //BOM DIA!
    img.src = "images/manha.jpg"
    msg.innerHTML = "<Strong>Bom Dia!</strong>"
    document.body.style.background = "#F7D7A5"
} else if(hora >= 12 && hora < 18){
    //BOA TARDE!
    img.src = "images/tarde.jpg"
    msg.innerHTML = "<Strong>Boa Tarde!</strong>"
    document.body.style.background = "#DBA7CE"
} else{
    //BOA NOITE!
    img.src = "images/noite.jpg"
    msg.innerHTML = "<Strong>Boa Noite!</strong>"
    document.body.style.background = "#3F3252"
}
}