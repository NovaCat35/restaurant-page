import initWebpage from "./website.js";
import createHomepage from "./home.js";
import createMenu from "./menu.js";
import createContact from "./contact.js";

initWebpage();

const home = document.querySelector(".nav-home");
const menu = document.querySelector(".nav-menu");
const contact = document.querySelector(".nav-contact");

home.addEventListener("click", createHomepage);
menu.addEventListener("click", createMenu);
contact.addEventListener("click", createContact);
