# E-Commerce Website

This is a simple e-commerce website built using Node.js, Express, and in-memory data structures to manage products and shopping carts.

## Features

- Add new products to the system.
- View available products in the system.
- Add products to the cart (using in-memory data structures).
- View the items currently in the user's cart.
- Remove items from the cart.
- Calculate the total price of items in the cart.

## Prerequisites
Before you begin, ensure you have met the following requirements:

* Node.js and npm installed.
* MongoDB set up and running.
* Necessary dependencies installed (see the Dependencies section in package.json).

## Instructions to Set Up and Run Locally

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Akshay-Anilkumar/ecommerce.git

2. Install the required dependencies:

   npm install
   
3. Set up a MongoDB database (either locally or using a cloud solution) and update the MongoDB URI in the code with your database connection.
   
4. Start the application:

   npm run dev

5. The API will be accessible at http://localhost:3000 by default.

## Project Structure
The project structure is organized as follows:

* src/ contains the main application code, including models and routes.
* app.js is the main entry point for the application.
* package.json lists project dependencies and scripts.


## API Routes
1. URL: POST /api/products: Add new products to the system.
2. URL: GET /api/products: View available products in the system..
3. URL: POST /api/cart/add:  Add products to the cart.
4. URL: GET /api/cart: View the items currently in the user's cart.
5. URL: DELETE /api/cart/remove/:productId: Remove items from the cart.
6. URL: GET /api/cart/total-price: Calculate the total price of items in the cart.
