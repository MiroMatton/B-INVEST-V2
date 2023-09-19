const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navContainer");
const navLink = document.querySelectorAll(".dienstenNavigatie");
const dienstenLink = document.querySelectorAll("nav");
const body = document.getElementsByTagName("BODY")[0];

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));
dienstenLink.forEach((n) => n.addEventListener("click", closeMenu));


function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  body.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  body.classList.remove("active");
}
