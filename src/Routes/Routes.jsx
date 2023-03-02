import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../pages/Home/Home';
import Cart from '../pages/Cart/Cart';
import NotFound from '../pages/NotFound/NotFound';
import Navbar from '../components/Navbar/Navbar';

function routes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default routes