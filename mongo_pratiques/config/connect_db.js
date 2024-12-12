const mongoose = require("mongoose")
const dotenv = require("dotenv")


const connect_db = async () => {
    const connect = await mongoose.connect(process.env.MONGO_URI)
    .then(() =>  console.log("Connexion réussie à MongoDB")) 
    .catch( err => console.log("Erreur de connexion à MongoDB:", err))
}

module.exports = connect_db;