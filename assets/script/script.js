const btnHamburger = document.querySelector('.header__hamburger-menu');
const nav = document.querySelector('.nav');
const main = document.querySelector('.main');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');

const questions = document.querySelectorAll('.question');
let duration = 200;

// Events
btnHamburger.addEventListener('click',() => {
    toggleActiveElms(btnHamburger,nav,main,body, overlay);
})

overlay.addEventListener('click',() =>toggleActiveElms(btnHamburger,nav,main,body, overlay))

questions.forEach((question) => {
    question.addEventListener('click',()=> {
        let activeElm = document.querySelector('.content.active');
        let content = question.parentElement.querySelector('.content');
        if (activeElm) {
            activeElm.classList.remove('active');
            document.querySelector('.question.active').classList.remove('active');
        }
        console.log(content)
        toggleActiveElms(question,content);
    })
})

// Functions
function toggleActiveElms(...elms) {
    elms.forEach(elm => {
        elm.classList.toggle('active');
    })
}


