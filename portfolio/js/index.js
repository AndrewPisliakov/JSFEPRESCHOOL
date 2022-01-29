
import i18Obj from "./translate.js";


// Burger menu

//======================================================

const elemGamburher = document.querySelector('.hamburger');
const mainNavbar = document.querySelector('.main-navbar');

elemGamburher.addEventListener('click', () => {
    mainNavbar.classList.toggle('activeNavbar');
    //дописать чтобы гамбургем менялся на крестик
});

const navList = document.querySelector('.nav-list');

navList.addEventListener('click', () => {
    if (mainNavbar.classList.contains('activeNavbar')) {
        // код удаляющий активный класс у гамбургера
        mainNavbar.classList.remove('activeNavbar');
    }
})

const closeHamburger = document.querySelector('.nav-close');
closeHamburger.addEventListener('click', () => {
    mainNavbar.classList.remove('activeNavbar');
});


// sort img 

//=======================================================

const portfolioGroupBtnContainer = document.querySelector('.portfolio-group-btn');
const portfolioGroupBtn = document.querySelectorAll('.btn-portfolio');

portfolioGroupBtnContainer.addEventListener('click', (event) => {
    let button = event.target;
    let timeOfTheYear = button.dataset.season;

    //работаем с кнопками перебирая их и меняем bg

    portfolioGroupBtn.forEach(elem => {
        if (elem.classList.contains('btn-active')) {
            elem.classList.remove('btn-active');
        }
    });

    if (button.classList.contains('btn-portfolio')) {
        changeClassActive(button, 'btn-active');
    }

    // работаем с изображениями
    let portfolioImgs = document.querySelectorAll('.portfolio-image');

    portfolioImgs.forEach((elem, index) => {
        elem.src = `./assets/img/${timeOfTheYear}/${index + 1}.jpg`;
    });
});


const changeClassActive = (elem, activeClass) => elem.classList.add(activeClass);


// translate simbol

//========================================

// меняем active class 

let buttonsLang = document.querySelectorAll('span[data-lang]');

buttonsLang.forEach((button) => {

    button.addEventListener('click', (event) => {
        let currentButton = event.target;

        buttonsLang.forEach((but) => {
            if (but.classList.contains('nav-link')) {
                but.classList.remove('active');
            }
        });

        changeClassActive(currentButton, 'active');


        // translate page

        //================================

        //console.log(currentButton.dataset.lang, typeof currentButton.dataset.lang);
        if (currentButton.dataset.lang === 'en') {
            console.log(true);
        } else {
            console.log(false);
        }


    });
});


