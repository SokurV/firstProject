let buttonMenu = document.getElementById('header__burger_button')
let blockMenu = document.getElementById('menu')

buttonMenu.addEventListener('click', ()=>{
    blockMenu.classList.toggle('responsive_menu')

})

function scrollTo(elem) {
    window.scroll({
        left: 0,
        top: elem.offsetTop - 60,
        behavior: 'smooth'
    })
}

blockMenu.addEventListener('click', (evt)=>{
    evt.preventDefault()
    if(evt.target.classList.contains('menu')) {
        blockMenu.classList.remove('responsive_menu')
    }

    let targetBlock = document.getElementById(evt.target.textContent.toLowerCase())
    scrollTo(targetBlock) 

})


