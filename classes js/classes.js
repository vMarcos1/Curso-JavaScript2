class carro {
    constructor(valor1,valor2,valor3) {
        this.marca = valor1
        this.modelo = valor2
        this.ano = valor3

    }
    buzina() {
        return this.modelo + " Buzinou: Biiiiiiiip"
    }
}

const uno = new carro("Fiat","Uno",2001)
const gol = new carro("volkswagen","gol",2013)
console.log(uno.buzina())
gol.ano = 2014
console.log(gol)