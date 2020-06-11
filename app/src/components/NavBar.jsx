import React from 'react';

const NavBar = () => {
    return(
        <div>
            <nav>
                <div className="nav-wrapper" style={{background: "#fff"}}>
                     <a href="/" className="brand-logo left" style={{color: "#000"}}>FOOTWERX</a>
                     
                    <ul id="nav-mobile" className="right hide-on-med-and-down" style={{color: "#000"}}>
                    <li>
                    <nav style={{background: "#000", color: "#fff", width: "90%"}}>
<div className="nav-wrapper">
 <form>
   <div className="input-field">
     <input id="search" type="search" required />
     <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
     <i className="material-icons">close</i>
   </div>
 </form>
</div>
</nav>
                    </li>
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