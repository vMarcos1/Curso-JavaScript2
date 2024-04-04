function veriCor() {
    let campo = document.getElementById('campo').value
    let texto = document.getElementById('texto')
    campo = campo.toLowerCase()
   

   switch (campo) {
    case "azul":
        document.body.style.backgroundColor = "blue"
        texto.innerHTML = "Acertou"
        texto.style.color = 'green'
        
        break

    case "preto":
        document.body.style.backgroundColor = "black"
        texto.innerHTML = "Acertou"
        texto.style.color = 'green'
        document.body.style.color = "white"
         
        
        break

    case "cinza":
        document.body.style.backgroundColor = "lightgray"
        texto.innerHTML = "Acertou"
        texto.style.color = 'white'
        
        break



    default:
        texto.innerHTML = " Cor errada"
        texto.style.color = 'red'
        
   }
}
