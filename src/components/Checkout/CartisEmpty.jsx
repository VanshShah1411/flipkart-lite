import React from "react";
import EmptyCart from "../../../assets/images/empty_cart.svg";

const CartisEmpty = () => {
  return (
    <div>
      <img src={EmptyCart} alt="ded" />
      <h1>Cart is Empty</h1>
    </div>
  );
};

export default CartisEmpty;
