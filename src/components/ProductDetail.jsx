import React from "react";

//Buttons
import AddToCart from "./Buttons/AddToCart";
import BuyNow from "./Buttons/BuyNow";

import {
  deleteCartItem,
  increaseCartItem,
  decreaseCartItem,
} from "../actions/index";

//redux
import { useSelector, useDispatch } from "react-redux";

//router
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const products = useSelector((state) => state.products);

  // need to make cart component
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const dispatch = useDispatch();

  const { id } = useParams();
  const currentProduct = products.find((el) => el.id === +id);

  return (
    <div>
      <h1>{currentProduct.title}</h1>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <BuyNow id={id} variant="contained" size="large" />
        <AddToCart id={id} variant="contained" size="large" />
        <button onClick={() => dispatch(deleteCartItem(id))}>Delete</button>
        <button onClick={() => dispatch(increaseCartItem(id))}>+</button>
        <button onClick={() => dispatch(decreaseCartItem(id))}>-</button>
      </div>
    </div>
  );
};

export default ProductDetail;
