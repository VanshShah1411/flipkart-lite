import React from "react";
import { useSelector } from "react-redux";
import BillDetails from "./BillDetails";
import CartisEmpty from "./CartisEmpty";
import CheckoutItem from "./CheckoutItem";
import CheckoutItemPlaceholder from "./CheckoutItemPlaceholder";

const Checkout = () => {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);

  if (!cart.length) {
    return (
      <div className="px-16 lg:px-6 mt-8 mb-20 text-center flex flex-col justify-around lg:flex-row lg:text-left lg:items-center">
        <CartisEmpty />
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start px-10">
      {/* Cart Items Container */}
      <div className="w-full lg:overflow-y-auto px-2 my-2 cart-container">
        {products.length
          ? cart.map((item) => (
              <CheckoutItem id={item.id} qty={item.qty} key={item.id} />
            ))
          : [...Array(4)].map((_, ind) => (
              <CheckoutItemPlaceholder key={ind} />
            ))}
      </div>
      {/* Order Details */}
      <BillDetails cart={cart} />
    </div>
  );
};

export default Checkout;
