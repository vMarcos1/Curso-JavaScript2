function ativarContagem() {
    document.querySelector('#teste').innerHTML = 'Começou a contar!'
    tempo = setTimeout(function() {
        document.querySelector('#teste').innerHTML = 'Executou o setTimeOut'
        document.body.style.backgroundColor = 'red'
    }, 5000)
}

function pararContagem() {
    clearTimeout(tempo)
    document.querySelector('#teste').innerHTML = 'Parou a contagem'

}

function comecar() {
    tempo = setInterval(function () {
    var cronometro = document.querySelector('#teste').innerHTML
    var  soma = Number(cronometro) - 1
        if (soma === 0) {
            
            alert('Tempo esgotado')
            parar()
            
        } else {
            document.querySelector('#teste').innerHTML = soma
        }
        document.querySelector('#teste').innerHTML = soma
    }, 1000)
}

function parar() {
    clearInterval(tempo)
}
