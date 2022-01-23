
let elemGamburher = document.querySelector('.hamburger');
let mainNavbar = document.querySelector('.main-navbar');

elemGamburher.addEventListener('click', function() {
    alert('нажали на гамбургер');
    
    mainNavbar.classList.toggle('activeNavbar');
    //дописать чтобы гамбургем менялся на крестик
});

let navList = document.querySelector('.nav-list');

navList.addEventListener('click', function() {
   if(mainNavbar.classList.contains('activeNavbar')) {
       // код удаляющий активный класс у гамбургера
       mainNavbar.classList.remove('activeNavbar'); 
   }
})

let closeHamburger = document.querySelector('.nav-close');
closeHamburger.addEventListener('click', function() {
    mainNavbar.classList.remove('activeNavbar');
}); 