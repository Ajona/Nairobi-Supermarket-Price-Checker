document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("productList");
    const searchBar = document.getElementById("searchBar");
    const categoryFilter = document.getElementById("categoryFilter");
    const shoppingList = document.getElementById("shoppingList");

    // Fetch products from JSON Server
    function fetchProducts() {
        fetch("http://localhost:3000/products")
            .then(res => res.json())
            .then(products => displayProducts(products));
    }

    // Display products
    function displayProducts(products) {
        productList.innerHTML = "";
        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product");

            let priceList = "";
            for (const store in product.prices) {
                priceList += `<p>${store}: Ksh ${product.prices[store]}</p>`;
            }

            productCard.innerHTML = `
                <h3>${product.name}</h3>
                <p>Category: ${product.category}</p>
                ${priceList}
                <button onclick="addToShoppingList('${product.name}')">Add to Shopping List</button>
            `;

            productList.appendChild(productCard);
        });
    }

    // Search feature
    searchBar.addEventListener("input", () => {
        fetch("http://localhost:3000/products")
            .then(res => res.json())
            .then(products => {
                const searchText = searchBar.value.toLowerCase();
                const filteredProducts = products.filter(product =>
                    product.name.toLowerCase().includes(searchText)
                );
                displayProducts(filteredProducts);
            });
    });

    // Filter by category
    categoryFilter.addEventListener("change", () => {
        fetch("http://localhost:3000/products")
            .then(res => res.json())
            .then(products => {
                const category = categoryFilter.value;
                const filteredProducts = category
                    ? products.filter(product => product.category === category)
                    : products;
                displayProducts(filteredProducts);
            });
    });

    // Add to shopping list
    function addToShoppingList(item) {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        shoppingList.appendChild(listItem);
    }

    fetchProducts();
});
