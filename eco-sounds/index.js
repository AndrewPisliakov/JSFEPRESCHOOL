const headerContainer = document.querySelector('.header-container');
console.log( headerContainer );

headerContainer.addEventListener('click', (event) => {
    console.log(event.target);
    
    let currentElem = event.target;
    if(currentElem.classList.contains('nav-item')) {
        
    };
    
    
});


/* const arrBirds = document.querySelectorAll('.nav-item');

arrBirds.forEach(elem => {
    elem.addEventListener('click', event => {
        console.log(event.currentTarget);
        let currentBird = event.currentTarget;
        //console.log(currentBird.classList);
    })
});
 */
