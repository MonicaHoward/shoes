import React, { useContext } from 'react';
import InventoryContext from '../context';
import  './ProductGallery.css';

const ProductGallery = () => {
    const { state, dispatch } = useContext(InventoryContext);

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
                </div>
                   <h5>{product.productName}</h5>
                   <h3>$ {product.originalPrice}</h3>
                </div>
           ))}
            </div>
        </div>
    )
}

export default ProductGallery;