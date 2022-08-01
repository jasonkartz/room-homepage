const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const nav = document.getElementById("nav");
const darkenBg = document.getElementById("darken");

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
