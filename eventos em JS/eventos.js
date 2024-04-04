
function clicar() {
    
    document.body.style.background = 'lightblue'
}

function clickDuplo() {
    alert(`Você clicou duas vezes no botão`) 
}

function entrou() {
    let eve = document.querySelector('.eventos')
    eve.style.backgroundColor = 'green'
    
}

function saiu() {
    let eve = document.querySelector('.eventos')
    eve.style.backgroundColor = "blue"
    
}


function mudou() {
    console.log('Mudou')
 
    
}

function volte() {
    document.querySelector('#texto').value = ''
}

function precionar() {
    var press = document.querySelector('#texto').value
    console.log(`Tecla precionada`)

}
