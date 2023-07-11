
// Create Heading
function createHomepage() {
   const mainContainer = createElement('main', 'main-container')
   const header = createHeader();
   const description = createInfo();
	mainContainer.appendChild(header);
   mainContainer.appendChild(description);
   return mainContainer;
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
   info.textContent = "Welcome to our restaurant's homepage. We feature some of the best dishes on this side of the world. Come visit us!";
   infoContainer.appendChild(info);
   return infoContainer;
}


function createElement(type, className) {
	const element = document.createElement(type);
	element.classList.add(className);
	return element;
}

export default createHomepage;
