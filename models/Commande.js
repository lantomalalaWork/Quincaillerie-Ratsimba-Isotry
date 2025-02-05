const mongoose = require("mongoose")
const { v4: uuidv4 } = require("uuid")

const commandeSchema = new mongoose.Schema({
  _id: { type: String, default: uuidv4 },
  clientId: { type: String, ref: "Utilisateur", required: true },
  produits: [
    {
      produitId: { type: String, ref: "Produit", required: true },
      quantite: { type: Number, required: true },
      prixUnitaire: { type: Number, required: true },
    },
  ],
  total: { type: Number, required: true },
  statut: {
    type: String,
    enum: ["En attente", "Validée", "Expédiée", "Livrée", "Annulée"],
    default: "En attente",
  },
  dateCommande: { type: Date, default: Date.now },
})

module.exports = mongoose.model("Commande", commandeSchema)

