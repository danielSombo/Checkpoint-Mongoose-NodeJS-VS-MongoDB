import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">Mon E-commerce</Link>
            <nav>
            <Link to="/card" className="mx-2">Panier</Link>
            <Link to="/login" className="mx-2">Connexion</Link>
            </nav>
        </div>
        </header>
    );
};

export default Header;