// Write your code here!
// Remove the main element with the id "main"
document.querySelector("main#main").remove();

// Create a new h1 element and set its text content
const newHeader = document.createElement("h1");
newHeader.textContent = "YOUR-NAME is the champion";

// Set the id of the newHeader element to 'victory'
newHeader.setAttribute("id", "victory");

// Append the newHeader element to the body of the HTML document
document.body.appendChild(newHeader);
