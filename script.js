document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
    const shoppingListItems = document.getElementById("shopping-list-items");
    const supermarketFilter = document.getElementById("supermarketFilter");
    const shoppingListSection = document.getElementById("shopping-list");

    let shoppingList = [];

    // Fetch products from JSON server
    function fetchProducts() {
        fetch("http://localhost:3000/products")
            .then(response => response.json())
            .then(data => displayProducts(data));
    }

    // Display products
    function displayProducts(products) {
        productList.innerHTML = "";
        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");

            productCard.innerHTML = `
                <img src="pics/${product.name}.jpg" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Category: ${product.category}</p>
                <h4>Prices:</h4>
                <label><input type="checkbox" data-name="${product.name}" data-price="${product.prices.Naivas}" data-store="Naivas"> Naivas: Ksh ${product.prices.Naivas}</label><br>
                <label><input type="checkbox" data-name="${product.name}" data-price="${product.prices.Carrefour}" data-store="Carrefour"> Carrefour: Ksh ${product.prices.Carrefour}</label><br>
                <label><input type="checkbox" data-name="${product.name}" data-price="${product.prices.Cleanshelf}" data-store="Cleanshelf"> Cleanshelf: Ksh ${product.prices.Cleanshelf}</label><br>
                <label><input type="checkbox" data-name="${product.name}" data-price="${product.prices.Quickmart}" data-store="Quickmart"> Quickmart: Ksh ${product.prices.Quickmart}</label>
            `;

            productList.appendChild(productCard);

            productCard.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
                checkbox.addEventListener("change", (e) => {
                    if (e.target.checked) {
                        shoppingList.push({
                            name: e.target.dataset.name,
                            price: e.target.dataset.price,
                            store: e.target.dataset.store
                        });
                    } else {
                        shoppingList = shoppingList.filter(item => item.name !== e.target.dataset.name);
                    }
                });
            });
        });
    }
    // Function to filter products based on search query
function searchProduct() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(card => {
        const productName = card.querySelector("h3").innerText.toLowerCase();
        if (productName.includes(searchInput)) {
            card.style.display = "block"; // Show matching product
        } else {
            card.style.display = "none"; // Hide non-matching products
        }
    });
}

// Attach event listener to search button
document.getElementById("search-button").addEventListener("click", searchProduct);

// Also trigger search on typing
document.getElementById("search-input").addEventListener("keyup", searchProduct);

    // Add new product
    document.getElementById("product-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const newProduct = {
            name: document.getElementById("product-name").value,
            category: document.getElementById("product-category").value,
            prices: {
                Naivas: document.getElementById("price-naivas").value,
                Carrefour: document.getElementById("price-carrefour").value,
                Cleanshelf: document.getElementById("price-cleanshelf").value,
                Quickmart: document.getElementById("price-quickmart").value
            },
            image: document.getElementById("product-image").value
        };

        fetch("http://localhost:3000/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProduct)
        }).then(() => fetchProducts());
    });

    // View shopping list
    document.getElementById("viewShoppingList").addEventListener("click", () => {
        shoppingListSection.classList.remove("hidden");
        shoppingListItems.innerHTML = shoppingList.map(item => `<li>${item.name} - ${item.store}: Ksh ${item.price}</li>`).join("");
    });

    document.getElementById("closeShoppingList").addEventListener("click", () => {
        shoppingListSection.classList.add("hidden");
    });

    fetchProducts();
});
