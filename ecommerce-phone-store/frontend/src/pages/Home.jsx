
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
        <Header />
        <main className="p-4">
            <h1 className="text-3xl font-bold">Bienvenue sur Mon E-commerce</h1>
            <p>Découvrez nos produits exclusifs.</p>
        </main>
        <Footer />
        </div>
    );
};

export default Home;