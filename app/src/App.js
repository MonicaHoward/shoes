import React, { useContext, useReducer } from 'react';
import './App.css';
import ProductGallery from './components/ProductGallery';
import InventoryContext from './context';
import productsReducer from './reducer'

function App() {

  const initialState = useContext(InventoryContext);
  const [state, dispatch] = useReducer( productsReducer, initialState )

  return (
    <div className="App">
      <InventoryContext.Provider value={{state}}>
        <ProductGallery/>
      </InventoryContext.Provider>
      
    </div>
  );
}

export default App;
