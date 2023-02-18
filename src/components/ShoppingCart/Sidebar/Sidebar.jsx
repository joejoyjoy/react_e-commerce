import React from 'react'
import './Sidebar.css'
import { TfiClose } from "react-icons/tfi";

const Sidebar = ({ sidebar, closeSidebar }) => {
    return (
        <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
            <section className="sidebar-container margin-bottom-0">
                <TfiClose className="icon pointer" size="1.7rem" onClick={closeSidebar} />
                <h4 className="sidebar-title">My shopping cart</h4>
                <span className="sidebar-small-text">2 products</span>
                <h6 className="sidebar-text">Added to cart</h6>
                <div className="sidebar-product">
                    <div className="sidebar-product-img">
                        <img src="#" width="100px" height="100px" />
                    </div>
                    <div className="sidebar-product-details">
                        <h5 className="sidebar-product-title">Sofa title</h5>
                        <span className="sidebar-small-text">Quantity: 1</span>
                        <div className="sidebar-product-price">
                            <span className="sidebar-large-text">- 1 +</span>
                            <span className="sidebar-large-text">P320€</span>
                        </div>
                    </div>
                </div>
                <div className="sidebar-product">
                    <div className="sidebar-product-img">
                        <img src="#" width="100px" height="100px" />
                    </div>
                    <div className="sidebar-product-details">
                        <h5 className="sidebar-product-title">Sofa title</h5>
                        <span className="sidebar-small-text">Quantity: 2</span>
                        <div className="sidebar-product-price">
                            <span className="sidebar-large-text">- 2 +</span>
                            <span className="sidebar-large-text">P167€</span>
                        </div>
                    </div>
                </div>
            </section>
            <div className="sidebar-container margin-top-0">
                <div className="sidebar-container-flex">
                    <div className="sidebar-subtotal">
                        <span className="sidebar-large-text">Order Subtotal</span>
                        <span className="sidebar-large-text">P654€</span>
                    </div>
                    <span className="sidebar-small-text">Delivery time 10-14 working days.</span>
                    <button className="sidebar-btn pointer" onClick={closeSidebar}>CONTINUE SHOPPING</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar