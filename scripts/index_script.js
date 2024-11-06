const articles = document.getElementsByClassName('snap_article');
const section_snap = document.getElementById('snap');
const header_i = document.querySelector('header');
const logo_i = document.getElementById('logo');

let state_header = true;

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
    if (section_snap.scrollTop > (window.innerHeight)*0.3 && state_header == false) {
        header_i.classList.add('header2');
        logo_i.src = "/images/vleugel_popetje.svg";
        state_header = true;
    } else if (section_snap.scrollTop < (window.innerHeight)*0.3 && state_header == true){
        header_i.classList.remove('header2');
        logo_i.src = "/images/RR.svg";
        state_header = false;
    }
}  

setInterval(scrollsnap,100);
setInterval(header_change, 100);