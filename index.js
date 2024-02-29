import './src/products.js'
import logoNike from "./public/logo.jpg"



const sectionFiltros = document.querySelector(".filtros");
const sectionProducts = document.querySelector(".products");
const modelNikeFiltro = document.getElementById("modelNikeFiltro");
const filtroPrecio = document.getElementById("filtroPrecio");

initializeFilters();
crearCartaProducto(products)

function crearCartaProducto(printProducts) {
    sectionProducts.innerHTML = "";

    printProducts.forEach((product) => {
    const CartaProducto = document.createElement("div");
    CartaProducto.classList.add("product");
    CartaProducto.innerHTML = `
            <img src="${product.img}" alt="${product.nombre}">
            <h3>${product.nombre}</h3>
            <p>Precio: ${product.precio} €</p>
            <p>specialType: ${product.specialType}</p>
            <p>modelNike: ${product.modelNike}</p>
            <p>nroColores: ${product.nroColores}</p>
            <div>divColores: ${product.divColores}</div>
        `;

        for (const color of product.colores) {
            const colorHTML = document.createElement("div");
    
            colorHTML.className = "color";
            colorHTML.style.backgroundColor = color;
    
            divColores.appendChild(colorHTML);
        }
    sectionProducts.appendChild(CartaProducto);
  });
}

function initializeFilters() {
  const option = document.createElement("option");
  option.value = "Filtro por Modelo";
  option.textContent = "Filtro por Modelo";
  modelNikeFiltro.appendChild(option);
  const uniqueModels = [...new Set(products.map((product) => product.modelNike))];
  uniqueModels.forEach((modelNike) => {
    const option = document.createElement("option");
    option.value = modelNike;
    option.textContent = modelNike;
    modelNikeFiltro.appendChild(option);
  });
}

let filteredProducts = [];

function filterProducts() {
  const selectedModel = modelNikeFiltro.value;
  const enteredPrice = parseFloat(filtroPrecio.value);

  filteredProducts = products.filter((product) => {
    const modelMatch = !selectedModel || product.modelNike=== selectedModel;
    const priceMatch = !enteredPrice || product.precio <= enteredPrice;
    return modelMatch && priceMatch;
  });

  crearCartaProducto(filteredProducts);

  const sinResultado = document.getElementById("sinResultado");
  sinResultado.style.display = filteredProducts.length === 0 ? "block" : "none";
}

function clearFilters() {
  modelNikeFiltro.value = "";
  filtroPrecio.value = "";
  crearCartaProducto(products);
  const sinResultado = document.getElementById("sinResultado");
  sinResultado.style.display = "none";
}