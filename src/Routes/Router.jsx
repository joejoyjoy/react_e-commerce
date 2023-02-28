import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../Pages/Home/Home';
import Active from '../Pages/Active/Active';
import Completed from '../Pages/Completed/Completed';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Navbar from '../components/Navbar/Navbar';

export const RouterPaths = ({ list, deleteItem, handleSetComplete }) => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home list={list} deleteItem={deleteItem} handleSetComplete={handleSetComplete} />} />
                    <Route path="/active" element={<Active list={list} deleteItem={deleteItem} handleSetComplete={handleSetComplete} />} />
                    <Route path="/completed" element={<Completed list={list} deleteItem={deleteItem} handleSetComplete={handleSetComplete} />} />
                    <Route path="/*" element={<ErrorPage />} />
                </Routes>
                <Navbar />
            </BrowserRouter>
        </>
    );
};
