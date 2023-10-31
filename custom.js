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
        inicio: '././assets/images/sushi.inicio.jpg',
        contacto: '././assets/images/sushi.contacto.jpg',
        menu:'././assets/images/sushi.menu.jpg',
    }

    const body = document.querySelector('body')

    const doSomethingAccordingToURL = ()=>{
        const {pathname} = window.location;

        switch(pathname){
            case '/':
                body.styles.backgroundImage = `url(${PICTURES.start})`
                break;
            case '/CONTACTO':
                body.styles.backgroundImage = `url(${PICTURES.contact})`
                break;
            case '/MENU':
                body.styles.backgroundImage = `url(${PICTURES.menu})`
                break;
        }
    }
    
    const listItems = document.querySelectorAll('li')
    listItems.forEach( (node)=>{
        node.onclick = (e) => {
            const content = e.target.textContent
            window.history.pushState({}, content, content == 'INICIO' ? ' /' : content)
            doSomethingAccordingToURL()
        }
    })

    window.onload = ()=> doSomethingAccordingToURL()