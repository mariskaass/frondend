// JavaScript Document
console.log("hi");

//CONSTANTEN
const articles = document.getElementsByClassName('snap_article');
const section_snap = document.getElementById('snap');
const header = document.querySelector('header');
const logo = document.getElementById('logo')
//VARIABELEN



//FUNCTIES
//scrollen veranderen
function scrollsnap() {
    console.log(window.scrollY)
    if (window.scrollY > (window.innerHeight)*0.01) {
        console.log("we zijn er");
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




//EVENTLISTENERS

//SETINTERVAL
setInterval(scrollsnap,100);
setInterval(header_change, 100)