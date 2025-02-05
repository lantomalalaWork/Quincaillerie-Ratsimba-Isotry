const express = require("express")
const router = express.Router()
const Commande = require("../models/Commande")

// Get all orders
router.get("/", async (req, res) => {
  try {
    const commandes = await Commande.find()
    res.json(commandes)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Create a new order
router.post("/", async (req, res) => {
  const commande = new Commande(req.body)
  try {
    const newCommande = await commande.save()
    res.status(201).json(newCommande)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Add more routes for update, delete, etc.

module.exports = router

