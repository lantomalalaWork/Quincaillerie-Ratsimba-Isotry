const mongoose = require("mongoose")
const { v4: uuidv4 } = require("uuid")

const produitSchema = new mongoose.Schema({
  _id: { type: String, default: uuidv4 },
  nom: { type: String, required: true },
  description: { type: String, required: true },
  prix: { type: Number, required: true },
  categorie: { type: String, required: true },
  quantiteStock: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  dateAjout: { type: Date, default: Date.now },
})

module.exports = mongoose.model("Produit", produitSchema)

