import React, { useState, useEffect } from 'react'
import './Products.css'
import sofas from '../../../../assets/db'
import Svg from '../../../../assets/Svg/Svg'
import Sidebar from '../../ShoppingCart/Sidebar/Sidebar'
import Backdrop from '../../ShoppingCart/Backdrop/Backdrop'


const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]")


const Products = () => {

    const [sidebar, setSidebar] = useState(false);

    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState)
    }


    const [cart, setCart] = useState(cartFromLocalStorage)
    //add to cart
    const addToCart = (sofa) => {
        // check if sofa already in cart
        const sofaInCart = cart.find(sofaInCart => sofaInCart.id === sofa.id)
        if (!sofaInCart) {
            setCart([...cart, sofa])
        }
        else {
            setCart(cart.map(sofaInCart => sofaInCart.id === sofa.id ? { ...sofaInCart, count: sofaInCart.count + 1 } : sofaInCart))
        }
    }



    //remove from cart
    const removeFromCart = (id) => {
        const sofaInCart = cart.find(sofaInCart => sofaInCart.id === id)
        if (sofaInCart.count > 1) {
            setCart(cart.map(sofaInCart => sofaInCart.id === id ? { ...sofaInCart, count: sofaInCart.count - 1 } : sofaInCart))
        }
        else {
            setCart(cart.filter(sofa => sofa.id !== id))
        }
    }


    //add quantity to cart product
    const incrementItem = (id) => {
        setCart(cart.map(sofa => sofa.id === id ? { ...sofa, count: sofa.count + 1 } : sofa))
    }

    const addition = (acc, currentValue) => {
        return acc + currentValue.count * currentValue.price
    }
    const totalPrice = cart.reduce(addition, 0)



    const [added, setAdded] = useState(false)

    const handleAdded = (sofa) => {
        setAdded(true)
        addToCart(sofa)
    }

    const [totalProduct, setTotalProduct] = useState(null)


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
        let productsInCart = setTotalProduct((totalProduct) => document.querySelectorAll('section .sidebar-product').length );
    }, [cart])


    return (
        <>
            <div className="maxWitdh">
                <div className="bodyContainer">
                    <div className="gridLayout">
                        {sofas && sofas.map((sofa) => {
                            return (sofa.count = 1),
                                (
                                    <div key={sofa.id}>
                                        <div className="productImg">
                                            <img src={sofa.url} />
                                        </div>
                                        <div className="productDetails">
                                            <h2>{sofa.name}</h2>
                                            <p className="productP">{sofa.desc}</p>
                                            <div className="productDetailsBuy">
                                                <h2>{sofa.price}€</h2>
                                                <div onClick={() => handleAdded(sofa)}>
                                                    <div className="pointer" onClick={toggleSidebar}>
                                                        <Svg />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                        })}
                    </div>
                </div>
            </div>
            <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar} />
            <Sidebar sidebar={sidebar} closeSidebar={toggleSidebar} cart={cart} removeFromCart={removeFromCart} incrementItem={incrementItem} totalPrice={totalPrice} totalProduct={totalProduct} />

        </>
    )
}

export default Products