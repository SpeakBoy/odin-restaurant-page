function loadContact()
{
    const content = document.querySelector("#content");

    const title = document.createElement("h1");
    title.textContent = "Contact";

    const ownerName = document.createElement("h2");
    ownerName.textContent = "Owner - Mr. Bigglesworth";

    const ownerPhoneNumber = document.createElement("p");
    ownerPhoneNumber.textContent = "(666)-DOC-EVIL";
    
    const ownerEmail = document.createElement("p");
    ownerEmail.textContent = "biggs@aol.net";

    content.appendChild(title);
    content.appendChild(ownerName);
    content.appendChild(ownerPhoneNumber);
    content.appendChild(ownerEmail);
}

export { loadContact };