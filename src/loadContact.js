function loadContact() {
    const contactPage = document.createElement("div");
    contactPage.classList.add("contact");
    contactPage.appendChild(addTitle("Contact Us"));
    contactPage.appendChild(addP("Our email is parlor@gmail.com"));

    return contactPage;
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
    main.appendChild(loadContact());
}

export default loadPage;

