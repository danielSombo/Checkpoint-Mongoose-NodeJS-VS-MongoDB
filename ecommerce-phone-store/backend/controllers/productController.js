const Product = require('../models/Product');

const getProducts = async (req, res) => {
    const products = await Product.find({});
    res.json(products);
};

const createProduct = async (req, res) => {
    const { nom, description, prix, image, catégorie } = req.body;
    const product = new Product({ nom, description, prix, image, catégorie });

    await product.save();
    res.status(201).json(product);
};

module.exports = { getProducts, createProduct };