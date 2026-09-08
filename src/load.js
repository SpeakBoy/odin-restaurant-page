function clearContent()
{
    const content = document.querySelector("#content");
    while (content.firstChild)
    {
        content.removeChild(content.lastChild);
    }
}

function loadHome()
{
    const content = document.querySelector("#content");

    const restaurantImage = document.createElement("img");
    restaurantImage.alt = "Front of the restaurant";

    const headline = document.createElement("h1");
    headline.textContent = "The Cat's Tail";

    const glazeParagraph = document.createElement("p");
    const emTitle = document.createElement("em");
    emTitle.textContent = "The Cat's Tail";
    const rest = document.createTextNode(" is the best restaurant to have ever existed, and probably the best restaurant that will ever exist! You could spend the rest of your life searching for someplace where the food tastes better, and yet, you will never succeed in these attempts. The food is simply that marvelous.");
    glazeParagraph.appendChild(emTitle);
    glazeParagraph.appendChild(rest);

    content.appendChild(restaurantImage);
    content.appendChild(headline);
    content.appendChild(glazeParagraph);
}

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

export { clearContent, loadHome, loadMenu };