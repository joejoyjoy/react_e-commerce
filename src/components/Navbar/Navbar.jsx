import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { SlMagnifier } from "react-icons/sl";
import { RiMenu3Fill } from "react-icons/ri";
import { TfiClose } from "react-icons/tfi";

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)


    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener("resize", changeWidth)

        return () => {
            window.removeEventListener("resize", changeWidth)
        }
    })



    return (
        <nav>
            <div className="navbar">

                {(toggleMenu || screenWidth > 775) && (
                    < >
                        <div className="navbarContainer">
                        <Link to={'/'} className="title"><h1>Yenvuè</h1></Link>
                            <ul className="list">
                                <li className="items"><Link to={'/'}>Home</Link></li>
                                <li className="items"><Link to={'/'}>Sofas</Link></li>
                                <li className="items"><Link to={'/cart'}>Shopping Cart</Link></li>
                            </ul>
                        </div>
                        <div className="inputNavbar">
                            <SlMagnifier size="1.7rem" color="white" />
                            <input className="search" placeholder="I'm looking for..." />
                        </div>
                    </ >

                )}



                {(screenWidth < 775) && (!toggleMenu)
                    ? < >
                        <Link to={'/'} className="mobileTitle"><h1>Yenvuè</h1></Link>
                        <div className="button">
                            <button onClick={toggleNav} className="btn pointer"><RiMenu3Fill size="1.7rem" color="white" /></button>
                        </div>
                    </ >
                    : (screenWidth < 775)
                        ? <div className="button">
                            <button onClick={toggleNav} className="btn pointer"><TfiClose className="icon" size="1.7rem" color="white" /></button>
                        </div>
                        : null
                }
            </div>
        </nav>
    )
}
