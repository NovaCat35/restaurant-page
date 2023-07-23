import createHomepage from "./home.js";
import githubImg from "./assets/github.png";
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
	const navTitle = createNavTitle();
	const navOptions = createNavOptions();
	const navHamburger = createHamburger();

	navbar.append(navTitle);
	navbar.appendChild(navOptions);
	navbar.appendChild(navHamburger);

	return navbar;
}

function createNavOptions() {
	const list = createElement("ul", "nav-list");
	const home = createElement("li", "nav-home");
	const menu = createElement("li", "nav-menu");
	const contact = createElement("li", "nav-contact");
	home.textContent = "HOME";
	menu.textContent = "MENU";
	contact.textContent = "CONTACT";
	list.appendChild(home);
	list.appendChild(menu);
	list.appendChild(contact);
	return list;
}

function createHamburger() {
	const hamburger = createElement("div", "hamburger");
	for (let i = 0; i < 3; i++) {
		hamburger.appendChild(createElement("span", "bar"));
	}
	return hamburger;
}

function createNavTitle() {
	const name = createElement("h2", "restaurant-name");
	name.textContent = "Taste of Teyvat";
	return name;
}

function createMain() {
	return createHomepage();
}

function createFooter() {
	const footer = createElement("footer", "footer-container");
	const footerDescription = createElement("p", "credit");
	footerDescription.textContent = "Made with ❤️ by NovaCat35";
	footer.appendChild(footerDescription);
	footer.appendChild(createGithubLink());
	return footer;
}

function createElement(type, className) {
	const element = document.createElement(type);
	element.classList.add(className);
	return element;
}

function createImg(imgSrc) {
	const img = createElement("img", "image");
	img.src = imgSrc;
	return img;
}

function createGithubLink() {
	const link = createElement('a', 'github-link')
	link.href = 'https://github.com/NovaCat35/restaurant-page';

	const img = createImg(githubImg);
	link.appendChild(img);

	return link;
}
