
const requestURL = "https://raw.githubusercontent.com/mxmgny/DOM_Practice/master/script/data.json";
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

// element for sidebar links
const aside = document.createElement('aside');
//create element for main content
const main = document.createElement('main');
const body = document.querySelector('body');

//call loadPage function and throw JSON object as argument
request.onload = function() {
    loadPage(request.response);
}

function loadPage(jsonObj) {
    const races = jsonObj['items'];

    races.map( (race,id) => {
//      create navButton and add Event listener
        const navButton = createTextElement('button',race['header']);
        navButton.addEventListener('click', changeRace);
        if(id == 0) navButton.classList.add('active');
//      create article
        const raceArticle = createRaceArticle(race);
        if(id == 0) raceArticle.classList.add('active');
//      add navButton and main to the DOM
        aside.appendChild(navButton);
        main.appendChild(raceArticle);
    });

    body.appendChild(aside);
    body.appendChild(main);
}


function createRaceArticle(raceInfo) {
    let article = document.createElement('article');
        article.id = raceInfo['header'];
     article.appendChild(createTextElement('h2',raceInfo['header']));
     article.appendChild(createImage(raceInfo['logo']));
     article.appendChild(createTextElement('p',raceInfo['decription-text']));
     return article;
}
function createImage(src) {
    let imgElement = document.createElement('img');
    imgElement.src = "https://raw.githubusercontent.com/mxmgny/DOM_Practice/master/"+src;
    return imgElement;
}

function createTextElement(elementTag, text){
    let element =  document.createElement(elementTag);
    element.innerText = text;
    return element;
}


/*Selects all elements by given element name and clear its' class list*/
function deactivate(tagName) { 
    let arrayOfElements = Array.from(document.getElementsByTagName(tagName));
    arrayOfElements.map((element) => {element.classList.value = ""});
}


/*Delete all classes from sidebar elements and sections
  Add .active class to chosen section and sidebar button*/
function changeRace() {
    deactivate('article');
    deactivate('button');
    document.getElementById(this.innerText).classList.add('active');
    this.classList.add('active');
}


