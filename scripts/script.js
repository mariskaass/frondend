// JavaScript Document

//CONSTANTEN
const articles = document.getElementsByClassName('snap_article');
const section_snap = document.getElementById('snap');
const header = document.querySelector('header');
const logo = document.getElementById('logo');
const cursor = document.getElementsByTagName('div')[0];
const menu = document.getElementById('burger');
const menu_items = document.getElementById('menu_list');
//VARIABELEN
let state_header = true;
let state_menu = false; 


//FUNCTIES
//burger menu
function menu_openclose() {
    if (state_menu == false) {
        menu_items.style.display = 'block';
        state_menu = true;
        header.style.backdropFilter = 'none'
        menu.textContent= 'x'

    }else {
        menu_items.style.display = 'none';
        state_menu = false;
        header.style.backdropFilter = 'blur(1vh)'
        menu.textContent = 'menu'
    }
} 


//scrollen veranderen
function scrollsnap() {
    
    if (window.scrollY > (window.innerHeight)*0.01) {
        for(let i = 0; i < articles.length; i++) {
            articles[i].classList.remove('snap_child');
        }
        section_snap.classList.remove('snap_parent');
    } else {
        for(let i = 0; i < articles.length; i++) {
            articles[i].classList.add('snap_child');
        }
        section_snap.classList.add('snap_parent');
    }
}

function header_change() {
    if (section_snap.scrollTop > (window.innerHeight)*0.3 && state_header == false ) {
        header.classList.add('header2')
        logo.src = "/images/vleugel_popetje.svg"
        state_header = true
    } else if (section_snap.scrollTop < (window.innerHeight)*0.3 && state_header == true ){
        header.classList.remove('header2')
        logo.src = "/images/RR.svg"
        state_header = false
    }
}  

function cursor_move(event) {
    cursor.style.top = event.clientY + 'px'
    cursor.style.left = event.clientX + 'px'
}




//EVENTLISTENERS
window.addEventListener('mousemove',cursor_move);
menu.addEventListener('click', menu_openclose)
// window.addEventListener('scroll',scrollsnap);
// window.addEventListener('scroll',header_change);
// window.addEventListener('scroll',()=>{console.log('scroll')});

//SETINTERVAL
setInterval(scrollsnap,100);
setInterval(header_change, 100)