const headerContainer = document.querySelector('.header-container');
const elemsNavItems = document.querySelectorAll('.nav-item');
let currentButtonBird = 'forest';
headerContainer.addEventListener('click', (event) => {

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
        currentButtonBird = currentElem.dataset.bird;
        console.log(currentButtonBird);

        img.style.backgroundImage = `url(assets/img/${currentButtonBird}.jpg)`;
        changeTrackSource();
        toggleMusicState();
    }
});

// изменение кнопки play/pause 
const btnPlay = document.querySelector('.btn-play');
btnPlay.addEventListener('click', toggleMusicState);

// проигрыватель 

const audio = document.querySelector('audio');

function changeTrackSource () {
    audio.src = `./assets/audio/${currentButtonBird}.mp3`;
}

function toggleMusicState() {
    if (audio.paused) {
        audio.play();
        btnPlay.classList.add('pause');
    } else {
        audio.pause();
        btnPlay.classList.remove('pause');
    }
}