
const products = [
  {
    id: 1,
    nombre: "Nike V2K Run",
    precio: 119.99,
    img:src = "./public/images/01v2k-run-zapatillas-ZzTJRD.jpg",
    specialType: "Materiales Sostenibles", 
    modelNike: "Run",
    nroColores: "5 colores",
    colores: [ "#F9FAFF", "#8e9297", "#6a665a","#bfd98e","black"],
  },
  {
    id: 2,
    nombre: "Nike Dunk Low",
    precio: 119.99,
    img: src ="./public/images/02dunk-low-zapatillas-15mQNw.jpg",
    specialType: "Superventas", 
    modelNike: "Dunk Low",
    nroColores: "6 colores",
    colores: ["#F9FAFF","#6da4e6", "red",  "green","#6a665a","black"],
  },
  {
    id: 3,
    nombre: "Nike Air Force 1 `07",
    precio: 119.99,
    img: src = "./public/images/03air-force-1-07-next-nature-zapatillas-dgr2tk.jpg",
    specialType: "Superventas",
    modelNike: "Air Force 1",
    nroColores: "5 colores",
    colores: ["#F9FAFF", "#6da4e6", "red","#8e9297", "#6a665a" ],
  },
  {
    id: 4,
    nombre: "Nike Air Max Pulse",
    precio: 79.97,
    img: src ="./public/images/04air-max-pulse-zapatillas-lgFPkM.jpg",
    specialType: "New",
    modelNike: "Run",
    nroColores: "5 colores",
    colores: ["#F9FAFF", "#bfd98e", "#6da4e6", "#8d60bf","#8e9297"],
  },
  {
    id: 5,
    nombre: "Nike Cortez",
    specialType: "Un Clasico Renovado",
    img: src ="./public/images/05prop.jpg",
    modelNike: "Nike Cortez",
    precio: 159.99,
    colores: ["#F9FAFF"],
  },
  {
    id: 6,
    nombre: "Nike Air Force 1 `07 Lx",
    precio: 129.99,
    img: src ="./public/images/06air-force-1-07-lx-zapatillas-bRRHxR.jpg",
    specialType: "Superventas",
    modelNike: "Air Force 1",
    nroColores: "1 color",
    colores: ["#F9FAFF"],
  },
  {
    id: 7,
    nombre: "Nike Jordan 1 Low",
    precio: 129.99,
    img: src ="./public/images/07air-jordan-1-low-zapatillas-QnthX1.jpg",
    specialType: "Materiales Sostenibles",
    modelNike: "Air Jordan",
    nroColores: "6 colores",
    colores: [ "#F9FAFF","#6da4e6","red", "#f7b64e", "#8e9297","black"],
  },
  {
    id: 8,
    nombre: "Nike Phoenix Waffle",
    precio: 99.99,
    img: src ="./public/images/08phoenix-waffle-zapatillas-DTQ3JT.jpg",
    specialType: "New",
    modelNike: "Waffle",
    nroColores: "4 colores",
    colores: [ "#F9FAFF","#6da4e6","#bfd98e","#6a665a"],
  },
  {
    id: 9,
    nombre: "Nike Court Legacy Lift",
    precio: 99.27,
    img: src ="./public/images/10air-jordan-1-low-se-zapatillas-RRW0nZ.jpg",
    specialType: "Superventas",
    nroColores: "4 colores",
    modelNike: "Court Legacy",
    colores: ["#F9FAFF", "#f7b64e","#bfd98e","black"],
  },
  {
    id: 10,
    nombre: "Nike Jordan 1 Low SE",
    precio: 119.99,
    img: src ="./public/images/11air-max-97-zapatillas-frVmb5.jpg",
    specialType: "Materiales Sostenibles", 
    modelNike: "Air Jordan",
    nroColores: "3 colores",
    colores: [ "#F9FAFF", "#8e9297","black"],
  },
  {
    id: 11,
    nombre: "Nike Air max 97",
    precio: 94.99,
    img: src = "./public/images/12air-jordan-1-mid-zapatillas-CR2SZ7.jpg",
    specialType: "New", 
    modelNike: "Air Jordan",
    nroColores: "2 colores",
    colores: ["#F9FAFF","black",],
  },
  {
    id: 12,
    nombre: "Air Jordan 1 Mid",
    precio: 159.99,
    img: src ="./public/images/03air-force-1-07-next-nature-zapatillas-dgr2tk.jpg",
    specialType: "Superventas",
    modelNike: "Air Jordan",
    nroColores: "2 colores",
    colores: [   "#F9FAFF", "black", ],
  }
];


const sectionFiltros = document.querySelector(".filtros");
const sectionProducts = document.querySelector(".cardProducts");
const modelNikeFiltro = document.getElementById("modelNikeFiltro");
const filtroPrecio = document.getElementById("filtroPrecio");

initializeFilters();

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
    const modelMatch = !selectedModel || product.modelNike === selectedModel;
    const priceMatch = !enteredPrice || product.precio <= enteredPrice;
    return modelMatch && priceMatch;
  });

  printProducts(filteredProducts);

  const sinResultado = document.getElementById("sinResultado");
  sinResultado.style.display = filteredProducts.length === 0 ? "flex" : "none";
}

function clearFilters() {
  modelNikeFiltro.value = "";
  filtroPrecio.value = "";
  printProducts(products);
  const sinResultado = document.getElementById("sinResultado");
  sinResultado.style.display = "none";
}

const printProducts = (products) => {
  const sectionProducts = document.querySelector(".cardProducts");
  sectionProducts.innerHTML = "";

  let colorAnterior = "";

  for (const product of products) {
    const sectionProduct = document.createElement("div");
    const divImg = document.createElement("div");
    const img = document.createElement("img");
    const nombre = document.createElement("h3");
    const nroColores= document.createElement("p");
    const precio = document.createElement("p");
    const specialType = document.createElement("p");
    const divType = document.createElement("div");
    const divColores = document.createElement("div");

    for (const color of product.colores) {
        const colorCard = document.createElement("div");

        colorCard.className = "color";
        colorCard.style.backgroundColor = color;

        divColores.appendChild(colorCard);
    
    }

    divColores.className = "colores";
    sectionProduct.className = "products";
    divImg.classList.add("imgContainer");
    divType.classList.add("type", "flex-container");
    img.src = product.img;
    specialType.className = "specialType";
    specialType.textContent = product.specialType;
    nombre.textContent = product.nombre;
    nroColores.textContent= product.nroColores;
    precio.textContent = `${product.precio} €`;
   

    sectionProduct.appendChild(divColores);
    sectionProduct.appendChild(divImg);
    divImg.appendChild(img);
    sectionProduct.appendChild(specialType);
    sectionProduct.appendChild(nombre);
    sectionProduct.appendChild(nroColores);
    sectionProduct.appendChild(precio);
    sectionProduct.appendChild(divType);
    sectionProducts.appendChild(sectionProduct);
  }
};

printProducts(products);
/*crearCartaProducto(products)

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
*/
