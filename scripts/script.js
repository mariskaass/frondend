// JavaScript Document
console.log("hi");

//CONSTANTEN
const articles = document.getElementsByClassName('snap_article');
const section_snap = document.getElementById('snap');
const header = document.querySelector('header');
const logo = document.getElementById('logo');
const cursor = document.getElementsByTagName('div')[0];
//VARIABELEN



//FUNCTIES
//scrollen veranderen
function scrollsnap() {
    console.log(window.scrollY)
    if (window.scrollY > (window.innerHeight)*0.01) {
        for(let i = 0; i < articles.length; i++) {
            articles[i].classList.remove('snap_child');
        }
        section_snap.classList.remove('snap_parent');
    } else {
        console.log("nog niet");
        for(let i = 0; i < articles.length; i++) {
            articles[i].classList.add('snap_child');
        }
        section_snap.classList.add('snap_parent');
    }
}

function header_change() {
    if (section_snap.scrollTop > (window.innerHeight)*0.3) {
        header.classList.add('header2')
        logo.src = "/images/vleugel_popetje.svg"
    } else {
        header.classList.remove('header2')
        logo.src = "/images/RR.svg"
    }
}  

function cursor_move(event) {
    cursor.style.top = event.clientY + 'px'
    cursor.style.left = event.clientX + 'px'
}




//EVENTLISTENERS
window.addEventListener('mousemove',cursor_move);
// window.addEventListener('scroll',scrollsnap);
// window.addEventListener('scroll',header_change);
// window.addEventListener('scroll',()=>{console.log('scroll')});

//SETINTERVAL
setInterval(scrollsnap,100);
setInterval(header_change, 100)