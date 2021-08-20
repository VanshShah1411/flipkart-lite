import React from "react";
import EmptyCart from "../../../assets/images/empty_cart.svg";
import { Link } from "react-router-dom";

const CartisEmpty = () => {
  return (
    <>
      <div className="mb-12">
        <h1 className="text-2xl lg:text-3xl font-semibold my-4">
          Cart is Empty
        </h1>
        <Link className="text-sm lg:text-lg hover:text-blue-500" to="/">
          Go to Homepage and add some items to cart
        </Link>
      </div>
      <img className="lg:w-1/3" src={EmptyCart} alt="ded" />
    </>
  );
};

export default CartisEmpty;
