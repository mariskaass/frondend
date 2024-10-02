// JavaScript Document

//CONSTANTEN
const articles = document.getElementsByClassName('snap_article');
const section_snap = document.getElementById('snap');
const header = document.querySelector('header');
const logo = document.getElementById('logo');
const cursor = document.getElementsByTagName('div')[0];
const menu = document.getElementById('burger');
const menu_items = document.getElementById('menu_list');
const models = document.getElementById('models');
const models_small = document.getElementById('models_small');
const body = document.querySelector('body')
const nav = document.querySelector('nav')
//VARIABELEN
let state_header = true;
let state_menu = false; 
let state_models = false;


//FUNCTIES

function models_openclose() {
    if(state_models == false) {
        models_small.classList.add('menu_open');
        state_models = true;
        models.style.margin = '-32vh 0 0 40vw';
        models.classList.add('models_open')
        menu_items.style.display = 'none'
    } else {
        models_small.classList.remove('menu_open');
        state_models = false;
        models.style.margin = '';
        menu_items.style.display = '';
        models.classList.remove('models_open')
    }
}

//burger menu
function menu_openclose() {
    if (state_menu == false) {
        menu_items.classList.add('menu_open');
        state_menu = true;
        header.style.backdropFilter = 'none';
        menu.textContent= 'x';
        models.style.translate = '0';
        body.style.overflow = 'hidden';
        nav.classList.add('blur');
    }else {
        menu_items.classList.remove('menu_open');
        state_menu = false;
        header.style.backdropFilter = '';
        menu.textContent = 'menu';
        if(state_models == true) {
            models_openclose();
        }
        models.style.translate = '';
        body.style.overflow = ''
        nav.classList.remove('blur');
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
        header.classList.add('header2');
        logo.src = "/images/vleugel_popetje.svg";
        state_header = true;
    } else if (section_snap.scrollTop < (window.innerHeight)*0.3 && state_header == true ){
        header.classList.remove('header2');
        logo.src = "/images/RR.svg";
        state_header = false;
    }
}  


//EVENTLISTENERS
window.addEventListener('mousemove',(event)=> {
    cursor.style.top = event.pageY + 'px'
    cursor.style.left = event.pageX + 'px'
});
menu.addEventListener('click', menu_openclose);
models.addEventListener('click', models_openclose);

//SETINTERVAL
setInterval(scrollsnap,100);
setInterval(header_change, 100);

// const button = document.getElementById('id_van_button')//namen van const en let kun je veranderen naar iets dat logisch is
// const fieldset = document.getElementById('id_van_fieldset')
// let state_fieldset = true //true al is ie open en false al is t verborgen

// function verbergen_openen() {
//     if(state_fieldset == true) {
//         //als ie niet verborgen is willen we t verbergen
//         fieldset.style.display = 'none'
//         state_fieldset = false //t is nu verborgen dus dan moet state false zijn
//         button.textContent = 'laten zien' //al wil je dat de tekst van knop veranderd 
//     }else {
//         //al is t wel verborgen dan willen we t terug brengen
//         fieldset.style.display = '' //als je t leeg laat dan gaat t weer terug naar hoe t in je css staat
//         state_fieldset = true
//         button.textContent = 'verbergen' //al wil je dat de tekst van knop veranderd 
//     }
// }

// button.addEventListener('click',verbergen_openen)//roep de functie aan al klik je op de knop