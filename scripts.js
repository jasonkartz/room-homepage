//Menu display
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const nav = document.getElementById("nav");
const darkenBg = document.getElementById("darken");

//Gallery/info display
const btnLeftMobile = document.getElementById("btn-left-mobile");
const btnRightMobile = document.getElementById("btn-right-mobile");
const btnLeftDesktop = document.getElementById("btn-left-desktop");
const btnRightDesktop = document.getElementById("btn-right-desktop");

const header = document.getElementById("header");

const infoText1 = document.getElementById("info-text-1");
const infoText2 = document.getElementById("info-text-2");
const infoText3 = document.getElementById("info-text-3");

const infoArr = [infoText1, infoText2, infoText3];

let count = 0;

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

function contentChange() {
  header.style.background = `url("./images/${
    window.innerWidth >= 450 ? "desktop" : "mobile"
  }-image-hero-${count + 1}.jpg") no-repeat`;
  header.style.backgroundSize = "cover";
  header.style.backgroundPosition = "left";
  infoArr[count].style.display = "block";
}

function incrementInfoText() {
  infoArr[count].style.display = "none";
  if (count === infoArr.length - 1) {
    count = 0;
    contentChange();
  } else {
    count++;
    contentChange();
  }
}

function decrementInfoText() {
  infoArr[count].style.display = "none";
  if (count === 0) {
    count = infoArr.length - 1;
    contentChange();
  } else {
    count--;
    contentChange();
  }
}

window.onload = () => {
  contentChange();
  if (window.innerWidth >= 1000) {
    displayMenu();
  } else {
    hideMenu();
  }
};
window.onresize = () => {
  contentChange();
  if (window.innerWidth >= 1000) {
    displayMenu();
  } else {
    hideMenu();
  }
};

openMenu.addEventListener("click", displayMenu);
closeMenu.addEventListener("click", hideMenu);
darkenBg.addEventListener("click", hideMenu);

btnRightDesktop.addEventListener("click", incrementInfoText);
btnRightMobile.addEventListener("click", incrementInfoText);

btnLeftDesktop.addEventListener("click", decrementInfoText);
btnLeftMobile.addEventListener("click", decrementInfoText);
