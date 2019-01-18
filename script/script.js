
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


request.onload = function() {
    const races = request.response;
    loadPage(races);

}

function loadPage(jsonObj) {
    const races = jsonObj['items'];    
    
    for (let i = 0; i < races.length; i++) {
        const race = races[i];

//      SIDEBAR nav elems
        const navButton = document.createElement('button');
        navButton.innerText = race['header'];
              if(i == 0) navButton.classList.add('active');
//      MAIN elems
        const raceArticle = document.createElement('article');
              raceArticle.id = race['header'];
              console.log(raceArticle.id);
              if(i == 0) raceArticle.classList.add('active');
        const raceHeader = document.createElement('h2');
              raceHeader.innerText = race['header'];
        const raceImg = document.createElement('img');
              raceImg.src = "https://raw.githubusercontent.com/mxmgny/DOM_Practice/master/"+race['logo'];
        const raceText = document.createElement('p');
              raceText.innerText = race['decription-text'];


        aside.appendChild(navButton);
        raceArticle.appendChild(raceHeader);
        raceArticle.appendChild(raceImg);
        raceArticle.appendChild(raceText);
        main.appendChild(raceArticle);
        navButton.addEventListener('click', changeRace);
    }

    body.appendChild(aside);
    body.appendChild(main);
}

function changeRace() {
    deactivate();
    var checkLI = document.getElementById(this.innerText);
        checkLI.classList.add('active');
    this.classList.add('active');
}

function deactivate() { 
    var sects = document.getElementsByTagName('article');
    for(let i = 0; i<sects.length;i++) {
        sects[i].classList.value = "";
    }
    var lis = document.getElementsByTagName('button');
    for(let i = 0; i<lis.length;i++) {
        lis[i].classList.value = "";
    }
}
