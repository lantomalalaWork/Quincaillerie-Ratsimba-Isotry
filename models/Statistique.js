const mongoose = require("mongoose")
const { v4: uuidv4 } = require("uuid")

const statistiqueSchema = new mongoose.Schema({
  _id: { type: String, default: uuidv4 },
  produitId: { type: String, ref: "Produit", required: true },
  nombreVentes: { type: Number, default: 0 },
  revenuTotal: { type: Number, default: 0 },
  dateMiseAJour: { type: Date, default: Date.now },
})

module.exports = mongoose.model("Statistique", statistiqueSchema)

