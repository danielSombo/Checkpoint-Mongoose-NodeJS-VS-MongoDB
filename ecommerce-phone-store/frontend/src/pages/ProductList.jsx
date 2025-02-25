import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/api/products')
        .then(response => setProducts(response.data))
        .catch(error => console.error(error));
    }, []);

    return (
        <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Nos produits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {products.map(product => (
            <ProductCard key={product.id} product={product} />
            ))}
        </div>
        </div>
    );
};

export default ProductList;