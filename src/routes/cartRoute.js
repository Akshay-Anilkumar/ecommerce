const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");

const cart = [];

router.post("/cart/add", async (req, res) => {
    
  const productId = req.body.productId;
  const quantity = req.body.quantity;

  const product = await Product.findById(productId);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  if (quantity > product.quantity) {
    return res
      .status(400)
      .json({ error: "Requested quantity exceeds available stock" });
  }
  
  else {
    cart.push({ product, quantity });
    res.status(201).json({ message: 'Product added to the cart' });
  }
});

router.get('/cart', (req, res) => {
    if (cart.length === 0) {
      res.status(200).json({ message: 'Cart is empty' });
    } else {
      res.status(200).json(cart);
    }
  });

router.delete("/cart/remove/:productId", (req, res) => {
    const productId = req.params.productId;
    const itemIndex = cart.findIndex((item) => item.product.id === productId);
  
    if (itemIndex === -1) {
      res.status(404).json({ error: 'Product not found in the cart' });
    } else {
      cart.splice(itemIndex, 1);
      res.status(200).json({ message: 'Product removed from the cart' });
    }
});

router.get("/cart/total-price", (req, res) => {
    const totalPrice = cart.reduce((total, item) => {
        return total + item.product.price * item.quantity;
      }, 0);
      res.status(200).json({ totalPrice });
});

module.exports = router;
