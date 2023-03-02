import React, { useContext } from 'react'
import { SiteContext } from '../../../contexts/SiteContext'
import './CartItems.css'

function CartItems() {

    const { cart, removeFromCart, incrementItem, totalPrice } = useContext(SiteContext);

    return (
        <>
            <div className="cart-items">
                <span className="cart-items-title">Your items</span>
            </div>
            <div className="cart-items">
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
                <div className="sidebar-container-flex">
                    <div className="sidebar-subtotal">
                        <span className="sidebar-large-text">Order Subtotal</span>
                        <span className="sidebar-large-text">{totalPrice.toFixed(2)}€</span>
                    </div>
                    <span className="sidebar-small-text">Delivery time 10-14 working days.</span>
                    <div className="sidebar-btn-bottom">
                        <button className="cart-items-btn pointer">CONTINUE TO CHECKOUT</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItems