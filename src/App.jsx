import './App.css';
import Routes from './Routes/Routes';
import { AuthContextProvider } from './contexts/authContext';
import SiteContextProvider from './contexts/SiteContext';

function App() {

    return (
        <AuthContextProvider>
            <SiteContextProvider>
                <Routes />
            </SiteContextProvider>
        </AuthContextProvider>
    );

}

export default App;