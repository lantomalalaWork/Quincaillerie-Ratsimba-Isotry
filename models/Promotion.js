const mongoose = require("mongoose")
const { v4: uuidv4 } = require("uuid")

const promotionSchema = new mongoose.Schema({
  _id: { type: String, default: uuidv4 },
  codePromo: { type: String, required: true, unique: true },
  remisePourcentage: { type: Number, required: true },
  dateDebut: { type: Date, required: true },
  dateFin: { type: Date, required: true },
  statut: { type: Boolean, default: true },
})

module.exports = mongoose.model("Promotion", promotionSchema)

