import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`/api/products/${id}`)
        .then(response => setProduct(response.data))
        .catch(error => console.error(error));
    }, [id]);

    if (!product) return <p>Chargement...</p>;

    return (
        <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
        <p className="text-gray-600 mt-2">{product.description}</p>
        <p className="text-lg font-bold mt-2">{product.price} €</p>
        </div>
    );
};

export default ProductDetail;