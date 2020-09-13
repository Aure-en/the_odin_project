"use strict";

//Display the toggling menus

  //Student's Solutions (Main > Section #3)

const menuToggle = document.querySelectorAll(".menu__show");
const menu = document.querySelectorAll(".menu");  

function toggleMenu(event, menu) {
  event.preventDefault();
  menu.classList.toggle("open");
}

for (let i = 0 ; i < menuToggle.length ; i++) {
  menuToggle[i].addEventListener("click", (e) => toggleMenu(e, menu[i]));
}

//Enables show button

const show = document.querySelector(".show");

function showNav(event, nav) {
  document.querySelector(`.${event.target.closest("button").dataset.toggle}`).classList.remove("hidden");
}

show.addEventListener("click", () => showNav(event, "header__nav--medium"));

//Enables close button

const close = document.querySelector(".close");

function closeNav(event, nav) {
  document.querySelector(`.${event.target.closest("button").dataset.toggle}`).classList.add("hidden");
}

close.addEventListener("click", () => closeNav(event, "header__nav--medium"));

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

  console.log(pageYOffset < introductionCoords.bottom + pageYOffset);
  console.log(pageYOffset > introductionCoords.bottom + pageYOffset && pageYOffset < ressourcesCoords.top + pageYOffset);
  
  function changeActive(newActive) {
    active.classList.remove("active");
    console.log(active);
    active = newActive;
    newActive.classList.add("active");
    console.log(newActive);
  }

  if (pageYOffset < introductionCoords.bottom + pageYOffset) {
    changeActive(introductionLink);
  }

  else if (pageYOffset > introductionCoords.bottom + pageYOffset && pageYOffset < ressourcesCoords.top + pageYOffset) {
    changeActive(assignmentLink);
  }

  else {
    changeActive(ressourcesLink);
  }

});