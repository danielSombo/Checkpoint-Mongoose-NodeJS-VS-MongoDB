const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    utilisateurId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    produits: [
        {
        produitId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        quantité: { type: Number, required: true }
        }
    ],
    total: { type: Number, required: true },
    statut: { type: String, default: 'en attente' }
});

module.exports = mongoose.model('Order', orderSchema);