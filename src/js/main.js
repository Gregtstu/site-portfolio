const nav = document.querySelector('.header__navigotion');
const navUl = document.querySelector('.navigotion__list');
const navBtn = document.querySelector('#btn');

navBtn.addEventListener('click', ()=> {
    if(nav.classList.toggle('open')){
        navBtn.src = "./img/icons/nav-close.svg";
    } else{
        navBtn.src = "./img/icons/nav-open.svg";
    }
})

AOS.init({
    duration: 3000,
});