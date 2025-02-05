const express = require("express")
const router = express.Router()
const Utilisateur = require("../models/Utilisateur")
const bcrypt = require("bcryptjs")

// Register a new user
router.post("/register", async (req, res) => {
  try {
    const utilisateur = new Utilisateur(req.body)
    await utilisateur.save()
    res.status(201).json({ message: "Utilisateur créé avec succès" })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Login
router.post("/login", async (req, res) => {
  try {
    const utilisateur = await Utilisateur.findOne({ email: req.body.email })
    if (!utilisateur) {
      return res.status(400).json({ message: "Email ou mot de passe incorrect" })
    }
    const validPassword = await bcrypt.compare(req.body.motDePasse, utilisateur.motDePasse)
    if (!validPassword) {
      return res.status(400).json({ message: "Email ou mot de passe incorrect" })
    }
    res.json({ message: "Connexion réussie" })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Add more routes as needed

module.exports = router

