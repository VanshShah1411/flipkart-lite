import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import { useDispatch } from "react-redux";

import { getProducts } from "./actions/index";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SideCart from "./components/Cart/SideCart";
import ProductDetail from "./components/ProductDetails/ProductDetail";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer";
import Orders from "./components/Orders/Orders";

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
        <Route exact path="/product/:id" component={ProductDetail} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
