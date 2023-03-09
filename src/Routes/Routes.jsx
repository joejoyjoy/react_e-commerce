import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../pages/Home/Home';
import Cart from '../pages/Cart/Cart';
import Login from '../pages/Credentials/Login';
import NotFound from '../pages/NotFound/NotFound';
import Navbar from '../components/Navbar/Navbar';

function routes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default routes