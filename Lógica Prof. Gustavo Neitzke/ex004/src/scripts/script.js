function enviar() {
var a = document.getElementById('valor')
var b = document.getElementById('valor2')
var ida = Number(a.value)
var idad = Number(b.value)
var som = (ida + idad ) 
var sub =  (ida - idad ) 
var divi = (ida / idad)
var mult = (ida * idad)
alert(`A soma entre ${ida} e ${idad} é igual a ${som} `)
alert(`A subtração entre ${ida} e ${idad} é igual a ${sub} `)
alert(`A divisão entre ${ida} e ${idad} é igual a ${divi} `)
alert(`A multiplicação entre ${ida} e ${idad} é igual a ${mult} `)

}