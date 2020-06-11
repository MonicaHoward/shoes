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
        <div className="gallery-view">
            <h5 className="category">New Releases</h5>
            <div className="product-grid">
            {state.products.map(product => (
                <div 
                    className="product hoverable"
                    key={product.id}
                    onClick={() => dispatch({
                        type: "VIEW_PROUDCT",
                        payload: product
                    })}
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
                <img className="product-img" src={product.img} />
                </div>

                   <h6 className="product-info">{product.productName}</h6>
                   <h6 className="product-info">$ {product.originalPrice}</h6>
                   <button className="waves-effect waves-light btn quick-buy"                         
                   ><a className="quick-buy-link" href="/cart">
                   <i className="material-icons left">monetization_on</i>QUICK BUY</a></button>  
                   
                </div>
           ))}
            </div>
        </div>
    )
}

export default ProductGallery;