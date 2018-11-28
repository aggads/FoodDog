<<<<<<< HEAD:js/script-foodog.js
let wholeWindow = document.getElementById('modalwindow');
let btn = document.getElementById("button-search-id");
let closeWindow = document.getElementsByClassName("search-close-window")[0]; 

btn.onclick = function() {
    wholeWindow.style.display = "block";
}

closeWindow.onclick = function() {
    wholeWindow.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == wholeWindow) {
        wholeWindow.style.display = "none";
    }
=======
let wholeWindow = document.getElementById('modalwindow');
let btn = document.getElementById("button-search-id logo-social-media1");
let closeWindow = document.getElementsByClassName("search-close-window")[0]; 
function search() {
    wholeWindow.style.display = "block";
}

closeWindow.onclick = function() {
    wholeWindow.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == wholeWindow) {
        wholeWindow.style.display = "none";
    }
>>>>>>> 4e25c44d1d5b5f1961cbbac82f67dcceaa620b99:js/script-foodog.js
}