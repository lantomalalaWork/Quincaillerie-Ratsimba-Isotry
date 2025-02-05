const mongoose = require("mongoose")
const { v4: uuidv4 } = require("uuid")

const paiementSchema = new mongoose.Schema({
  _id: { type: String, default: uuidv4 },
  commandeId: { type: String, ref: "Commande", required: true },
  montant: { type: Number, required: true },
  methode: {
    type: String,
    enum: ["Carte Bancaire", "Mobile Money", "PayPal"],
    required: true,
  },
  statut: {
    type: String,
    enum: ["En attente", "Payé", "Échoué"],
    default: "En attente",
  },
  datePaiement: { type: Date, default: Date.now },
})

module.exports = mongoose.model("Paiement", paiementSchema)

