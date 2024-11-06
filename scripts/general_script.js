// JavaScript Document

//CONSTANTEN
const header = document.querySelector('header');
const logo = document.getElementById('logo');
const cursor = document.getElementById('cursor');
const menu = document.getElementById('burger');
const menu_items = document.getElementById('menu_list');
const models = document.getElementById('models');
const models_small = document.getElementById('models_small');
const body = document.querySelector('body');
const nav = document.querySelector('nav');
const models_big = document.getElementById('right_pictures');
const models_big_list = document.getElementById('models_big');
const model1 = document.getElementsByClassName('model_knop')[0];
const model2 = document.getElementsByClassName('model_knop')[1];
const model3 = document.getElementsByClassName('model_knop')[2];
const model4 = document.getElementsByClassName('model_knop')[3];
const model5 = document.getElementsByClassName('model_knop')[4];
const model6 = document.getElementsByClassName('model_knop')[5];
const model7 = document.getElementsByClassName('model_knop')[6];

//VARIABELEN
let state_menu = false; 
let state_models = false;


//FUNCTIES
function models_openclose() {
    if(state_models == false) {
        models_small.classList.add('menu_open');
        models_big_list.classList.add('menu_open');
        models_big.style.translate = '0';
        state_models = true;
        models.style.margin = '-32vh 0 0 40vw';
        models.classList.add('models_open')
        menu_items.style.display = 'none'
    } else {
        models_small.classList.remove('menu_open');
        models_big_list.classList.remove('menu_open');
        models_big.style.translate = '';
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


model1.addEventListener('click',()=> {
    models_big.removeAttribute('class');
    models_big.classList.add('model1');
});

model2.addEventListener('click',()=> {
    models_big.removeAttribute('class');
    models_big.classList.add('model2')
});

model3.addEventListener('click',()=> {
    models_big.removeAttribute('class');
    models_big.classList.add('model3')
});

model4.addEventListener('click',()=> {
    models_big.removeAttribute('class');
    models_big.classList.add('model4')
});

model5.addEventListener('click',()=> {
    models_big.removeAttribute('class');
    models_big.classList.add('model5')
});

model6.addEventListener('click',()=> {
    models_big.removeAttribute('class');
    models_big.classList.add('model6')
});

model7.addEventListener('click',()=> {
    models_big.removeAttribute('class');
    models_big.classList.add('model7')
});


//EVENTLISTENERS
window.addEventListener('mousemove',(event)=> {
    cursor.style.top = event.pageY + 'px'
    cursor.style.left = event.pageX + 'px'
});
menu.addEventListener('click', menu_openclose);
models.addEventListener('click', models_openclose);


//SETINTERVAL

