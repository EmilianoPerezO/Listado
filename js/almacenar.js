const btnA = document.getElementById("agregar");
const btnL = document.getElementById("limpiar");
const inputText = document.getElementById('item');
const container = document.getElementById('contenedor');

btnA.addEventListener('click', () => {
    let inputValue = inputText.value;
    localStorage.setItem('inputText', inputValue);
    console.log(localStorage.getItem("inputText"));

    if (inputValue) {
        container.innerHTML += `<li>${inputValue}</li>`;
    }
});

btnL.addEventListener('click', () => {
    localStorage.clear();
    container.innerHTML = null;
    console.log(localStorage.getItem("inputText"));
});
