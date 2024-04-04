var menuItem = document.querySelectorAll('.item-menu')

function selecionar() {
    menuItem.forEach((item)=>
    item.classList.remove('ativo')
    ) 
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
item.addEventListener('click', selecionar)

)



var btnExp = document.querySelector('#exp')
var menuSide = document.querySelector('.menu')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})
