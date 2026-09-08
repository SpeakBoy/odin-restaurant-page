function loadMenu()
{
    const content = document.querySelector("#content");

    const title = document.createElement("h1");
    title.textContent = "Menu";

    const itemTitle = document.createElement("h2");
    itemTitle.textContent = "La queue du chat - $250";

    const itemDescription = document.createElement("p");
    itemDescription.textContent = "Did you expect anything else? Why would you need something different when you have this magnificient cuisine! NO REFUNDS!";

    content.appendChild(title);
    content.appendChild(itemTitle);
    content.appendChild(itemDescription);
}

export { loadMenu };