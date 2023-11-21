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

const body = document.querySelector('main')
const presentacion = document.getElementById('presentacion')
const svg = document.querySelector('#fondoSvg')
const menu = document.querySelector('.menu')

const doSomethingAccordingToURL = () => {
    const { pathname } = window.location;

    switch (pathname) {
        case '/':
            body.style.backgroundImage = `url(${PICTURES.Inicio})`
            presentacion.innerHTML = '<p>Bienvenidos a levan sushi, en nuestra web vas a encontrar todos nuestros combos y muchas mas cosas</p>'
            svg.classList.remove('rotatedMinus180')
            svg.classList.remove('rotated90')
            emptyMenu()
            break;
        case '/Menu':
            body.style.backgroundImage = `url(${PICTURES.Menu})`
            presentacion.innerHTML = '<p>En esta seccion encontras nuestro menu completo</p>'
            svg.classList.remove('rotatedMinus180')
            svg.classList.add('rotated90')
            fillMenu()
            break;
        case '/Contacto':
            body.style.backgroundImage = `url(${PICTURES.Contacto})`
            presentacion.innerHTML= '<p>Aqui podras ver nuestras formas de contacto</p>'
            svg.classList.remove('rotated90')
            svg.classList.add('rotatedMinus180')
            emptyMenu()

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


const MENU_ITEMS = [
    {
        name: 'Sushi',
        photo: 'https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg'
    },
    {
        name: 'Sushi',
        photo: 'https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg'
    },
    {
        name: 'Sushi',
        photo: 'https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg'
    },
    {
        name: 'Sushi',
        photo: 'https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg'
    },
    {
        name: 'Sushi',
        photo: 'https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg'
    },
    {
        name: 'Sushi',
        photo: 'https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg'
    },
    {
        name: 'Sushi',
        photo: 'https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg'
    },
    {
        name: 'Sushi',
        photo: 'https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg'
    },
    {
        name: 'Sushi',
        photo: 'https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg'
    },
    {
        name: 'Sushi',
        photo: 'https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg'
    },
    {
        name: 'Sushi',
        photo: 'https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg'
    },
    {
        name: 'Sushi',
        photo: 'https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg'
    }
   
]

const createMenuCard = (obj)=>{
    const {name, photo} = obj;
    const card = document.createElement('div')
    const title = document.createElement('h2')
    const picture = document.createElement('img')
    card.setAttribute('class', 'card')
    title.textContent = name;
    picture.setAttribute('src', photo)
    card.appendChild(title)
    card.appendChild(picture)
    menu.appendChild(card)
}

const fillMenu = () => MENU_ITEMS.forEach((item)=> createMenuCard(item))

const emptyMenu = () => menu.innerHTML = ''