import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";

function clearContent()
{
    const content = document.querySelector("#content");
    while (content.firstChild)
    {
        content.removeChild(content.lastChild);
    }
}

loadHome();

const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", () => {
    clearContent();
    loadHome();
});

const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", () => {
    clearContent();
    loadMenu();
});

const contactButton = document.querySelector("#contact");
contactButton.addEventListener("click", () => {
    clearContent();
    loadContact();
});