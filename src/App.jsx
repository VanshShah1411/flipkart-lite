import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* Kirua OP */}
        <Route exact path="/product/:id" component={ProductDetail} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
