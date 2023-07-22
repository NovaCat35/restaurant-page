import initWebpage from "./website.js";
import createHomepage from "./home.js";
import createMenu from "./menu.js";
import createContact from "./contact.js";

initWebpage();

const home = document.querySelector(".nav-home");
const menu = document.querySelector(".nav-menu");
const contact = document.querySelector(".nav-contact");

const navMenu = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");

setActiveClass(home);

home.addEventListener("click", () => {
	createHomepage();
	removeActiveClass();
	setActiveClass(home);
});

menu.addEventListener("click", () => {
	createMenu();
	removeActiveClass();
	setActiveClass(menu);
});

contact.addEventListener("click", () => {
	createContact();
	removeActiveClass();
	setActiveClass(contact);
});

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
});

function removeActiveClass() {
   home.classList.remove("active");
   menu.classList.remove("active");
   contact.classList.remove("active");
   hamburger.classList.remove("active");
   navMenu.classList.remove("active");
}

function setActiveClass(navTab) {
   navTab.classList.add("active");
}
