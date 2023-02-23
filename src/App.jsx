import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import NotFound from './pages/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
// import Slider from './components/Slider/Slider';
// import Introduction from './components/Body/Introduction/Introduction';
// import Products from './components/Body/Products/Products';

function App() {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>

    );

}

export default App;

{/* <Slider />
<Introduction />
<Products /> */}
