import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import { useDispatch } from "react-redux";

import { getProducts } from "./actions/index";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SideCart from "./components/Cart/SideCart";
import ProductDetailsNew from "./components/ProductDetails/ProductDetailsNew";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="App">
      <Navbar />
      <SideCart />
      <Switch>
        <Route exact path="/product/:id" component={ProductDetailsNew} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
