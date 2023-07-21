import foodImg from "./assets/xiangling-shorts.jpeg";
import createMenu from "./menu.js";
import "./styles/home.css";

// Create Heading
function createHomepage() {
	// Check if we already initialize the homepage with main, otherwise we don't need to make a new main
	const elementExists = document.querySelector(".main-container") !== null;
	let mainContainer = null;
	if (elementExists) {
		mainContainer = document.querySelector(".main-container");
		clearMain();
	} else {
		mainContainer = createElement("main", "main-container");
	}
	setHomeClassList(mainContainer);
	const header = createHeader();
	const description = createInfo();
	const orderBtn = createBtn();

	const homeImg = new Image();
	homeImg.src = foodImg;
	homeImg.classList.add("xiangling");

	mainContainer.appendChild(header);
	mainContainer.appendChild(homeImg);
	description.appendChild(orderBtn);
	mainContainer.appendChild(description);
	return mainContainer;
}

function setHomeClassList(mainContainer) {
	mainContainer.classList.add("home");
}

function createHeader() {
	const headerContainer = createElement("div", "header");
	const title = createElement("h1", "title");
	title.textContent = "A Taste of Teyvat";
	headerContainer.appendChild(title);
	return headerContainer;
}

function createInfo() {
	const infoContainer = createElement("div", "info-container");
	const info = createElement("p", "info");
	const line1 = document.createTextNode("Welcome and please come visit us!");
	const lineBreak = document.createElement("br");
	const line2 = document.createTextNode("We feature some of the best dishes on this side of the world.");
	info.appendChild(line1);
	info.appendChild(lineBreak);
	info.appendChild(line2);
	infoContainer.appendChild(info);
	return infoContainer;
}

function createBtn() {
	const btn = createElement("button", "order-btn");
	btn.textContent = "Order Today!";
	btn.addEventListener("click", createMenu);
	return btn;
}

function createElement(type, className) {
	const element = document.createElement(type);
	element.classList.add(className);
	return element;
}

function clearMain() {
	const main = document.querySelector(".main-container");
	// Clear all elements in main
	while (main.firstChild) {
		main.removeChild(main.firstChild);
	}
}

export default createHomepage;
