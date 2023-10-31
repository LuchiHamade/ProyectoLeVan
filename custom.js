const navButton = document.getElementById('hamburguer')
const navList = document.getElementById('navUl')

navButton.onclick = () => {
    const styles = getComputedStyle(navList)
    const { left } = styles;
    if(left === '-200px'){
        navList.style.left = 0
    }else{
        navList.style.left = '-200px'
    }
}

window.onresize =  () => {
    if(window.innerWidth > 760){
        navList.stoyle.left = '60vw'
        
    }
}

    const PICTURES = {
        inicio: 'https://pixabay.com/es/photos/bolas-de-sushi-comida-japonesa-5878892',
        contacto: 'https://pixabay.com/es/photos/sushi-men%C3%BA-restaurante-comida-8113165/',
        menu:'https://pixabay.com/es/photos/sushi-vegetariano-verduras-arroz-2112350/',
    }

    const body = document.querySelector('body')

    const doSomethingAccordingToURL = ()=>{
        const {pathname} = window.location;

        switch(pathname){
            case '/':
                body.style.backgroundImage = `url(${PICTURES.start})`
                break;
            case '/CONTACTO':
                body.style.backgroundImage = `url(${PICTURES.contact})`
                break;
            case '/MENU':
                body.style.backgroundImage = `url(${PICTURES.menu})`
                break;
        }
    }
    
    const li = document.querySelectorAll('li')
    li.forEach( (node)=>{
        node.onclick = (e) => {
            const content = e.target.textContent
            window.history.pushState({}, content, content == 'INICIO' ? ' /' : content)
            doSomethingAccordingToURL()
        }
    })

    window.onload = ()=> doSomethingAccordingToURL()