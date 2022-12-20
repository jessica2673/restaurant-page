import './style.css';
import loadContact from './loadContact';
import loadHome from './loadHome';
import loadMenu from './loadMenu';

function component() {
    const element = document.createElement('div');
    const content = document.getElementById('content');

    const homeBtn = document.createElement('button');
    homeBtn.textContent = "Home";
    homeBtn.classList.add("tab");
    element.appendChild(homeBtn);
    homeBtn.addEventListener("click", (e) => {
        content.textContent='';
        loadHome();
    });

    const menuBtn = document.createElement('button');
    menuBtn.textContent = "Menu";
    menuBtn.classList.add("tab");
    element.appendChild(menuBtn);
    menuBtn.addEventListener("click", (e) => {
        content.textContent='';
        loadMenu();
    });

    const contactBtn = document.createElement('button');
    contactBtn.textContent = "Contact";
    contactBtn.classList.add("tab");
    element.appendChild(contactBtn);
    contactBtn.addEventListener("click", (e) => {
        content.textContent='';
        loadContact();
    });
    initPage();
    return element;
  }
  
  document.body.appendChild(component());

function initPage() {
    loadHome();
}

