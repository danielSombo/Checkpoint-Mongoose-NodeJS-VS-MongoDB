const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const registerUser = async (req, res) => {
    const { nom, email, motDePasse } = req.body;
    const hashedPassword = await bcrypt.hash(motDePasse, 10);
    const user = new User({ nom, email, motDePasse: hashedPassword });

    await user.save();
    res.status(201).json({ message: 'Utilisateur enregistré' });
};

const loginUser = async (req, res) => {
    const { email, motDePasse } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(motDePasse, user.motDePasse))) {
        return res.status(400).json({ message: 'Identifiants invalides' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
};

module.exports = { registerUser, loginUser };