const articles = document.getElementsByClassName('snap_article');
const section_snap = document.getElementById('snap');

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
        header.classList.add('header2');
        logo.src = "/images/vleugel_popetje.svg";
        state_header = true;
    } else if (section_snap.scrollTop < (window.innerHeight)*0.3 && state_header == true){
        header.classList.remove('header2');
        logo.src = "/images/RR.svg";
        state_header = false;
    }
}  

setInterval(scrollsnap,100);
setInterval(header_change, 100);