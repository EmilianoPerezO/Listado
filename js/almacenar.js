const btnA = document.getElementById("agregar");
const btnL = document.getElementById("limpiar");
const inputText = document.getElementById("item");
const container = document.getElementById("contenedor");

let items = JSON.parse(localStorage.getItem("items")) || [];

btnA.addEventListener("click", () => {
  let inputValue = inputText.value;

  if (inputValue) {
    items.push(inputValue);
    localStorage.setItem("items", JSON.stringify(items));
    inputText.value = "";
    renderItems();
  }
});

btnL.addEventListener("click", () => {
  localStorage.removeItem("items");
  items = [];
  container.innerHTML = "";
});

function renderItems() {
  container.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    container.appendChild(li);
  });
}

renderItems();
