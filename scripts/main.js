const btnM = document.getElementById("menu");
const btnE = document.getElementById("exit");
const menu = document.getElementsByClassName("menu-phone");

window.addEventListener(`resize`, () => menu[0].style = "display: none;", false);
btnM.addEventListener("click", () => menu[0].style = "display: block;");
btnE.addEventListener("click", () => menu[0].style = "display: none;");


