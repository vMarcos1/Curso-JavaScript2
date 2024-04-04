const carros = ["Gol", "Fusca", "Brasília", "Del Rey", "Chevette"]
var tamanho = carros.length


for (let icarro = 0; icarro < tamanho; icarro++)
document.querySelector('#carro').innerHTML += "<option value='" + carros[icarro] + "'>" + carros[icarro] + "</option>"