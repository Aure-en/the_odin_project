"use strict";

//Change navigation appearance depending on the viewport's size

const headerNav = document.querySelector(".header__nav")

function changeNav() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    headerNav.classList.remove("header__nav--full");
    headerNav.classList.remove("hidden");
  } else {
    headerNav.classList.add("header__nav--full");
    headerNav.classList.add("hidden");
  }
}

window.addEventListener("resize", changeNav);
window.addEventListener("load", changeNav);

//Display the toggling menus

const menuToggle = document.querySelectorAll(".menu__show");
const menu = document.querySelectorAll(".menu");  

function toggleMenu(event, menu) {
  event.preventDefault();
  menu.classList.toggle("open");
}

for (let i = 0 ; i < menuToggle.length ; i++) {
  menuToggle[i].addEventListener("click", (e) => toggleMenu(e, menu[i]));
}

//Display hidden elements

function toggleHide(event, element) {
  event.preventDefault();
  element.classList.toggle("hidden");
}

document.querySelector(".community a").addEventListener("click", (e) => toggleHide(e, document.querySelector(".community__box")));

//Enables show button

const show = document.querySelector(".show");

function showNav(event) {
  document.querySelector(`.${event.target.closest("button").dataset.toggle}`).classList.remove("hidden");
}

show.addEventListener("click", showNav);

//Enables close button

const close = document.querySelector(".close");

function closeNav(event) {
  document.querySelector(`.${event.target.closest("button").dataset.toggle}`).classList.add("hidden");
}

close.addEventListener("click", closeNav);

//Active link on the nav changing depending on the current scroll

const introduction = document.querySelector("#introduction");
const ressources = document.querySelector("#ressources");

const introductionLink = document.querySelector('a[href="#introduction"]');
const assignmentLink = document.querySelector('a[href="#assignment"]');
const ressourcesLink = document.querySelector('a[href="#ressources"]');

let active = introductionLink;

window.addEventListener("scroll", function() {

  const introductionCoords = introduction.getBoundingClientRect();
  const ressourcesCoords = ressources.getBoundingClientRect();

  function changeActive(newActive) {
    active.classList.remove("active");
    active = newActive;
    newActive.classList.add("active");
  }

  if (0 < introductionCoords.bottom) {
    changeActive(introductionLink);
  }

  else if (0 > introductionCoords.bottom && 0 < ressourcesCoords.top) {
    changeActive(assignmentLink);
  }

  else {
    changeActive(ressourcesLink);
  }

});

//Display bottoms icons on hover

const buttonList = document.querySelector(".button_list");

function displayIcons(e) {
  document.querySelectorAll(".list__hidden").forEach( (item) => item.classList.remove("hidden"));
}

function hideIcons(e) {
  document.querySelectorAll(".list__hidden").forEach( (item) => item.classList.add("hidden"));
}

buttonList.addEventListener("mouseenter", displayIcons);
buttonList.addEventListener("mouseleave", hideIcons);