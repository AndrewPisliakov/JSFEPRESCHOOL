const input = document.querySelector('#input');
const buttonClose = document.querySelector('.close');
const buttonSearch = document.querySelector('#search');
const divContainer = document.querySelector('.main-container');

class Storage {
    constructor(key) {
        this._key = key;
    }
    setItem(data) { localStorage.setItem(this._key, JSON.stringify(data)) }
    removeItem() { localStorage.removeItem(this._key) }
    getItem() { return JSON.parse(localStorage.getItem(this._key)) }
    clareAllItem() { localStorage.clear() }
};

let storage = new Storage('request');

if (storage.getItem()) {
    input.value = storage.getItem();
}

//=========================================================================================
async function loadImgs() {
    let arrObjImgs = await getImages(generateUrl(input.value));
    displayImgs(arrObjImgs);
};

async function getImages(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();

        return data.results;
    } catch (error) {
        console.log(error);
    }
};

function displayImgs(arrObj) {
    divContainer.innerHTML = '';

    arrObj.forEach((obj) => {
        let url = obj.urls.regular;
        let div = document.createElement('div');
        div.classList.add('image');
        div.style.backgroundImage = `url(${url})`;
        divContainer.append(div);
    });
};

function generateUrl(keyword) {
    if (keyword) {
        return `https://api.unsplash.com/search/photos?query=${keyword}&per_page=30&orientation=landscape&client_id=XAdjixWcAbF3mw0hUjTkyY7tgpGEPSSUc_Gj7t0hXjw`;
    } else {
        return `https://api.unsplash.com/search/photos?query=${keyword = 'spring'}&per_page=30&orientation=landscape&client_id=XAdjixWcAbF3mw0hUjTkyY7tgpGEPSSUc_Gj7t0hXjw`;
    }
}

//=======================================================================================
window.addEventListener('load', loadImgs);

input.addEventListener('input', function () {
    storage.setItem(this.value);
});

input.addEventListener('keyup', (event) => {
    event.preventDefault();
    if (event.keyCode === 13) {
        loadImgs();
    }
});

buttonSearch.addEventListener('click', loadImgs);

buttonClose.addEventListener('click', function() {
    input.value = '';
    storage.clareAllItem();
});
 

//============================================================================================
console.log(`
- на странице есть несколько фото и строка поиска +5;
- в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5;
- При загрузке приложения на странице отображаются полученные от API изображения +10;
- Если в поле поиска ввести слово и отправить поисковый запрос, на странице отобразятся изображения соответствующей тематики, если такие данные предоставляет API +10;
- при открытии приложения курсор находится в поле ввода +5;
- есть placeholder +5;
- автозаполнение поля ввода отключено (нет выпадающего списка с предыдущими запросами) +5;
- поисковый запрос можно отправить нажатием клавиши Enter +5;
- после отправки поискового запроса и отображения результатов поиска, поисковый запрос продолжает отображаться в поле ввода +5;
- в поле ввода есть крестик при клике по которому поисковый запрос из поля ввода удаляется и отображается placeholder +5;

Оценка за задание 60 баллов
`);




