import { clearContent, loadHome, loadMenu, loadContact } from "./load.js";

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