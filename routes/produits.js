const express = require("express")
const router = express.Router()
const Produit = require("../models/Produit")

// Get all products
router.get("/", async (req, res) => {
  try {
    const produits = await Produit.find()
    res.json(produits)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Create a new product
router.post("/", async (req, res) => {
  const produit = new Produit(req.body)
  try {
    const newProduit = await produit.save()
    res.status(201).json(newProduit)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Add more routes for update, delete, etc.

module.exports = router

