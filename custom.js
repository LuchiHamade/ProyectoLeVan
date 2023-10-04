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

window.onresize( () => {
    if(clientWidth > 760){
        navList.style.left = '60vw'

    }
})