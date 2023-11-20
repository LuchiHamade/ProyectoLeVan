const navButton = document.getElementById('hamburguer')
const navList = document.getElementById('navUl')

navButton.onclick = () => {
    const styles = getComputedStyle(navList)
    const { left } = styles;
    if (left === '-200px') {
        navList.style.left = 0;
        navList.style.top = '80px';

    } else {
        navList.style.left = '-200px'
    }
}

window.onresize = () => {
    if (window.innerWidth > 760) {
        navList.style.left = '60vw'

    }
}

const PICTURES = {
    'Inicio': '/assets/images/sushi.inicio.jpg',
    'Menu': '/assets/images/sushi.menu.jpg',
    'Contacto': '/assets/images/sushi.contacto.jpg',
}

const body = document.querySelector('body')

const doSomethingAccordingToURL = () => {
    const { pathname } = window.location;

    switch (pathname) {
        case '/':
            body.style.backgroundImage = `url(${PICTURES.Inicio})`
            break;
        case '/Menu':
            body.style.backgroundImage = `url(${PICTURES.Menu})`
            break;
        case '/Contacto':
            body.style.backgroundImage = `url(${PICTURES.Contacto})`
            break;
    }
}

const listItems = document.querySelectorAll('li')
listItems.forEach((node) => {
    node.onclick = (e) => {
        const content = e.target.textContent
        window.history.pushState({}, content, content == 'Inicio' ? '/' : content)
        doSomethingAccordingToURL()
    }
})

window.onload = () => doSomethingAccordingToURL()

const presentacion = document.getElementById('presentacion')
