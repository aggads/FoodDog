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
}