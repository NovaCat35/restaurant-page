import initWebpage from "./website.js"
import createHomepage from "./home.js";

initWebpage();

const content = document.querySelector("main");
const home = document.querySelector(".nav-home");
const menu = document.querySelector(".nav-menu");
const contact = document.querySelector(".nav-contact");

home.addEventListener('click', createHomepage);