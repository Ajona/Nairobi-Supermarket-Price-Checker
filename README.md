# Nairobi-Supermarket-Price-Checker
 Compare prices of grocery items across different supermarkets like Carrefour, Naivas, and Quickmart.
# Nairobi-Supermarket-Price-Checker
 Compare prices of grocery items across different supermarkets like Carrefour, Naivas, and Quickmart.
Nairobi Supermarket Price Checker
Nairobi Supermarket Price Checker is a web application that allows users to compare grocery prices across the four major supermarkets in Nairobi: Naivas, Carrefour, Cleanshelf, and Quickmart.

With this app, users can:
✔ Search for products
✔ Compare prices across multiple supermarkets
✔ Add new products to the database
✔ Select the best prices for a personalized shopping list
✔ View products by supermarket using a dropdown

Features Overview
Product List: Displays products along with their prices across supermarkets.

Search Bar: Allows users to find a product quickly.

Shopping List: Users can select the best prices per supermarket and view selected products.

Add New Product: Users can add new products (Name, Category, Prices, Image URL).

Supermarket Filter: A dropdown menu to view products from a specific supermarket.

How to Set Up the App Locally
Clone the Repository
git clone https://github.com/your-username/nairobi-supermarket-price-checker.git
cd nairobi-supermarket-price-checker


Install JSON Server
If you don’t have json-server installed, run:
npm install -g json-server



Start JSON Server
json-server --watch db.json



This will serve the product data at:
http://localhost:3000/products

Open index.html in a Browser
Simply open the index.html file in your browser to start using the app.

How to Use the App
Viewing Products
When you open the app, you will see a list of 30 grocery items.

Each product shows its name, category, prices in supermarkets, and an image.

You can scroll through the list to see all products.

Searching for a Product
Type the product name in the search bar (e.g., "Milk").

Click the "Search" button or press Enter.

The matching products will be displayed, hiding non-matching ones.

Filtering by Supermarket
Use the dropdown menu at the top to select a supermarket (Naivas, Carrefour, Cleanshelf, or Quickmart).

This will display only products available at that supermarket.

Selecting the Best Prices
Each product has checkboxes beside supermarket prices.

Select the best price per supermarket by clicking the checkbox.

The selected products will be added to your shopping list.

Viewing the Shopping List
Click on the "Shopping List" section.

This shows all the products you selected for purchase.

Adding a New Product
On the right side, you'll see the "Add New Product" section.

Fill in the fields:

Product Name

Category

Prices for all 4 supermarkets

Image URL (or use an existing image from /pics/)

Click "Add Product" to submit.

The new product will be saved to the server and appear in the product list.

Additional Information
Editing the Database
If you want to manually edit the products, open db.json and modify the product list.

Restarting the Server
If new products don’t appear, restart the JSON Server:

json-server --watch db.json


