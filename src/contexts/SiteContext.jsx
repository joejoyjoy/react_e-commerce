import React, { useState, useEffect, createContext } from "react";

export const SiteContext = createContext()
const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]")

function SiteContextProvider(props) {

    const [sidebar, setSidebar] = useState(false);

    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState)
    }

    const [cart, setCart] = useState(cartFromLocalStorage)



    // Add to cart
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



    // Remove from cart
    const removeFromCart = (id) => {
        const sofaInCart = cart.find(sofaInCart => sofaInCart.id === id)
        if (sofaInCart.count > 1) {
            setCart(cart.map(sofaInCart => sofaInCart.id === id ? { ...sofaInCart, count: sofaInCart.count - 1 } : sofaInCart))
        }
        else {
            setCart(cart.filter(sofa => sofa.id !== id))
        }
    }



    // Add quantity to cart product
    const incrementItem = (id) => {
        setCart(cart.map(sofa => sofa.id === id ? { ...sofa, count: sofa.count + 1 } : sofa))
    }



    // Calculate price
    const addition = (acc, currentValue) => {
        return acc + currentValue.count * currentValue.price
    }
    const totalPrice = cart.reduce(addition, 0)

    const [totalProduct, setTotalProduct] = useState(null)



    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
        setTotalProduct(() => document.querySelectorAll('section .sidebar-product').length );
    }, [cart])

    const value = { sidebar, cart, toggleSidebar, addToCart, removeFromCart, incrementItem, totalPrice, totalProduct }

    return (
        <SiteContext.Provider value={value}>
            {props.children}
        </SiteContext.Provider>
    )
}

export default SiteContextProvider;