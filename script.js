// Liste des produits
const products = [
    { 
        name: "Parfum Floral", 
        price: "€39.99", 
        image: "https://via.placeholder.com/300x400.png?text=Parfum+1", 
        description: "Un parfum floral avec des notes de jasmin et de rose, parfait pour les soirées romantiques."
    },
    { 
        name: "Parfum Oriental", 
        price: "€59.99", 
        image: "https://via.placeholder.com/300x400.png?text=Parfum+2", 
        description: "Un parfum oriental avec des arômes de vanille et d'ambre, élégant et mystérieux."
    },
    { 
        name: "Ensemble Lingerie Sexy", 
        price: "€29.99", 
        image: "https://via.placeholder.com/300x400.png?text=Lingerie+1", 
        description: "Un ensemble en dentelle fine, idéal pour une occasion spéciale."
    },
    { 
        name: "Ensemble Lingerie Élégant", 
        price: "€49.99", 
        image: "https://via.placeholder.com/300x400.png?text=Lingerie+2", 
        description: "Ensemble en satin avec des détails en dentelle, doux et raffiné."
    }
];

// Fonction pour afficher les produits
function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p>${product.name}</p>
            <span>${product.price}</span>
        `;

        // Ajouter un événement de clic pour afficher la modale avec les détails du produit
        productElement.addEventListener('click', () => {
            openModal(product);
        });

        productList.appendChild(productElement);
    });
}

// Fonction pour ouvrir la modale avec les détails du produit
function openModal(product) {
    document.getElementById('product-name-modal').innerText = product.name;
    document.getElementById('product-image-modal').src = product.image;
    document.getElementById('product-description-modal').innerText = product.description;
    document.getElementById('product-price-modal').innerText = product.price;

    // Afficher la modale
    document.getElementById('product-modal').style.display = "block";
}

// Fonction pour fermer la modale
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('product-modal').style.display = "none";
});

// Fonction de recherche
function searchProducts() {
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchQuery)
    );
    displayProducts(filteredProducts);
}

// Afficher tous les produits au début
displayProducts(products);
