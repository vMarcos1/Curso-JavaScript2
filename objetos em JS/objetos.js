const carro = {marca: "Ford", modelo: "ka", cor: "Branco", ano: 2015, placa: "ABC-1234", buzina: function() {
    alert('Biiiiiiiiiiiiiiiiip')
},
completo: function() {
    return `a marca é ${carro.marca} e o modelo é ${carro.modelo}`
        
}

}
console.log(carro.completo())

