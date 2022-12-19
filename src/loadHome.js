function loadHome() {
    const homePage = document.createElement("div");
    homePage.classList.add("home");
    homePage.appendChild(addTitle("Ice Cream Parlor"));
    homePage.appendChild(addImg("icecream.jpg", "picture of ice cream"));
    homePage.appendChild(addP("This restaurant was established in 1980 specifically to serve delicious and exotic brands of ice cream! \
    Drop by to see ice cream flavors you've never even heard about!"));

    return homePage;
}

function addTitle(content) {
    const paragraph = document.createElement("p");
    paragraph.textContent = content;
    paragraph.classList.add("intro");
    return paragraph;
}

function addP(content) {
    const paragraph = document.createElement("p");
    paragraph.textContent = content;
    return paragraph;
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
    main.appendChild(loadHome());
}

export default loadPage;

