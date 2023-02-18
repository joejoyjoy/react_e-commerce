import './App.css';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import Introduction from './components/Body/Introduction/Introduction';
import Products from './components/Body/Products/Products';
import Sidebar from './components/ShoppingCart/Sidebar/Sidebar';
import Backdrop from './components/ShoppingCart/Backdrop/Backdrop';
import { useState } from 'react';

function App() {

    const[sidebar, setSidebar] = useState(false);

    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState)
    }

    return (
        < >
            <Navbar />
            <Slider />
            <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar} />
            <Sidebar sidebar={sidebar} closeSidebar={toggleSidebar} />
            <Introduction />
            <Products openSidebar={toggleSidebar} />
        </ >
    );
}

export default App;
