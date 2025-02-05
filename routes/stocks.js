const express = require("express")
const router = express.Router()
const Stock = require("../models/Stock")

// Get all stocks
router.get("/", async (req, res) => {
  try {
    const stocks = await Stock.find()
    res.json(stocks)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Update stock
router.patch("/:id", async (req, res) => {
  try {
    const updatedStock = await Stock.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(updatedStock)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Add more routes as needed

module.exports = router

