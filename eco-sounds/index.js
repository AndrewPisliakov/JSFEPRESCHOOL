const headerContainer = document.querySelector('.header-container');
const elemsNavItems = document.querySelectorAll('.nav-item');
let currentButtonBird = 'forest';

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
        currentButtonBird = currentElem.dataset.bird;
        console.log(currentButtonBird);

        img.style.backgroundImage = `url(../assets/img/${currentButtonBird}.jpg)`
        audioPlayer();
    }
});


// изменение кнопки play/pause 
const btnPlay = document.querySelector('.btn-play');
btnPlay.addEventListener('click', changeClass);

function changeClass() {
    btnPlay.classList.toggle('pause')
}

btnPlay.addEventListener('click', audioPlayer);

// проигрыватель 
let isPlay = false;
const audio = document.querySelector('audio');
//console.log(audio.src);

//audio.src = `./assets/audio/${currentButtonBird}.mp3`;
//console.log(audio.srs);

function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

function audioPlayer() {
    audio.src = `./assets/audio/${currentButtonBird}.mp3`;
    console.log(audio.src);
    console.log(currentButtonBird);
   
    if (!isPlay) {
        playAudio();
        isPlay = true;
    } else {
        pauseAudio();
        isPlay = false;

    }
    console.log(isPlay);
}
console.log(isPlay);

//audioPlayer();

//setInterval(() => console.log(currentButtonBird, typeof currentButtonBird, 'currentButtonBird', audio.src ), 3000);
//console.log(currentButtonBird, 'currentButtonBird');


//<audio src="./assets/audio/drozd.mp3" controls></audio>