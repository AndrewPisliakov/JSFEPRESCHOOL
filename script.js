let url = 'https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=XAdjixWcAbF3mw0hUjTkyY7tgpGEPSSUc_Gj7t0hXjw';

let response = await fetch(url);
let data = await response.json();

let arrObjImg = data.results;

console.log(data.results); 

let body = document.querySelector('.main-container');
let div = document.createElement('div');

arrObjImg.forEach((obj) => {
    let url = obj.urls.regular;

    let div = document.createElement('div');
    div.classList.add('image');
    div.style.backgroundImage = `url(${url})`;
    body.append(div);   
});


//data.urls.regular;

//data.results[0].data.urls.regular

//https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY




//div.style.backgroundImage = `url(${})полученный от API адрес изображения`;
/* function changeBgImg(){
    block.style.backgroundImage = "url('https://cs7062.vk.me/c540107/v540107359/2729/fYQlS_23QdA.jpg')";
} */

