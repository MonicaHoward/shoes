import React from 'react';
import './Hero.css';


const Hero = () => {

    return(
        <div className="hero-wrapper">
            <div className="hero-item hero-right">
            <button className="waves-effect waves-light btn shop-now"><a href="/shop"                        
            >SHOP NOW</a></button>
            </div>
            <div className="hero-item hero-left">
                <h1 className="blm">BLACK <br/>LIVES <br/>MATTER</h1>
            </div>
        </div>
    )
}

export default Hero;