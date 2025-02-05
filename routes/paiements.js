const express = require("express")
const router = express.Router()
const Paiement = require("../models/Paiement")

// Get all payments
router.get("/", async (req, res) => {
  try {
    const paiements = await Paiement.find()
    res.json(paiements)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Create a new payment
router.post("/", async (req, res) => {
  const paiement = new Paiement(req.body)
  try {
    const newPaiement = await paiement.save()
    res.status(201).json(newPaiement)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})


module.exports = router

