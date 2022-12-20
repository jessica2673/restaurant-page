function makeMenu() {
    const menuPage = document.createElement("div");
    menuPage.classList.add("menu");
    menuPage.appendChild(addP("Menu", "title"));
    menuPage.appendChild(addP("Welcome to the menu!", "text"));

    const itemContainer = document.createElement("div");
    itemContainer.setAttribute('id', 'itemContainer');
    itemContainer.appendChild(addMenuItem("Ice Cream Sundae", "$14.00", "Three scoops of delicious ice cream topped with sprinkles and melted chocolate.",
    "sundae.jpg", "photo of sundae"));
    itemContainer.appendChild(addMenuItem("Banana Split", "$12.50", "3 scoops of ice cream on top of a sweet and perfectly ripe banana. \
     Add an unlimited amount of toppings!", "banana_split.jpg", "picture of banana split"));
    itemContainer.appendChild(addMenuItem("Popsicle", "$5.00", "An ice cream popsicle perfect for travel!", "popsicle.jpg", 
    "picture of popsicle"));
    menuPage.appendChild(itemContainer);

    return menuPage;
}

function addP(content, c) {
    const paragraph = document.createElement("p");
    paragraph.textContent = content;
    paragraph.classList.add(c);
    return paragraph;
}

function addMenuItem(name, price, description, image, alt) {
    const item = document.createElement("div");
    item.classList.add("item");

    item.appendChild(addP(name, "name"));
    item.appendChild(addImg(image, alt));
    item.appendChild(addP(description, "description"));
    item.appendChild(addP(price, "price"));

    return item;
}

function addImg(src, alt) {
    const image = document.createElement("img");
    image.src = src;
    image.alt = alt;
    image.classList.add('preview');
    return image;
}

function loadMenu() {
    const content = document.getElementById("content");
    content.appendChild(makeMenu());
}

export default loadMenu;

