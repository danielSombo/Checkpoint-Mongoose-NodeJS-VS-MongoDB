import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-lg font-bold mt-2">{product.price} €</p>
        <Link to={`/product/${product.id}`} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 block text-center">
            Voir les détails
        </Link>
        </div>
    );
};

export default ProductCard;