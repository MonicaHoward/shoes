import React from 'react';

const NavBar = () => {
    return(
        <div>
            <nav>
                <div class="nav-wrapper" style={{background: "#fff"}}>
                     <a href="/" class="brand-logo" style={{color: "#000"}}>FOOTWERX</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down" style={{color: "#000"}}>
                        <li style={{color: "#000"}}><a style={{color: "#000"}}href="/shop">shop</a></li>

                        <li><a href="/favs"><i className="material-icons left" style={{color: "#000"}}>favorite_border</i></a></li>

                        <li><a href="/cart"><i className="material-icons left" style={{color: "#000"}}>shopping_cart</i></a></li>
                    </ul>
               
                </div>
                
               
            </nav>
        </div>
    )
}

export default NavBar;