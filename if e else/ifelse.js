function enviar() {
    let campo = document.getElementById('campo').value
   

    if (campo == "" || campo == null) {
        let texto = document.getElementById('texto')
        texto.innerHTML = 'O campo não pode ser vazio'
        texto.style.color = 'red'
    } else {
        texto.innerHTML = 'Parabéns, tudo certinho!'
        texto.style.color = 'green'
    }
}

