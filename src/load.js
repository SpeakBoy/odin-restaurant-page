function loadContent()
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

export { loadContent };