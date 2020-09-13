"use strict";

//Display the Community Menu
const community = document.querySelector(".community a");
const communityMenu = document.querySelector(".community__menu");

function toggleMenu(event, menu) {
  menu.classList.toggle("hidden");
  event.preventDefault();
}

community.addEventListener("click", (e) => toggleMenu(e, communityMenu));

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