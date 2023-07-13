import teleSvg from "./assets/telephone.svg";
import './styles/contact.css'

function createContact() {
	const mainContainer = document.querySelector(".main-container");
	clearMain(mainContainer);

	// create title
	const contactContainer = createElement("div", "contact-container");
	const title = createElement("h1", "title");
	title.textContent = "Contact Us";

	// create telephone
	const tele1 = createTele("973-729-2218");
	const tele2 = createTele("973-729-2213");

	contactContainer.appendChild(title);
	contactContainer.appendChild(tele1);
	contactContainer.appendChild(tele2);
	mainContainer.appendChild(contactContainer);
}

function createElement(type, className) {
	const element = document.createElement(type);
	element.classList.add(className);
	return element;
}

function createTele(number) {
	const teleContainer = createElement("div", "tele-container");
	const teleIcon = createElement('img', 'phone-icon')
	const phoneNum = createElement("p", "phone-number");
	teleIcon.src = teleSvg;
	phoneNum.textContent = number;
	teleContainer.appendChild(teleIcon);
	teleContainer.appendChild(phoneNum);

	return teleContainer;
}

function clearMain(main) {
	// Clear all elements in main
	while (main.firstChild) {
		main.removeChild(main.firstChild);
	}
}

export default createContact;
