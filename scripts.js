const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const nav = document.getElementById("nav");
const darkenBg = document.getElementById("darken");

const btnLeftMobile = document.getElementById("btn-left-mobile");
const btnRightMobile = document.getElementById("btn-right-mobile");
const btnLeftDesktop = document.getElementById("btn-left-desktop");
const btnRightDesktop = document.getElementById("btn-right-desktop");

const infoText1 = document.getElementById("info-text-1");
const infoText2 = document.getElementById("info-text-2");
const infoText3 = document.getElementById("info-text-3");

const infoArr = [infoText1, infoText2, infoText3];

let count = 0;

function incrementInfoText() {
  infoArr[count].style.display = "none";
  if (count < infoArr.length) {
    count++;
    infoArr[count].style.display = "block";
  } else {
    count = 0;
    infoArr[count].style.display = "block";
  }
}

btnRightDesktop.addEventListener("click", incrementInfoText);

function decrementInfoText() {}

function displayMenu() {
  nav.style.visibility = "visible";
  nav.style.opacity = 1;
  darkenBg.style.visibility = "visible";
  darkenBg.style.opacity = 0.5;
}

function hideMenu() {
  nav.style.visibility = "hidden";
  nav.style.opacity = 0;
  darkenBg.style.visibility = "hidden";
  darkenBg.style.opacity = 0;
}

openMenu.addEventListener("click", displayMenu);
closeMenu.addEventListener("click", hideMenu);
darkenBg.addEventListener("click", hideMenu);
