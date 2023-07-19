console.log('running main.js')

var userLikes1 = 9;
var addLikesNeil = document.querySelector('#totalLikesNeil');


function addNeil(){
    userLikes1++;
    addLikesNeil.innerHTML = userLikes1 + " like (s)";
}

var userLikes2 = 12;
var addLikesNichole = document.querySelector('#totalLikesNichole');


function addNichole(){
    userLikes2++;
    addLikesNichole.innerHTML = userLikes2 + " like (s)";
}

var userLikes3 = 9;
var addLikesJim = document.querySelector('#totalLikesJim');


function addJim(){
    userLikes3++;
    addLikesJim.innerHTML = userLikes3 + " like (s)";
}