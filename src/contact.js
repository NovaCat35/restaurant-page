import teleSvg from "./assets/telephone.svg";
import "./styles/contact.css";

let contactContainer = null;
let contactInfoContainer = null;


function createContact() {
	const mainContainer = document.querySelector(".main-container");
   contactContainer = createElement("div", "contact-container");
   contactInfoContainer = createElement("div", "contact-info-container");

	clearMain(mainContainer);
	removeHomeClassList(mainContainer)
	removeMenuClassList(mainContainer)
   createTitle()
   createPhoneInfo()
   createStoreHrInfo();
	createMap();

	mainContainer.appendChild(contactContainer);
}

function createTitle() {
	const title = createElement("h1", "contact-title");
	const lineBreak = createElement("p", "contact-line-break");
	title.textContent = "Contact Us";

	contactContainer.appendChild(title);
	contactContainer.appendChild(lineBreak);
}

function createMap() {
   const mapContainer = createElement("div", "map");
   contactContainer.appendChild(mapContainer);

   const apiKey = process.env.API_KEY;

   // Create the script element
   const script = document.createElement("script");
   script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
   script.async = true;
   script.defer = true;
   document.head.appendChild(script);

   window.initMap = function () {
      // Create map options
      const mapOptions = {
         center: { lat: 41.0368445901921, lng: -74.63686236140164 }, // Coordinates for 4 Main Street, Sparta NJ
         zoom: 16
      };

      // Create the map 
      const map = new google.maps.Map(mapContainer, mapOptions);   
      // Add a marker for the restaurant's location
      const marker = new google.maps.Marker({
         position: { lat: 41.0368445901921, lng: -74.63686236140164 }, // Coordinates for 4 Main Street, Sparta NJ
         map: map,
         title: "Restaurant"
      });
   }
}

function removeHomeClassList(mainContainer) {
	mainContainer.classList.remove('home')
}

function removeMenuClassList(mainContainer) {
	mainContainer.classList.remove('menu')
}

function createStoreHrInfo() {
   const storeHrContainer = createElement("div", "store-hr-container");
	const schedules = [createSchedule("Sun", "Closed"), createSchedule("Mon - Thur", "11:00 AM - 10:00 PM"), createSchedule("Friday", "11:00 AM - 11:00 PM"), createSchedule("Saturday", "1:00 AM - 11:00 PM")];
	for (let i = 0; i < 4; i++) {
		storeHrContainer.appendChild(schedules[i]);
	}
	contactInfoContainer.appendChild(storeHrContainer);
   contactContainer.appendChild(contactInfoContainer);
}

function createSchedule(day, time) {
	const scheduleContainer = createElement("div", "schedule-container");
	const dayContainer = createElement("div", "day-container");
	const hoursContainer = createElement("div", "hours-container");

	dayContainer.textContent = day;
	hoursContainer.textContent = time;

	scheduleContainer.appendChild(dayContainer);
	scheduleContainer.appendChild(hoursContainer);
	return scheduleContainer;
}

function createPhoneInfo() {
   const phoneInfoContainer = createElement("div", "phone-info-container");
	const tele1 = createTeleElement("973-729-2218");
	const tele2 = createTeleElement("973-729-2213");
	phoneInfoContainer.appendChild(tele1);
	phoneInfoContainer.appendChild(tele2);
	contactInfoContainer.appendChild(phoneInfoContainer);
}

function createTeleElement(number) {
	const teleContainer = createElement("div", "tele-container");
	const teleIcon = createElement("img", "phone-icon");
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

function createElement(type, className) {
	const element = document.createElement(type);
	element.classList.add(className);
	return element;
}

export default createContact;
