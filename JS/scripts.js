
let menu = document.querySelector("#menu");
let toogleIcon = document.querySelector("#toggle-icon");

toogleIcon.addEventListener("click" , function() {
    menu.classList.toggle("menu-on");
});