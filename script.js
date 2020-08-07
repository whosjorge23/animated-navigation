const menuBars = document.getElementById('menu-bars')
const overlay = document.getElementById('overlay')
const nav1 = document.getElementById('nav-1')
const nav2 = document.getElementById('nav-2')
const nav3 = document.getElementById('nav-3')
const nav4 = document.getElementById('nav-4')
const nav5 = document.getElementById('nav-5')
const navItems = [nav1, nav2, nav3, nav4, nav5]

//Control Navigation Animation
function navAnimation(directionRemove, directionAdd) {
    navItems.forEach((nav, i) => {
        nav.classList.replace(`slide-${directionRemove}-${i + 1}`,`slide-${directionAdd}-${i + 1}`)
    })
}

function toogleNav() {
    // Toggle: Menu Bars Open/Close
    menuBars.classList.toggle('change')
    //Toggle: Menu Active
    overlay.classList.toggle('overlay-active')
    if (overlay.classList.contains('overlay-active')){
        //Animate In - Overlay
        overlay.classList.replace('overlay-slide-down','overlay-slide-up')
        // Animate In - Nav Items
        navAnimation('out','in')
    }else{
        //Animate Out - Overlay
        overlay.classList.replace('overlay-slide-up','overlay-slide-down')
        //Animate Out - Nav Items
        navAnimation('in','out')
    }
}

//Event listeners
menuBars.addEventListener('click',toogleNav)
navItems.forEach((nav) => {
    nav.addEventListener('click',toogleNav)
})