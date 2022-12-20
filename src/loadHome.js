function makeHome() {
    const homePage = document.createElement("div");
    homePage.classList.add("home");
    homePage.appendChild(addP("Ice Cream Parlor", "title"));
    homePage.appendChild(addImg("icecream.jpg", "picture of ice cream"));
    homePage.appendChild(addP("This restaurant was established in 1980 specifically to serve delicious and exotic brands of ice cream! \
    Drop by to see ice cream flavors you've never even heard about!", "text"));

    return homePage;
}

function addP(content, c) {
    const paragraph = document.createElement("p");
    paragraph.textContent = content;
    paragraph.classList.add(c);
    return paragraph;
}

function addImg(src, alt) {
    const image = document.createElement("img");
    image.src = src;
    image.alt = alt;
    return image;
}

function loadHome() {
    const content = document.getElementById("content");
    content.appendChild(makeHome());
}

export default loadHome;

