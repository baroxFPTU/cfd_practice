const btnHamburger = document.querySelector('.header__hamburger-menu');
const nav = document.querySelector('.nav');
const main = document.querySelector('.main');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');

// Events
btnHamburger.addEventListener('click',() => {
    toggleActiveElms(btnHamburger,nav,main,body, overlay);
})

overlay.addEventListener('click',() =>     toggleActiveElms(btnHamburger,nav,main,body, overlay))

// Functions
function toggleActiveElms(...elms) {
    elms.forEach(elm => {
        elm.classList.toggle('active');
    })
}