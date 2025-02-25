import { Provider } from 'react-redux';
import { store } from '../app/store';
import Card from '../components/Card';

const App = () => {
    return (
        <Provider store={store}>
        <div className="p-4">
            <Card />
        </div>
        </Provider>
    );
};

export default App;