const deleteNode = document.querySelector("main#main");
deleteNode.remove("main#main");
const newHeader = document.createElement("h1");
newHeader.textContent = "YOUR-NAME is the champion";
newHeader.setAttribute("id", "victory");
document.body.appendChild(newHeader);
