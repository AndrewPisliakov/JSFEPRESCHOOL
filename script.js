const input = document.querySelector('#input');
const divContainer = document.querySelector('.main-container');

class Storage {
    constructor(key) {
        this._key = key;
    }
    setItem(data) { localStorage.setItem(this._key, JSON.stringify(data)) }
    removeItem() { localStorage.removeItem(this._key) }
    getItem() { return JSON.parse(localStorage.getItem(this._key)) }
    claerAllItem() { localStorage.clear() }
};

let storage = new Storage('request');

if (storage.getItem()) {
    input.value = storage.getItem();
}

function generateUrl(keyword) {
    if (keyword) {
        return `https://api.unsplash.com/search/photos?query=${keyword}&per_page=30&orientation=landscape&client_id=XAdjixWcAbF3mw0hUjTkyY7tgpGEPSSUc_Gj7t0hXjw`;
    } else {
        return `https://api.unsplash.com/search/photos?query=${keyword = 'spring'}&per_page=30&orientation=landscape&client_id=XAdjixWcAbF3mw0hUjTkyY7tgpGEPSSUc_Gj7t0hXjw`;
    }
}

input.addEventListener('input', function () {
    localStorage.setItem(this.value);
});

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

input.addEventListener('keyup', (event) => {
    event.preventDefault();
    if (event.keyCode === 13) {
        loadImgs();
    }
});

window.addEventListener('load', loadImgs);

async function loadImgs() {
    let arrObjImgs = await getImages(generateUrl(input.value));
    displayImgs(arrObjImgs);
};