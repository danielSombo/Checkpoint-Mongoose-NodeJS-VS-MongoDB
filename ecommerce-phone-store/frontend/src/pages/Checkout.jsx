import CheckoutForm from '../components/CheckoutForm';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Checkout = () => {
    return (
        <div>
        <Header />
        <main className="p-4">
            <CheckoutForm />
        </main>
        <Footer />
        </div>
    );
};

export default Checkout;