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
}