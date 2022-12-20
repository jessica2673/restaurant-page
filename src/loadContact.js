function makeContact() {
    const contactPage = document.createElement("div");
    contactPage.classList.add("contact");
    contactPage.appendChild(addP("Contact Us", "title"));
    contactPage.appendChild(addP("Our email is parlor@gmail.com", "text"));

    return contactPage;
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

function loadContact() {
    const content = document.getElementById("content");
    content.appendChild(makeContact());
}

export default loadContact;

