const express = require("express")
const router = express.Router()
const Statistique = require("../models/Statistique")

// Get all statistics
router.get("/", async (req, res) => {
  try {
    const statistiques = await Statistique.find()
    res.json(statistiques)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Update statistics for a product
router.patch("/:produitId", async (req, res) => {
  try {
    const updatedStats = await Statistique.findOneAndUpdate({ produitId: req.params.produitId }, req.body, {
      new: true,
      upsert: true,
    })
    res.json(updatedStats)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Add more routes as needed

module.exports = router

