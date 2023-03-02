import './App.css';
import Routes from './Routes/Routes';
import SiteContextProvider from './contexts/SiteContext';

function App() {

    return (
        <SiteContextProvider>
            <Routes />
        </SiteContextProvider>
    );

}

export default App;