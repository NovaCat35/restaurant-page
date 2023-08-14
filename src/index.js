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

home.addEventListener("click", getHomePage);

menu.addEventListener("click", getMenuPage);

contact.addEventListener("click", getContactPage);

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
});

function getHomePage() {
	createHomepage();
	removeActiveClass();
	setActiveClass(home);
}

function getMenuPage() {
	createMenu();
	removeActiveClass();
	setActiveClass(menu);
}

function getContactPage() {
	createContact();
	removeActiveClass();
	setActiveClass(contact);
}

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

export {getMenuPage}