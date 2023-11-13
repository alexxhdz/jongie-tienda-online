document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.getElementById("products-container");

    // Simula la carga de datos desde un archivo JSON (puedes cargarlos desde una API real).
    const productsData = [
        {
            name: "Mascara de peluche",
            description: "Usa pilas.",
            price: 160,
            image: "/IMG/Productos/1.jpg"
        },
        {
            name: "Llaveros de controles de video Juegos",
            description: "Pregunta por los demas modelos.",
            price: 90,
            image: "/IMG/Productos/2.jpg"
        },
        {
            name: "Llaveros de balones",
            description: "Pregunta por los demas modelos.",
            price: 90,
            image: "/IMG/Productos/3.jpg"
        },
        {
            name: "Llaveros de controles de video Juegos",
            description: "Pregunta por los demas modelos.",
            price: 70,
            image: "/IMG/Productos/4.jpg"
        },
        {
            name: "Patitos de goma de viento",
            description: "Pregunta por los demas modelos.",
            price: 80,
            image: "/IMG/Productos/5.jpg"
        },
        {
            name: "Mascaras de peluche",
            description: "Pregunta por los demas modelos.",
            price: 180,
            image: "/IMG/Productos/6.jpg"
        },
        {
            name: "Patitos de goma de viento",
            description: "Pregunta por los demas modelos.",
            price: 80,
            image: "/IMG/Productos/7.jpg"
        },
        {
            name: "Llaveros de controles de Xbox miniatura",
            description: "Pregunta por los demas modelos.",
            price: 70,
            image: "/IMG/Productos/8.jpg"
        },
        {
            name: "Mascara XX",
            description: "Pregunta por los demas modelos y colores.",
            price: 150,
            image: "/IMG/Productos/9.jpg"
        }
    ];

    // Renderiza los productos en la página.
    productsData.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p>${product.description}</p>
    <p>Precio: $${product.price.toFixed(2)}</p>
    <a target="_blank" href="https://wa.link/tx8xuq">Agregar al carrito</a>
`;
        productsContainer.appendChild(productElement);
    });
});