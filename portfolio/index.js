
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



const portfolioGroupBtnContainer = document.querySelector('.portfolio-group-btn');
const portfolioGroupBtn = document.querySelectorAll('.btn-portfolio');


portfolioGroupBtnContainer.addEventListener('click', (event) => {
    let button = event.target;
    let timeOfTheYear = button.dataset;

    //работаем с кнопками перебирая их и меняем bg

    portfolioGroupBtn.forEach(elem => {
        if(elem.classList.contains('btn-active')) {
            elem.classList.remove('btn-active');
        }
    });

    if (button.classList.contains('btn-portfolio')) {
        button.classList.add('btn-active');
    }
    
    // работаем с изображениями
    
});

