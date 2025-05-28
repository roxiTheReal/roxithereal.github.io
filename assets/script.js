localStorage.clear();
const header = document.querySelector(".glass-navbar");


function scrollEffect() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', scrollEffect);
scrollEffect();

const searchBtn = document.getElementById("search-btn");
const menuBtn = document.getElementById("menu-btn");
const searchBar = document.getElementById("search-bar");
const sideMenu = document.getElementById("side-menu");

searchBtn.addEventListener("click", () => {
  const isOpen = searchBar.classList.toggle("show");
  searchBtn.classList.toggle("active", isOpen);
  sideMenu.classList.remove("show");
});

menuBtn.addEventListener("click", () => {
  sideMenu.classList.toggle("show");
  searchBar.classList.remove("show");
});

document.addEventListener("click", (e) => {
  if (!e.target.closest("#search-btn") && !e.target.closest("#search-bar")) {
    searchBar.classList.remove("show");
  }
  if (!e.target.closest("#menu-btn") && !e.target.closest("#side-menu")) {
    sideMenu.classList.remove("show");
  }
});

const closeBtn = document.getElementById("close-menu");

closeBtn.addEventListener("click", () => {
    sideMenu.classList.remove("show");
});

document.addEventListener("click", (e) => {
  if (!e.target.closest("#search-btn") && !e.target.closest("#search-bar")) {
    searchBar.classList.remove("show");
    searchBtn.classList.remove("active");
  }
  if (!e.target.closest("#menu-btn") && !e.target.closest("#side-menu")) {
    sideMenu.classList.remove("show");
  }
});

document.getElementById("search-btn").addEventListener("click", () => {
    document.getElementById("search-bar").focus();
});