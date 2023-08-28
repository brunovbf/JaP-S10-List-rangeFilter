const URL = "https://fakestoreapi.com/products";
const info = document.getElementById('info');
const botonFiltrar = document.getElementById('rangeFilterCount');
const precioMax = document.getElementById('rangeFilterCountMax');
const precioMin = document.getElementById('rangeFilterCountMin');
const botonLimpiar = document.getElementById('clearRangeFilter');
let dato = []
let filtrados = []

document.addEventListener("DOMContentLoaded", () => {
    // Fetch a URL y organizamos la info obtenida del JSON en un listado
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            dato = data;
            showData(data)
        })
})

function showData(data) {
    info.innerHTML = ''
    for (const item of data) {
        info.innerHTML += `<ul><strong> ${item.title}</strong> </ul>
       <ul> ${item.price}</ul>`
    }

};
botonFiltrar.addEventListener("click", () => {
    filtrados = dato.filter(item => parseInt(item.price) >= precioMin.value && parseInt(item.price) <= precioMax.value);
    showData(filtrados);
})
// Función que limpia los filtros aplicados anteriormente.
botonLimpiar.addEventListener("click", () => {
    filtrados = [];
    precioMin.value = "";
    precioMax.value = "";
    showData(dato);
})