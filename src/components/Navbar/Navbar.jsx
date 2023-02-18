import React, { useState, useEffect } from 'react';
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
                            <a href="" ><h1 className="title">Yenvuè</h1></a>
                            <ul className="list">
                                <li className="items">Home</li>
                                <li className="items">Sofas</li>
                                <li className="items">Furniture</li>
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
                        <a href=""><h1 className="mobileTitle">Yenvuè</h1></a>
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
