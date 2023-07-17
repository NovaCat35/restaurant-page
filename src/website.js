import createHomepage from "./home.js";
import "./styles/website.css";


export default function () {
	const content = document.querySelector("#content");
	const nav = createNav();
	const main = createMain();
	const footer = createFooter();
	content.appendChild(nav);
	content.appendChild(main);
	content.appendChild(footer);
}

function createNav() {
	const navbar = createElement("nav", "navbar-container");
	const list = createElement("ul", "list");

	const home = createElement("li", "nav-home");
	const menu = createElement("li", "nav-menu");
	const contact = createElement("li", "nav-contact");
	home.textContent = "HOME";
	menu.textContent = "MENU";
	contact.textContent = "CONTACT";
	list.appendChild(home);
	list.appendChild(menu);
	list.appendChild(contact);

   const name = createElement("h2", 'restaurant-name')
   name.textContent = "Taste of Teyvat"

   navbar.append(name)
   navbar.appendChild(list);

	return navbar;
}

function createMain() {
	return createHomepage();
}

function createFooter() {
	const footer = createElement("footer", "footer-container");
	const footerDescription = createElement("p", "credit");
	footerDescription.textContent = "Made with ❤️ by NovaCat35";
   footer.appendChild(footerDescription);
	return footer;
}

function createElement(type, className) {
	const element = document.createElement(type);
	element.classList.add(className);
	return element;
}
