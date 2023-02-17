import React from 'react'
import './Products.css'
import ProductList from '../../../assets/db.json'
import Svg from '../../../assets/Svg/Svg'

function Products() {
    return (
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
                                        <a href={ProductList.id}>
                                            <Svg />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Products