import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useAuthContext } from '../../contexts/authContext';
import useSearch from '../../hooks/useSearch';
import { SiteContext } from '../../contexts/SiteContext';
import { SlMagnifier } from "react-icons/sl";
import { RiMenu3Fill } from "react-icons/ri";
import { TfiClose } from "react-icons/tfi";
import { RxPerson } from "react-icons/rx";

export default function Navbar() {
    const { isAuthenticated, avatar } = useAuthContext();
    const { searchFocus, setSearchFocus } = useContext(SiteContext);

    const [searchValue, setSearchValue] = useState('');
    const [products, isLoading, error] = useSearch(searchValue);
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
        <nav className={searchFocus ? "z-index" : ""}>
            <div className="navbar">

                {(toggleMenu || screenWidth > 775) && (
                    < >
                        <div className="navbarContainer">
                            <Link to={'/'} className="title"><h1>Yenvuè</h1></Link>
                            {searchFocus ?
                                <ul></ul>
                                :
                                <ul className="list">
                                    <li className="items"><Link to={'/'}>Home</Link></li>
                                    <li className="items"><Link to={'/'}>Sofas</Link></li>
                                    <li className="items"><Link to={'/cart'}>Shopping Cart</Link></li>
                                </ul>
                            }
                        </div>
                        <div className="inputNavbar">
                            <SlMagnifier size="1.7rem" color="white" />
                            <input
                                type="text"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                onFocus={() => setSearchFocus(true)}
                                onBlur={() => setTimeout(() => setSearchFocus(false), 500)}
                                className="search-click"
                                placeholder="I'm looking for..."
                            />
                            <Link to={isAuthenticated ? '/profile' : "/login"} className='login-logout'>
                                <RxPerson size="1.7rem" color="white" />
                                <span className='navbar-text'>{isAuthenticated ? (avatar) : "Sign Up"}</span>
                            </Link>
                        </div>
                        {searchFocus ?
                            <div className="navbarSearchResult">
                                <span className="navbarSearchResultContainer">
                                    {products.map((sofa) => {
                                        return (
                                            <a className="navbarSearchResultAnchor" href={"/#" + sofa.id}>
                                                <div key={sofa.id} className="navbar-search-product">
                                                    <div className="navbar-search-product-img">
                                                        <img src={sofa.url} width="80px" height="80px" alt={sofa.name + " " + sofa.desc} />
                                                    </div>
                                                    <div className="navbar-search-product-details">
                                                        <h5 className="navbar-search-product-title">{sofa.name}</h5>
                                                        <span className="navbar-search-small-text">{sofa.desc}</span>
                                                    </div>
                                                </div>
                                            </a>
                                        )
                                    })}
                                </span>
                            </div>
                            :
                            <span></span>
                        }
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
