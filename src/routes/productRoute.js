const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");

router.post("/products", async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const product = new Product({ name, price, quantity });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: "Error creating a product" });
  }
});

router.get("/products", async (req, res) => {
  try {
    const products = await Product.find({ quantity: { $gt: 0 } });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: "Error fetching products" });
  }
});

module.exports = router;
