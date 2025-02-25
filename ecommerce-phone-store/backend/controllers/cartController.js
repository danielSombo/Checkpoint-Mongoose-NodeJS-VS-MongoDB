const Cart = require('../models/Cart');

const addToCart = async (req, res) => {
    const { produitId, quantité } = req.body;
    const cartItem = new Cart({ utilisateurId: req.user.id, produitId, quantité });

    await cartItem.save();
    res.status(201).json(cartItem);
};

module.exports = { addToCart };