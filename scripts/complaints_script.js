//CONSTANTEN
const complaint = document.getElementById('complaint_page');
const header_C = document.querySelector('header');
const logo_C = document.getElementById('logo');
const blur_img = document.getElementById('blur_img');
const titel = document.querySelector('h1')

//VARIABELEN
let state_header = true;

//FUNCTIES
function header_change() {
    if (window.scrollY > (window.innerHeight)*0.3 && state_header == false) {
        header_C.classList.add('header2');
        logo_C.src = "/images/vleugel_popetje.svg";
        state_header = true;
    } else if (window.scrollY < (window.innerHeight)*0.3 && state_header == true){
        header_C.classList.remove('header2');
        logo_C.src = "/images/RR.svg";
        state_header = false;
    }
}

function image_blur() {
    let blur = window.scrollY* 0.02 + 'px' ;
    let fade = 120 - window.scrollY* 0.5 + '%' ;
    blur_img.style.backdropFilter = 'blur(' + blur + ')';
    titel.style.opacity = fade;
}

//EVENTLISTENERS

//SETINTERVAL

setInterval(image_blur, 100);
setInterval(header_change, 100);

