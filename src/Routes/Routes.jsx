import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PublicRoute from '../components/routes/PublicRoute';
import ProfileRoute from '../components/routes/ProfileRoute';
import Home from '../pages/Home/Home';
import Cart from '../pages/Cart/Cart';
import Login from '../pages/Login/Login';
import Profile from '../pages/Profile/Profile';
import Logout from '../pages/Logout/Logout';
import NotFound from '../pages/NotFound/NotFound';
import Navbar from '../components/Navbar/Navbar';

function routes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/*' element={<NotFound />} />
                <Route path='/login' element={<PublicRoute />}>
                    <Route index element={<Login />} />
                </Route>
                <Route path='/profile' element={<ProfileRoute />}>
                    <Route index element={<Profile />} />
                    <Route path='/profile/logout' element={<Logout />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default routes