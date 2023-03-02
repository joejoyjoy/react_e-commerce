import React from 'react'
import './Backdrop.css'

const backdrop = ({sidebar, toggleSidebar}) => {

    return (
        <div className={sidebar ? "backdrop backdrop--open" : "backdrop"} onClick={toggleSidebar} ></div>
    )
}

export default backdrop