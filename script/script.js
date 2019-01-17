
const requestURL = "A:/coding/kottans/DOM_Practice/script/data.json/";
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var obj = request.response;
    console.log(obj);
}