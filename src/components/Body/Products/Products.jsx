import React, { useState } from 'react'
import './Products.css'
import ProductList from '../../../assets/db.json'
import Svg from '../../../assets/Svg/Svg'
import Sidebar from '../../ShoppingCart/Sidebar/Sidebar'
import Backdrop from '../../ShoppingCart/Backdrop/Backdrop';

const Products = () => {

    const [sidebar, setSidebar] = useState(false);

    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState)
    }

    const saveData = (e) => {
        localStorage.setItem('id', e);
    }

    return (
        <>
            <div className="maxWitdh">
                <div className="bodyContainer">
                    <div className="gridLayout">
                        {ProductList.map((ProductList, index) => {
                            return (
                                <div key={index}>
                                    <div className="productImg">
                                        <img src={ProductList.url} />
                                    </div>
                                    <div className="productDetails">
                                        <h2>{ProductList.name}</h2>
                                        <p className="productP">{ProductList.desc}</p>
                                        <div className="productDetailsBuy">
                                            <h2>{ProductList.price}</h2>
                                            <div onClick={() => saveData(ProductList.id)}>
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
            <Sidebar sidebar={sidebar} closeSidebar={toggleSidebar} />

        </>
    )
}

export default Products