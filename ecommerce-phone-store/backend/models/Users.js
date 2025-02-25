const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    motDePasse: { type: String, required: true },
    role: { type: String, default: 'utilisateur' } // 'admin' ou 'utilisateur'
});

module.exports = mongoose.model('User', userSchema);