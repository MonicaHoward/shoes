import React, { useContext, useState } from 'react';
import InventoryContext from '../context';

 

const ProductPage = () => {
    const { state, dispatch } = useContext(InventoryContext);

    return(
        <div>
            <h1>From Product page</h1>
            <div className="product-grid">
            
            </div>
        </div>
    )
}

export default ProductPage;