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

function removeActiveClass() {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}

home.addEventListener("click", () => {
	createHomepage();
	removeActiveClass();
});

menu.addEventListener("click", () => {
	createMenu();
	removeActiveClass();
});

contact.addEventListener("click", () => {
	createContact();
	removeActiveClass();
});
hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
});
