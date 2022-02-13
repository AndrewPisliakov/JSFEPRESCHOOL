
let input = document.querySelector('#input');
let request = input.value;
let url = `https://api.unsplash.com/search/photos?query=${request = 'winter'}&per_page=30&orientation=landscape&client_id=XAdjixWcAbF3mw0hUjTkyY7tgpGEPSSUc_Gj7t0hXjw`;
let divContainer = document.querySelector('.main-container');




if (localStorage.getItem('isRequest')) {
    request = JSON.parse(localStorage.getItem('isRequest'));
    input.value = request;
    url = `https://api.unsplash.com/search/photos?query=${request}&per_page=30&orientation=landscape&client_id=XAdjixWcAbF3mw0hUjTkyY7tgpGEPSSUc_Gj7t0hXjw`;
    console.log(request.length);
}



//после отправки поискового запроса и отображения результатов поиска, поисковый запрос 
//продолжает отображаться в поле ввода +5
//=====================================================

input.addEventListener('input', function () {

    request = this.value;
    console.log(request);

    url = `https://api.unsplash.com/search/photos?query=${request}&per_page=30&orientation=landscape&client_id=XAdjixWcAbF3mw0hUjTkyY7tgpGEPSSUc_Gj7t0hXjw`;

    localStorage.setItem('isRequest', JSON.stringify(request));
});

console.log(request);


setInterval(() => { console.log(request, url) }, 5000);

async function getImages(url) {

    let response = await fetch(url);
    let data = await response.json();
    return data.results;
};


function displayImgs(arrObj) {

    divContainer.innerHTML = '';
    console.log(arrObj);


    arrObj.forEach((obj) => {
        let url = obj.urls.regular;
        let div = document.createElement('div');
        div.classList.add('image');
        div.style.backgroundImage = `url(${url})`;
        divContainer.append(div);
    });

}



// поисковый запрос можно отправить нажатием клавиши Enter 
//==========================================================


input.addEventListener('keyup', (event) => {
    event.preventDefault();
    if (event.keyCode === 13) {
        console.log('Do something', url);
        loadImgs();
    }
});

window.addEventListener('load', loadImgs);

async function loadImgs() {
    let arrObjImgs = await getImages(url);
    displayImgs(arrObjImgs);
};




