const express = require("express")
const router = express.Router()
const Promotion = require("../models/Promotion")

// Get all promotions
router.get("/", async (req, res) => {
  try {
    const promotions = await Promotion.find()
    res.json(promotions)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Create a new promotion
router.post("/", async (req, res) => {
  const promotion = new Promotion(req.body)
  try {
    const newPromotion = await promotion.save()
    res.status(201).json(newPromotion)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Add more routes as needed

module.exports = router

