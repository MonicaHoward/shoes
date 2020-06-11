import React from 'react';

const reducer = (state, action) => {
    switch(action.type){

        case "TOGGLE_FAVS" :
            const toggleFavs = state.products.map(item => item.id === action.payload.id 
                ? { ...action.payload, inFavs: !action.payload.inFavs }
                : item

            )
            return {
                ...state,
                products: toggleFavs
            }
        case "VIEW_PRODUCT" :
            return{

            }

        default: 
            return state;
    }
}

export default reducer;