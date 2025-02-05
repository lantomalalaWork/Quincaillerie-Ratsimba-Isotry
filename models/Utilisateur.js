const mongoose = require("mongoose")
const { v4: uuidv4 } = require("uuid")
const bcrypt = require("bcryptjs")

const utilisateurSchema = new mongoose.Schema({
  _id: { type: String, default: uuidv4 },
  nom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  motDePasse: { type: String, required: true },
  role: { type: String, enum: ["Client", "Admin"], default: "Client" },
  adresse: { type: String, required: true },
  telephone: { type: String, required: true },
  dateInscription: { type: Date, default: Date.now },
})

utilisateurSchema.pre("save", async function (next) {
  if (this.isModified("motDePasse")) {
    this.motDePasse = await bcrypt.hash(this.motDePasse, 10)
  }
  next()
})

module.exports = mongoose.model("Utilisateur", utilisateurSchema)

