import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import { useDispatch } from "react-redux";

import { getProducts } from "./actions/index";

import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import Navbar from "./components/Navbar";
import SideCart from "./components/Cart/SideCart";
import ProductDetailsNew from "./components/ProductDetailsNew";

function App() {
  const dispatch = useDispatch();
  console.log("use effect se pahle");

  useEffect(() => {
    console.log("use effect");
    dispatch(getProducts());
  }, []);

  return (
    <div className="App">
      <productDetailsNew />
      <Navbar />
      <SideCart />
      <Switch>
        <Route exact path="/product/:id" component={ProductDetail} />
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/" component={ProductDetailsNew} />
      </Switch>
    </div>
  );
}

export default App;
