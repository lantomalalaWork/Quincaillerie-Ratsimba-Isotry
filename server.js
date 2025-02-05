const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

const app = express()
app.use(express.json())

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err))

// Routes
app.use("/api/produits", require("./routes/produits"))
app.use("/api/stocks", require("./routes/stocks"))
app.use("/api/commandes", require("./routes/commandes"))
app.use("/api/utilisateurs", require("./routes/utilisateurs"))
app.use("/api/paiements", require("./routes/paiements"))
app.use("/api/promotions", require("./routes/promotions"))
app.use("/api/statistiques", require("./routes/statistiques"))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

