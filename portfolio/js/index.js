import i18Obj from "./translate.js";

console.log('Дополнительно реализован LocalStorage');

//Объект для LocalStorage
let objLocalStorage = {
    lang: 'en',
    theme: 'dark',
};

//массив для изменения темы
const classForChangeTheme = ['body-home', 'skills', 'portfolio', 'video',
    'hero-content', 'price', 'section-title-text'];

//проверка LocalStorage    
if (localStorage.getItem('userInterface')) {
    objLocalStorage = JSON.parse(localStorage.getItem('userInterface'));

    translate(objLocalStorage.lang);
    if (objLocalStorage.theme === 'light') changeTheme();

    if (objLocalStorage.lang === 'ru') {

        document.querySelector(`[data-lang='ru']`).classList.add('active');
        document.querySelector(`[data-lang='en']`).classList.remove('active');
    }
}

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

function changeClassActive(elem, activeClass) {
    elem.classList.add(activeClass);
}

// translate 
//========================================

// меняем active class eng/ru

let buttonsLang = document.querySelectorAll('span[data-lang]');

buttonsLang.forEach((button) => {

    button.addEventListener('click', (event) => {

        let currentButton = event.target;
        let langCurrent = currentButton.dataset.lang;

        buttonsLang.forEach((but) => {
            if (but.classList.contains('nav-link')) {
                but.classList.remove('active');
            }
        });

        changeClassActive(currentButton, 'active');

        // translate page
        //================================

        translate(langCurrent);
    });
});

// Function for translate
//===============================

function translate(lang) {
    let dataAtrebuts = document.querySelectorAll('[data-i18]');

    dataAtrebuts.forEach((atr) => {
        let keysCurrent = atr.dataset.i18;

        for (let key in i18Obj[lang]) {
            if (keysCurrent === key) {
                atr.textContent = i18Obj[lang][key];
            }
        }
    });
    if (lang === 'en') {
        objLocalStorage.lang = 'en';
        listenerLocakStorage();
    } else {
        objLocalStorage.lang = 'ru';
        listenerLocakStorage();
    };
}

// Change color theme 
//==========================================================

const buttonTheme = document.querySelector('.theme-sun-svg');

buttonTheme.addEventListener('click', () => {

    changeTheme();

    if (objLocalStorage.theme === 'dark') {
        objLocalStorage.theme = 'light';
        listenerLocakStorage();
    } else {
        objLocalStorage.theme = 'dark';
        listenerLocakStorage();
    };
});

function changeTheme() {

    classForChangeTheme.forEach((currentClass) => {
        let arrElemCurrent = document.querySelectorAll(`.${currentClass}`)

        arrElemCurrent.forEach((elem) => {
            if (elem.classList.contains(currentClass)) {
                elem.classList.toggle(`${currentClass}-theme`);
            }
        });
    });
}

// Keep data localStorage 
//====================================================

function listenerLocakStorage() {
    localStorage.setItem('userInterface', JSON.stringify(objLocalStorage));
}

