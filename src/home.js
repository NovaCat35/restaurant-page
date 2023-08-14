import foodImg1 from "./assets/bennett-shorts.jpeg";
import foodImg2 from "./assets/xiangling-shorts.jpeg";
import foodImg3 from "./assets/chongyun-shorts.jpeg";
import foodImg4 from "./assets/jean-shorts.png";
import foodImg5 from "./assets/tartaglia-shorts.png";
import createMenu from "./menu.js";
import "./styles/home.css";

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

	removeMenuClassList(mainContainer)
	setHomeClassList(mainContainer);
	
	const header = createHeader();
	const description = createInfo();
	const orderBtn = createBtn();
	const imgSlider = createImgSlider();
	startAutoSlider(imgSlider);

	mainContainer.appendChild(header);
	mainContainer.appendChild(imgSlider);
	description.appendChild(orderBtn);
	mainContainer.appendChild(description);
	return mainContainer;
}

// ----- Creating the IMAGE SLIDER -----
function createImgSlider() {
	const sliderContainer = createElement("div", "img-slider-container");

	// Create images for the slider
	const img1 = createImg(foodImg1, "img1", "i5", "i2");
	const img2 = createImg(foodImg2, "img2", "i1", "i3");
	const img3 = createImg(foodImg3, "img3", "i2", "i4");
	const img4 = createImg(foodImg4, "img4", "i3", "i5");
	const img5 = createImg(foodImg5, "img5", "i4", "i1");

	// Create the left, right radio buttons for slider
	for (let i = 1; i <= 5; i++) {
		sliderContainer.appendChild(createSliderBtn(`i${i}`));
	}

	sliderContainer.appendChild(img1);
	sliderContainer.appendChild(img2);
	sliderContainer.appendChild(img3);
	sliderContainer.appendChild(img4);
	sliderContainer.appendChild(img5);

	// Create the slider nav round btn below
	const sliderNav = createSliderDotNav();
	sliderContainer.appendChild(sliderNav);

	return sliderContainer;
}

// This creates an img and also 2 labels that targets the prev img and next img's ID
function createImg(imgSrc, id, prev, next) {
	const imgContainer = createElement("div", "slide-img");
	imgContainer.setAttribute("id", id);

	const homeImg = new Image();
	homeImg.src = imgSrc;

	// Create the left and right btns that will act as label input for the radio btns
	const labelPrev = createElement("label", "prev");
	labelPrev.setAttribute("for", prev);
	const labelNext = createElement("label", "next");
	labelNext.setAttribute("for", next);

	// Create the '<' and '>' icons
	const prevIcon = createElement("span", "iconPrev");
	prevIcon.textContent = "<";
	labelPrev.appendChild(prevIcon);
	const nextIcon = createElement("span", "iconNext");
	nextIcon.textContent = ">";
	labelNext.appendChild(nextIcon);

	imgContainer.appendChild(homeImg);
	imgContainer.appendChild(labelPrev);
	imgContainer.appendChild(labelNext);
	return imgContainer;
}

function createSliderBtn(id) {
	const navBtn = createElement("input", "nav-btn");
	navBtn.setAttribute("id", id);
	navBtn.setAttribute("name", "images");
	navBtn.setAttribute("type", "radio");

	if (id === "i1") {
		navBtn.checked = true;
	}
	return navBtn;
}

function createSliderDotNav() {
	const sliderNav = createElement("div", "slider-nav");
	for (let i = 1; i <= 5; i++) {
		const label = createElement("label", "dots");
		label.setAttribute("id", `dot${i}`);
		label.setAttribute("for", `i${i}`);
		sliderNav.appendChild(label);
	}
	return sliderNav;
}

// Add this function to start the automatic slider
function startAutoSlider(sliderContainer) {
	let currentIndex = 0;
	const totalImages = 5; // Total number of images in the slider
 
	// Function to advance the slider
	function advanceSlider() {
	  currentIndex = (currentIndex + 1) % totalImages;
	  const radioBtnId = `i${currentIndex + 1}`;
	  const radioBtn = document.getElementById(radioBtnId);
	  radioBtn.checked = true;
	}
 
	// Start the automatic slider with a 5-second interval
	let intervalId = setInterval(advanceSlider, 5000);
 
	// Clear the interval when the slider container is not in view
	sliderContainer.addEventListener("mouseenter", () => {
	  clearInterval(intervalId);
	});
 
	// Resume the interval when the slider container is in view
	sliderContainer.addEventListener("mouseleave", () => {
	  intervalId = setInterval(advanceSlider, 5000);
	});
 }
//  ----------------------------------------

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

function removeMenuClassList(mainContainer) {
	mainContainer.classList.remove('menu')
}

export default createHomepage;
