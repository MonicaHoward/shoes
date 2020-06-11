import React from 'react';

const reducer = (state, action) => {
    switch(action.type){

        case "ADD_TO_FAVS" :
            const addToFavs = state.products.map(product => product.id === action.payload.id 
                ? { ...action.payload, inFavs: !action.payload.inFavs }
                : product 
                
            )
            return {
                ...state,
                products: addToFavs
            }
        

        default: 
            return state;
    }
}

export default reducer;