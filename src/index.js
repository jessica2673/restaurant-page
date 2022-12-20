import './style.css';
import loadContact from './loadContact';
import loadHome from './loadHome';
import loadMenu from './loadMenu';

function component() {
    const element = document.createElement('div');
    const content = document.getElementById('content');
    const nav = createNav();
    
    content.appendChild(nav);

    const homeBtn = document.createElement('button');
    homeBtn.textContent = "Home";
    homeBtn.classList.add("tab");
    nav.appendChild(homeBtn);
    homeBtn.addEventListener("click", (e) => {
        content.textContent='';
        content.appendChild(nav);
        loadHome();
    });

    const menuBtn = document.createElement('button');
    menuBtn.textContent = "Menu";
    menuBtn.classList.add("tab");
    nav.appendChild(menuBtn);
    menuBtn.addEventListener("click", (e) => {
        content.textContent='';
        content.appendChild(nav);
        loadMenu();
    });

    const contactBtn = document.createElement('button');
    contactBtn.textContent = "Contact";
    contactBtn.classList.add("tab");
    nav.appendChild(contactBtn);
    contactBtn.addEventListener("click", (e) => {
        content.textContent='';
        content.appendChild(nav);
        loadContact();
    });
    
    loadHome();
    return element;
  }
  
function createNav() {
    const navbar = document.createElement('div');
    navbar.classList.add('nav');
    return navbar;
}

document.body.appendChild(component());



