import "./styles/menu.css";
import bamboo_soup from "./assets/bamboo_shoot_soup.jpeg";
import golden_shrimp_balls from "./assets/golden_shrimp_balls.jpeg";
import sweet_madame from "./assets/sweet_madame.jpeg";
import pita_pocket from "./assets/pita_pocket.jpeg";
import onigiri from "./assets/onigiri.jpeg";
import adeptus_temptation from "./assets/adeptus_temptation.jpeg";
import jade_parcel from "./assets/jade_parcels.jpeg";
import sticky_honey_roast from "./assets/sticky_honey_roast.jpeg";
import squirrel_fish from "./assets/squirrel_fish.jpeg";
import chicken_tofu_pudding from "./assets/chicken_tofu_pudding.jpeg";
import golden_crab from "./assets/golden_crab.jpeg";
import scented_meat_balls from "./assets/scented_meat_balls.jpeg";

let main = null;

function createMenu() {
	main = document.querySelector(".main-container");
	clearMain();
	removeHomeClassList(main)
	setMenuClassList(main);

	const menuContainer = createElement("div", "menu-container");
	const food1 = createCard("Golden Shrimp Balls", golden_shrimp_balls, "A deep-fried shrimp dish. The aroma assaults your senses, while the crispy potatoes bring out the light sweetness of the shrimp meat.");
	const food2 = createCard("Jade Parcel", jade_parcel, "An exquisite-looking dish. The ham's sweetness is locked inside the fresh vegetables, drizzled with a spicy broth. Delicious is an understatement.");
	const food3 = createCard("Adeptus' Temptation", adeptus_temptation, "A complex, famous type of Liyue cuisine, in which specially selected ingredients are submerged and slowly bowled into soup stock.");
	const food4 = createCard("Sweet Madame", sweet_madame, "Honey-roasted fowl. The honey and sweet flowers come together to compliment the tender fowl meat.");
	const food5 = createCard("Sticky Honey Roast", sticky_honey_roast, "A meat dish in a sweet honey sauce. The carrots take the gamey edge off the meat, and the sauce brings it all together sweetly. The perfect warm dish for a cold winter night.");
	const food6 = createCard("Squirrel Fish", squirrel_fish, "The fish is first completely deboned before crisscross cuts are made on the skin. The fish is then coated in flour and deep-fried to a golden-brown color, then served with ketchup drizzled on top. It is tender and juicy on the inside and crispy on the outside.");
	const food7 = createCard("Pita Pocket", pita_pocket, "A bread with varied fillings. The flat dough has puffed up in the oven, reminding you of a lovely Pufferfish.");
	const food8 = createCard("Onigiri", onigiri, "A portable dish made with rice. It is simple to make and remains delicious at room temperatures");
	const food9 = createCard("Chicken Tofu Pudding", chicken_tofu_pudding, "The finely-diced chicken breast is stirred strongly and added into a soup that has various other minced meats within, before being cooked over a small flame. The result is light and elegant, and it tastes like tofu pudding.");
	const food10 = createCard("Bamboo Shoot Soup", bamboo_soup, "A soup dish that's been stewed in for a good long while. . The meat and ham have been diced into small pieces, and the soup has been kept on low heat till it turned milky white. ");
	const food11 = createCard("Golden Crab", golden_crab, "A crab dish cooked in the ancient ways. The crab has been chopped into pieces and battered with flour, before being stir-fried till golden and rich with flavor.");
	const food12 = createCard("Scented Meat Balls", scented_meat_balls, "A dish with ground meat as its base. After crushing the wheat and cooking it over a fire, ground meat was added to form the outer layer. Onions and meat were then stir-fried to make the filling. Finally, the mixture was molded into balls and deep-fried until golden. ");

	menuContainer.appendChild(food1);
	menuContainer.appendChild(food2);
	menuContainer.appendChild(food3);
	menuContainer.appendChild(food4);
	menuContainer.appendChild(food5);
	menuContainer.appendChild(food6);
	menuContainer.appendChild(food7);
	menuContainer.appendChild(food8);
	menuContainer.appendChild(food9);
	menuContainer.appendChild(food10);
	menuContainer.appendChild(food11);
	menuContainer.appendChild(food12);

	addMenuToMain(menuContainer);
}

function createCard(dishName, img, info) {
	const cardContainer = createElement("div", "card-container");

	const name = createElement("h2", "dish-name");
	name.textContent = dishName;
	cardContainer.appendChild(name);

	const foodImg = createImageBitmap(img);
	cardContainer.appendChild(foodImg);

	const description = createElement("p", "description");
	description.textContent = info;
	cardContainer.appendChild(description);

	return cardContainer;
}

function createImageBitmap(imgSrc) {
	const img = document.createElement("img", "food-img");
	img.src = imgSrc;
	return img;
}

function createElement(type, className) {
	const element = document.createElement(type);
	element.classList.add(className);
	return element;
}

function clearMain() {
	// Clear all elements in main
	while (main.firstChild) {
		main.removeChild(main.firstChild);
	}
}

function removeHomeClassList(mainContainer) {
	mainContainer.classList.remove('home')
}

function setMenuClassList(mainContainer) {
	mainContainer.classList.add("menu");
}

function addMenuToMain(menu) {
	main.appendChild(menu);
}

export default createMenu;
