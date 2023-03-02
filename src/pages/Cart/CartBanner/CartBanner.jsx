import React from 'react'
import './CartBanner.css'
import { Link } from 'react-router-dom';
import CartItems from '../CartItems/CartItems'

function CartBanner() {
    return (
        <div className="cart-banner-witdh">
            <div className="cart-banner-container">

                <Link className="goBack pointer" to={'/'}>&lt; BACK TO SHOPPING</Link>
                <div className="CartBannerTitle">My shopping cart</div>

                <CartItems />

            </div>
        </div>
    )
}

export default CartBanner