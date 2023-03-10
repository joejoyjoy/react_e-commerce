import React from 'react'
import './CartBanner.css'
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../../contexts/authContext';
import CartItems from '../CartItems/CartItems'
import ImgCart from '../../../assets/Img/undraw_Add_to_cart.jpg'

function CartBanner() {
    const { isAuthenticated } = useAuthContext();

    return (
        <div className="cart-banner-witdh">
            <div className="cart-banner-container">

                {isAuthenticated
                    ? <>
                        <Link className="goBack pointer" to={'/'}>&lt; BACK TO SHOPPING</Link>
                        <div className="CartBannerTitle">My shopping cart</div>
                        <CartItems />
                    </>
                    : <>
                        <Link className="goBack pointer" to={'/'}>&lt; BACK TO SHOPPING</Link>
                        <div className="error-message-container">
                            <h2>My shopping cart</h2>
                            <span>Please <Link to={'/login'} className="error-message-container_a">sign up</Link> first to use the shopping cart.</span>
                        </div>
                        <img src={ImgCart} alt="Add to cart svg victor" width="100%" />
                    </>
                }

            </div>
        </div>
    )
}

export default CartBanner