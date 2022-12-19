function loadMenu() {
    const menuPage = document.createElement("div");
    menuPage.classList.add("menu");
    menuPage.appendChild(addP("menu", "title"));
    menuPage.appendChild(addP("Welcome to the menu!"));
    menuPage.addMenuItem("Ice Cream Sundae", 14.00, "Three scoops of delicious ice cream topped with sprinkles and melted chocolate.",
    "icecream.jpg", "photo of sundae");

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
    
    const name = document.createElement("p");
    name.classList.add("name");
    item.appendChild(name);

    item.appendChild(addImg(image, alt));

    item.appendChild(addP(price, "price"));
    item.appendChild(addP(description, "description"));
    return item;
}

function addImg(src, alt) {
    const image = document.createElement("img");
    image.src = src;
    image.alt = alt;
    return image;
}

function loadPage() {
    const main = document.getElementById("main");
    main.textContent="";
    main.appendChild(loadMenu());
}

export default loadPage;
