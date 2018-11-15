//HAMBURGER MENU
function hamburgerMenu() {
    let x = document.getElementById("header-menu-hamburger");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

let hambMenu = document.getElementById("header-menu-hamburger")

window.onclick = function(event) {
    if (event.target == hambMenu) {
        hambMenu.style.display = "none";
    }
}
// ----------


//SEARCH BUTTON & MODAL WINDOW
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
// -----------