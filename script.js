const menuBars = document.getElementById('menu-bars')
const overlay = document.getElementById('overlay')
const nav1 = document.getElementById('nav-1')
const nav2 = document.getElementById('nav-2')
const nav3 = document.getElementById('nav-3')
const nav4 = document.getElementById('nav-4')
const nav5 = document.getElementById('nav-5')

function toogleNav() {
    // Toggle: Menu Bars Open/Close
    menuBars.classList.toggle('change')
    //Toggle: Menu Active
    overlay.classList.toggle('overlay-active')
    if (overlay.classList.contains('overlay-active')){
        //Animate In - Overlay
        overlay.classList.add('overlay-slide-right')
        overlay.classList.remove('overlay-slide-left')
        // Animate In - Nav Items
        nav1.classList.add('slide-in-1')
        nav1.classList.remove('slide-out-1')
        nav2.classList.add('slide-in-2')
        nav2.classList.remove('slide-out-2')
        nav3.classList.add('slide-in-3')
        nav3.classList.remove('slide-out-3')
        nav4.classList.add('slide-in-4')
        nav4.classList.remove('slide-out-4')
        nav5.classList.add('slide-in-5')
        nav5.classList.remove('slide-out-5')
    }else{
        //Animate Out - Overlay
        overlay.classList.remove('overlay-slide-right')
        overlay.classList.add('overlay-slide-left')
        //Animate Out - Nav Items
        nav1.classList.remove('slide-in-1')
        nav1.classList.add('slide-out-1')
        nav2.classList.remove('slide-in-2')
        nav2.classList.add('slide-out-2')
        nav3.classList.remove('slide-in-3')
        nav3.classList.add('slide-out-3')
        nav4.classList.remove('slide-in-4')
        nav4.classList.add('slide-out-4')
        nav5.classList.remove('slide-in-5')
        nav5.classList.add('slide-out-5')
    }
}

//Event listeners
menuBars.addEventListener('click',toogleNav)
nav1.addEventListener('click',toogleNav)
nav2.addEventListener('click',toogleNav)
nav3.addEventListener('click',toogleNav)
nav4.addEventListener('click',toogleNav)
nav5.addEventListener('click',toogleNav)