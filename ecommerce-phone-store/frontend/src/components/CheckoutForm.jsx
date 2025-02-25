import { useState } from 'react';

const CheckoutForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        paymentMethod: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Données du formulaire:', formData);
        // Envoyer les données au backend pour traitement
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
        <h2 className="text-2xl font-bold mb-4">Informations de paiement</h2>
        <div className="mb-4">
            <label className="block mb-2">Nom complet</label>
            <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 border rounded"
            />
        </div>
        <div className="mb-4">
            <label className="block mb-2">Adresse de livraison</label>
            <input
            type="text"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="w-full p-2 border rounded"
            />
        </div>
        <div className="mb-4">
            <label className="block mb-2">Méthode de paiement</label>
            <select
            value={formData.paymentMethod}
            onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
            className="w-full p-2 border rounded"
            >
            <option value="">Sélectionnez une méthode</option>
            <option value="creditCard">Carte de crédit</option>
            <option value="paypal">PayPal</option>
            </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Passer la commande
        </button>
        </form>
    );
};

export default CheckoutForm;