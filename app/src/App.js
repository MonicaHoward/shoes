import React, { useContext, useReducer, useEffect, useState } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";

import NavBar from './components/NavBar';
import ProductGallery from './components/ProductGallery';
import ProductPage from './components/ProductPage';
import Hero from './components/Hero'
import Favs from './components/Favs'
import Cart from './components/Cart'


import InventoryContext from './context';
import productsReducer from './reducer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {

  const [cartItems, setCartItems] = useState([]);
  const initialState = useContext(InventoryContext);
  const [state, dispatch] = useReducer( productsReducer, initialState );

  useEffect(() => {
    setCartItems((InventoryContext.products))
  }, [])

  useEffect(() => {
    M.AutoInit();
  })

  return (
    <Router>
      <div className="App">
      <NavBar/>
      
       

        <InventoryContext.Provider value={{state, dispatch}}>
        <Switch>
        <Route path="/" exact component={Hero} />
        <Route path="/home" component={Hero} />
        <Route path="/shop"  component={ProductGallery} />
        <Route path="/favs"  component={Favs} />
        <Route path="/cart"  component={Cart} />
        </Switch>
       
        </InventoryContext.Provider>
        
      </div>
    </Router>
    
  );
}

export default App;
