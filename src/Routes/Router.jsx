import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../Pages/Home/Home';
import Active from '../Pages/Active/Active';
import Completed from '../Pages/Completed/Completed';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Navbar from '../components/Navbar/Navbar';

export const RouterPaths = ({ list, setList, deleteItem, handleSetComplete, editTask, editTaskContent }) => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home list={list} setList={setList} deleteItem={deleteItem} handleSetComplete={handleSetComplete} editTask={editTask} editTaskContent={editTaskContent} />}  />
                    <Route path="/active" element={<Active list={list} setList={setList} deleteItem={deleteItem} handleSetComplete={handleSetComplete} editTask={editTask} editTaskContent={editTaskContent} />} />
                    <Route path="/completed" element={<Completed list={list} setList={setList} deleteItem={deleteItem} handleSetComplete={handleSetComplete} editTask={editTask} editTaskContent={editTaskContent} />} />
                    <Route path="/*" element={<ErrorPage />} />
                </Routes>
                <Navbar />
            </BrowserRouter>
        </>
    );
};
