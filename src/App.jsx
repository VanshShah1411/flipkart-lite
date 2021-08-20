import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";

import { getProducts, closeNotification } from "./actions/index";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SideCart from "./components/Cart/SideCart";
import ProductDetail from "./components/ProductDetails/ProductDetail";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer";
import NotificationModal from "./components/NotificationModal";

function App() {
  const notification = useSelector((state) => state.notification);
  const dispatch = useDispatch();

  // to take the scroll to top
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="App">
      <Navbar />
      <SideCart />
      {notification.open ? (
        <NotificationModal
          message={notification.message}
          color={notification.color}
        />
      ) : (
        ""
      )}
      {notification.open &&
        setTimeout(() => {
          dispatch(closeNotification());
        }, 2000)}
      <Switch>
        <Route exact path="/product/:id" component={ProductDetail} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
