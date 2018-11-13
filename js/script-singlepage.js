function hamburgerMenu() {
    let x = document.getElementById("header-menu-hamburger");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}