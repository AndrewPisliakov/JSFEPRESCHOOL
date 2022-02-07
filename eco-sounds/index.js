const headerContainer = document.querySelector('.header-container');
const elemsNavItems = document.querySelectorAll('.nav-item');
let currentButtonBird = 'forest';
let isPlay = false;

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

        img.style.backgroundImage = `url(../assets/img/${currentButtonBird}.jpg)`;
        changeTrackSource();
        isPlay = false;
        toggleMusicState();
    }
});

// изменение кнопки play/pause 
const btnPlay = document.querySelector('.btn-play');
btnPlay.addEventListener('click', toggleMusicState);

function togglePauseClass() {
    btnPlay.classList.toggle('pause')
}

// проигрыватель 

const audio = document.querySelector('audio');

function changeTrackSource () {
    audio.src = `./assets/audio/${currentButtonBird}.mp3`;
}

function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

function toggleMusicState() {
    if (!isPlay) {
        playAudio();
        btnPlay.classList.add('pause');
        isPlay = true;
    } else {
        pauseAudio();
        btnPlay.classList.remove('pause');
        isPlay = false;
    }
}