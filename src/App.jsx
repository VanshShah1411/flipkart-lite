import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import { useDispatch } from "react-redux";

import { getProducts } from "./actions/index";

import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/product/:id" component={ProductDetail} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
