function enviar() {
var a = document.getElementById('valor')
var b = document.getElementById('valor2')
var ida = Number(a.value)
var idad = Number(b.value)
var som = (ida + idad ) 
var med = som / 2
alert(`A soma entre ${ida} e ${idad} é igual a ${som} e tem media ${med}`)

}