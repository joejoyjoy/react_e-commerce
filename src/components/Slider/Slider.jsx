import React from 'react'
import './Slider.css'

function Slider() {
    return (
        <div className="slider" style={{
            backgroundImage: `url("https://images.pexels.com/photos/13581811/pexels-photo-13581811.jpeg?auto=compress&cs=tinysrgb&w=2048&h=1220&dpr=1")`,
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
            <div className="sliderWitdh">
                <div className="container">
                    <span className="sliderTest">OUR VISION:</span>
                    <span className="sliderTitle">Good design is for everyone</span>
                    <span className="sliderDesc">Sofas that allows you to really relax and feel comfortable</span>
                </div>
            </div>
        </div>
    )
}

export default Slider