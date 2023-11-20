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
const presentacion = document.getElementById('presentacion')

const doSomethingAccordingToURL = () => {
    const { pathname } = window.location;

    switch (pathname) {
        case '/':
            body.style.backgroundImage = `url(${PICTURES.Inicio})`
            presentacion.innerHTML = '<p>Bienvenidos a levan sushi, en nuestra web vas a encontrar todos nuestros combos y muchas mas cosas</p>'
            break;
        case '/Menu':
            body.style.backgroundImage = `url(${PICTURES.Menu})`
            presentacion.innerHTML = '<p>En esta seccion encontras nuestro menu completo</p>'
            break;
        case '/Contacto':
            body.style.backgroundImage = `url(${PICTURES.Contacto})`
            presentacion.innerHTML= '<p>Aqui podras ver nuestras formas de contacto</p>'

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
