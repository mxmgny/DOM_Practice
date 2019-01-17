
const requestURL = "https://raw.githubusercontent.com/mxmgny/DOM_Practice/master/script/data.json";
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

const section = document.querySelector('section');

request.onload = function() {
    var races = request.response;
    console.log(races['items']);
    for (let i = 0; i < races['items'].length; i++) {
        var race = races['items'][i];
        var article = document.createElement('article');
        var header = document.createElement('h2');
        var paragraph = document.createElement('p');
        var img = document.createElement('img');
        

        header.textContent = race['header'];
        paragraph.textContent = race['decription-text'];
        img.src = "https://raw.githubusercontent.com/mxmgny/DOM_Practice/master/"+race['logo'];
        article.appendChild(header);
        article.appendChild(img);
        article.appendChild(paragraph);
        section.appendChild(article);
    }
}