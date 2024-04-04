

function buscar() {
    let campoTexto = document.querySelector('#cep').value

    const ajax = new XMLHttpRequest()
    ajax.open('GET', 'https://viacep.com.br/ws/' + campoTexto +'/json/')
    ajax.send()

    ajax.onload = function () {
        document.querySelector('#texto').innerHTML = this.responseText
        let obj = JSON.parse(this.responseText)
        let logradouro = obj.logradouro
        let cep = obj.cep
        let localidade = obj.localidade
        let estado = obj.uf

        document.querySelector('#texto').innerHTML = `
        Localidade: ${localidade} <br>
        Estado: ${estado} <br>
        Logradouro: ${logradouro} <br>
        CEP: ${cep} <br>`
        
    }

}