const headerContainer = document.querySelector('.header-container');
const elemsNavItems = document.querySelectorAll('.nav-item');

//console.log( headerContainer );
//console.log( elemsNavItems );

headerContainer.addEventListener('click', (event) => {
    //console.log(event.target);

    let currentElem = event.target;

    // работаем с классами active
    if (currentElem.classList.contains('nav-item')) {
        elemsNavItems.forEach((item) => {
            if (item.classList.contains('active')) {
                item.classList.remove('active');
            }
        });

        currentElem.classList.add('active');
    };

    // работаем с изображениями 
    if (currentElem.classList.contains('nav-item')) {
        let img = document.querySelector('.main-container');
        let currentButtonBird = currentElem.dataset.bird;
        
        img.style.backgroundImage = `url(../assets/img/${currentButtonBird}.jpg)`
    }
});


