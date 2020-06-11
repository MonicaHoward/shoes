import React, { useContext } from 'react';
import InventoryContext from '../context';
import  './ProductGallery.css';



const ProductGallery = () => {
    const { state, dispatch } = useContext(InventoryContext);

    // const favState = state.products.inFavs === true 
    //     ? "favorite"
    //     :
    //     "favorite_border"

    return(
        <div>
            <h1>From Product Gallery</h1>
            <div className="product-grid">
            {state.products.map(product => (
                <div 
                    className="product"
                    key={product.id}
                >
                <div className="productImage">
                <i 
                    className="small material-icons favs"
                    onClick={() => dispatch({ type: 'ADD_TO_FAVS', payload: product })}
                        // style={{ 
                        //     textDecoration: `${product.inFavs && "line-through"}`
                            
                        // }}
                   
                >favorite_border
                </i>
                </div>

                   <h5>{product.productName}</h5>
                   <h5>$ {product.originalPrice}</h5>
                   <button className="waves-effect waves-light btn quick-buy"                         
                   ><i className="material-icons left">monetization_on</i>QUICK BUY</button>  
                   
                </div>
           ))}
            </div>
        </div>
    )
}

export default ProductGallery;