import React, { useContext } from 'react'
import { SiteContext } from '../../../../contexts/SiteContext'
import { useAuthContext } from '../../../../contexts/authContext'
import './Products.css'
import Svg from '../../../../assets/Svg/Svg'
import Sidebar from '../../ShoppingCart/Sidebar/Sidebar'
import Backdrop from '../../ShoppingCart/Backdrop/Backdrop'

const Products = () => {

    const { sidebar, toggleSidebar, addToCart, data } = useContext(SiteContext);
    const { isAuthenticated } = useAuthContext();

    return (
        <>
            <div className="maxWitdh">
                <div className="bodyContainer">
                    <div className="gridLayout">
                        {data && data.map((sofa) => {
                            return (
                                sofa.count = 1,
                                <div key={sofa.id}>
                                    <div className="productImg">
                                        <img src={sofa.url} alt={sofa.name + " " + sofa.desc} />
                                    </div>
                                    <div className="productDetails">
                                        <h2>{sofa.name}</h2>
                                        <p className="productP">{sofa.desc}</p>
                                        <div className="productDetailsBuy">
                                            <h2>{sofa.price}€</h2>
                                            <div onClick={isAuthenticated ? () => addToCart(sofa) : null}>
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

            <Backdrop sidebar={sidebar} toggleSidebar={toggleSidebar} />
            <Sidebar />

        </>
    )
}

export default Products