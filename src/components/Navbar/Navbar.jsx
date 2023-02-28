import React from 'react'
import './Navbar.css'
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `nav-link ${isActive && "active"}`
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/active"
                className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : null}`
                }
            >
                Active
            </NavLink>
            <NavLink
                to="/completed"
                className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : null}`
                }
            >
                Completed
            </NavLink>
        </nav>
    )
}

export default Navbar