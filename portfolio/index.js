
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
   if(mainNavbar.classList.contains('activeNavbar')) {
       // код удаляющий активный класс у гамбургера
       mainNavbar.classList.remove('activeNavbar'); 
   }
})

const closeHamburger = document.querySelector('.nav-close');
closeHamburger.addEventListener('click', () => {
    mainNavbar.classList.remove('activeNavbar');
}); 


// sort img 

//============================================================

/* const portfolioImgs = document.querySelectorAll('.portfolio-image');

    portfolioImgs.forEach((elem, index) => {
    console.log(elem, elem.alt);
}); */


 console.log(document.querySelector('h2').innerText);
 //.forEach((elem) => console.log(elem.innerHTML));