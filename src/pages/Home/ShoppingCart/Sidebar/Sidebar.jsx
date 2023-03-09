import React, { useContext } from 'react'
import { SiteContext } from '../../../../contexts/SiteContext';
import { useAuthContext } from '../../../../contexts/authContext';
import './Sidebar.css'
import { Link } from 'react-router-dom';
import { TfiClose } from "react-icons/tfi";

const Sidebar = () => {

    const { sidebar, cart, toggleSidebar, removeFromCart, incrementItem, totalPrice, totalProduct } = useContext(SiteContext);
    const { isAuthenticated } = useAuthContext();

    return (
        <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
            {isAuthenticated
                ? <>
                    <section className="sidebar-container margin-bottom-0">
                        <TfiClose className="icon pointer" size="1.7rem" onClick={toggleSidebar} />
                        <h4 className="sidebar-title">My shopping cart</h4>

                        {totalProduct > 1
                            ? <span className="sidebar-small-text">{totalProduct} products</span>
                            : <span className="sidebar-small-text">1 product</span>
                        }

                        <h6 className="sidebar-text">Added to cart</h6>

                        {cart.map((sofa) => {
                            return (
                                <div key={sofa.id} className="sidebar-product">
                                    <div className="sidebar-product-img">
                                        <img src={sofa.url} width="100px" height="100px" alt={sofa.name + " " + sofa.desc} />
                                    </div>
                                    <div className="sidebar-product-details">
                                        <h5 className="sidebar-product-title">{sofa.name}</h5>
                                        <span className="sidebar-small-text">Price: {sofa.price}€</span>
                                        <div className="sidebar-product-price">
                                            <div className="sidebar-product-price-buttons">
                                                <button onClick={() => { removeFromCart(sofa.id) }}>-</button>
                                                <span className="sidebar-large-text">{sofa.count}</span>
                                                <button onClick={() => { incrementItem(sofa.id) }}>+</button>
                                            </div>
                                            <span className="sidebar-large-text">{sofa.price * sofa.count}€</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </section>
                    <div className="sidebar-container margin-top-0">
                        <div className="sidebar-container-flex">
                            <div className="sidebar-subtotal">
                                <span className="sidebar-large-text">Order Subtotal</span>
                                <span className="sidebar-large-text">{totalPrice.toFixed(2)}€</span>
                            </div>
                            <span className="sidebar-small-text">Delivery time 10-14 working days.</span>
                            <div className="sidebar-btn-bottom">
                                <button className="sidebar-btn-continue pointer" onClick={toggleSidebar}>CONTINUE SHOPPING</button>
                                <Link className="sidebar-btn pointer" to={'/cart'}>VIEW CART</Link>
                            </div>
                        </div>
                    </div>
                </>

                : <>
                    <section className="sidebar-container margin-bottom-0">
                        <TfiClose className="icon pointer" size="1.7rem" onClick={toggleSidebar} />
                        <div className="sidebar-container-error">
                            <h2 className="error-message-container_h2">My shopping cart</h2>
                            <span>Please <Link to={'/login'} className="error-message-container_a">sign up</Link> first to use the shopping cart.</span>
                        </div>
                    </section>
                    <div className="sidebar-container margin-top-0">
                        <div className="sidebar-container-flex">
                            <div className="sidebar-btn-bottom">
                                <button className="sidebar-btn-continue pointer" onClick={toggleSidebar}>CONTINUE SHOPPING</button>
                                <Link className="sidebar-btn pointer" to={'/login'}>SIGN UP</Link>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Sidebar