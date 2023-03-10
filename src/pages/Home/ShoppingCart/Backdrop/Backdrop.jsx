import React from 'react'
import './Backdrop.css'

const backdrop = ({ sidebar, toggleSidebar, searchFocus, setSearchFocus }) => {
    const handleSidebarBackdrop = () => {
        if (searchFocus) {
            return !setSearchFocus;
        }
    }

    return (
        <>
            <div className={sidebar ? "backdrop backdrop--open" : "backdrop"} onClick={toggleSidebar} ></div>
            <div className={searchFocus ? "backdrop backdrop--open" : "backdrop"} onClick={() => handleSidebarBackdrop()} ></div>
        </>
    )
}

export default backdrop