function enviar() {
var graus = document.getElementById('valor')
var cel = Number(graus.value)
var fahr = (cel * 1.8) + 32
alert(`Agora esta fazendo ${cel} graus Celsius, que em Fahrenheights fica ${fahr}`)
}