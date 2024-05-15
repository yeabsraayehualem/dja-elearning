const body = document.querySelector("body");
// JavaScript to handle the dropdown functionality
const dropdowns = document.querySelectorAll(".tooltip-element");

function closeAllDropdowns() {
  dropdowns.forEach((dropdown) => {
    dropdown.classList.remove("show");
  });
}

function toggleDropdown(event) {
  event.preventDefault();
  const parent = this.closest(".tooltip-element");
  if (parent) {
    const isActive = parent.classList.contains("show");
    closeAllDropdowns();
    if (!isActive) {
      parent.classList.add("show");
    }
  }
}

function closeOpenDropdown(event) {
  const clickedOutsideDropdown = !event.target.closest(".tooltip-element");
  if (clickedOutsideDropdown) {
    closeAllDropdowns();
  }
}

dropdowns.forEach((dropdown) => {
  const link = dropdown.querySelector("a.tab");
  link.addEventListener("click", toggleDropdown);
});

document.addEventListener("click", closeOpenDropdown);

//  dark mode start here

// const shrink_btn = document.querySelector(".shrink-btn");
const search = document.querySelector(".search");
const sidebar_links = document.querySelectorAll(".sidebar-links a");
const active_tab = document.querySelector(".active-tab");
const shortcuts = document.querySelector(".sidebar-links h4");
const tooltip_elements = document.querySelectorAll(".tooltip-element");

let activeIndex;

// shrink_btn.addEventListener("click", () => {
//   setTimeout(moveActiveTab, 400);
//   if ($(".shrink-btn input[type=checkbox]").is(":checked")) {
//     localStorage.setItem("sidebarState", "collapsed");
//     document.body.classList.add("shrink");
//   }
//   else {
//     localStorage.setItem("sidebarState", "expanded");
//     document.body.classList.remove("shrink");
//   }
//   shrink_btn.classList.add("hovered");

//   setTimeout(() => {
//     shrink_btn.classList.remove("hovered");
//   }, 500);
// });

// search.addEventListener("click", () => {
//   document.body.classList.remove("shrink");
//   search.lastElementChild.focus();
// });

function moveActiveTab() {
  let topPosition = activeIndex * 58 + 2.5;

  if (activeIndex > 3) {
    topPosition += shortcuts.clientHeight;
  }

  active_tab.style.top = `${topPosition}px`;
}

function changeLink() {
  sidebar_links.forEach((sideLink) => sideLink.classList.remove("active"));
  this.classList.add("active");

  activeIndex = this.dataset.active;

  moveActiveTab();
}

sidebar_links.forEach((link) => link.addEventListener("click", changeLink));

// Toggle dark mode

function toggleDarkMode() {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    localStorage.setItem("theme", "light-mode");
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark-mode");
  }
}

if (localStorage.getItem("theme") === "dark-mode") {
  body.classList.add("dark-mode");
  body.classList.remove("light-mode");
}

if (localStorage.getItem("theme") === "light-mode") {
  body.classList.add("light-mode");
  body.classList.remove("dark-mode");
}


$(document).ready(function(){
  if (localStorage.getItem("sidebarState") === "collapsed") {
    body.classList.add("shrink");
  }
  else {
    body.classList.remove("shrink");
  }

});
