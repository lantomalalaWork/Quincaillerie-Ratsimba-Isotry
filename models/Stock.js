const mongoose = require("mongoose")
const { v4: uuidv4 } = require("uuid")

const stockSchema = new mongoose.Schema({
  _id: { type: String, default: uuidv4 },
  produitId: { type: String, ref: "Produit", required: true },
  quantiteDisponible: { type: Number, required: true },
  derniereMiseAJour: { type: Date, default: Date.now },
})

module.exports = mongoose.model("Stock", stockSchema)

