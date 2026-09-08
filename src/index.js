import { clearContent, loadHome, loadMenu } from "./load.js";

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