const lista = new Array("Arroz", "Feijão", "Macarrão", "Leite")
const lista2 = ["Vinagre", "Maionese", "Oleo", "Molho"]
const lista3 = ["salgadinho", "Batata frita"]

const superLista = lista.concat(lista2, lista3)

lista.push("Carne")

/*lista.pop()
lista.shift()
lista.unshift("Granola")
delete lista[2]
lista.splice(2,1, "Camarão", "Cebola")
document.getElementById("teste").innerHTML = superLista*/

/*const jogadores = ["Biro-Biro", "Ribamar", "Pelé", "Maradona","Neymar","Messi", "Cristiano Ronaldo", "Vapeta", "Dimitri"]
const craques = jogadores.slice(2,7)
console.log(craques) 
const jogOrdem = jogadores.reverse()
console.log(jogOrdem)*/

const numeros = [25, 1, 40, 10, 5, 100]
const maior20 = numeros.filter(filtragem)
console.log(maior20)

function filtragem(value, index,array) {
    return value > 20

}

numeros.sort(function (a,b) {return a - b})
 

function maiorNumero (array) {
    return Math.max.apply(null, array)
}

function menorNumero(array) {
    return Math.min.apply(null, array)

}


