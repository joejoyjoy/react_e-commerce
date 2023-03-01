import React from 'react'
import './Layout.css'
import Inputbar from '../Inputbar/Inputbar'

function Layout({ input, handleKeyDown, setInput }) {
    return (
        <div className='header'>
            <div className='header-width'>
                <div className='header-container'>
                    <h1>WISHLIST</h1>
                    <Inputbar input={input} handleKeyDown={handleKeyDown} setInput={setInput} />
                </div>
            </div>
        </div>
    )
}

export default Layout