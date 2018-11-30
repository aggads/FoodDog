//SEARCH BUTTON & MODAL WINDOW
let wholeWindow = document.getElementById('modalwindow');
let btn = document.getElementById("button-search-id logo-social-media1");
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


  var close = 0;
    function menu_mobile() {
      if (close == 0) {
        document.getElementById("container_menu_drop").classList.remove("hide1");
        document.getElementById("container_menu_drop").classList.add("show");
        document.getElementById("container_menu_drop").classList.remove("hide_Subjets");
        document.getElementById("container_menu_drop").classList.add("show");
        close++;
      } else if (close == 1) {
        document.getElementById("container_menu_drop").classList.remove("show");
        document.getElementById("container_menu_drop").classList.add("hide1");
        document.getElementById("container_menu_drop").classList.remove("show");
        document.getElementById("container_menu_drop").classList.add("hide_Subjets");
        close--;
      }
    }
    function fixedHeader() {
      document.getElementById("mobile_show").classList.remove("masked_loadpage");
      document.getElementById("mobile_show").classList.add("show_loadpage");
      document.getElementById("mobile_main").classList.add("masked_loadpage");
    }
    function change_post_best() {
      document.getElementById("firstSect").classList.add("show");
      document.getElementById("secondSect").classList.add("masked");
      document.getElementById("thirdSect").classList.add("masked");
      document.getElementById("secondSect").classList.remove("show");
      document.getElementById("thirdSect").classList.remove("show");
    } function change_post_Featured() {
      document.getElementById("secondSect").classList.add("show");
      document.getElementById("firstSect").classList.add("masked");
      document.getElementById("thirdSect").classList.add("masked");
      document.getElementById("firstSect").classList.remove("show");
      document.getElementById("thirdSect").classList.remove("show");
    } function change_post_Latest() {
      document.getElementById("thirdSect").classList.add("show");
      document.getElementById("secondSect").classList.add("masked");
      document.getElementById("firstSect").classList.add("masked");
      document.getElementById("firstSect").classList.remove("show");
      document.getElementById("secondSect").classList.remove("show");
    }