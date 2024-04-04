var data = new Date()
console.log(data)

var ano = data.getFullYear()
console.log(ano)



var mesesAno = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro",]
var mes = data.getMonth()
console.log(mesesAno[mes])

var diasDaSemana = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sabado",]
let dia = data.getDay()
console.log(diasDaSemana[dia])

var dataBr = data.toLocaleString('pt-BR',{dateStyle:'short'})
console.log(dataBr)

var hoje = new Date()
var vencimento = new Date(2024, 2, 9)
if (hoje > vencimento) {
    console.log('O boleto está vencido')
} else {
    console.log(`O boleto vencerá dia ${vencimento}`)
}