
const elemGamburher = document.querySelector('.hamburger');
const mainNavbar = document.querySelector('.main-navbar');

elemGamburher.addEventListener('click', () => {
    mainNavbar.classList.toggle('activeNavbar');
    //дописать чтобы гамбургем менялся на крестик
});

const navList = document.querySelector('.nav-list');

navList.addEventListener('click', () => {
   if(mainNavbar.classList.contains('activeNavbar')) {
       // код удаляющий активный класс у гамбургера
       mainNavbar.classList.remove('activeNavbar'); 
   }
})

const closeHamburger = document.querySelector('.nav-close');
closeHamburger.addEventListener('click', () => {
    mainNavbar.classList.remove('activeNavbar');
}); 