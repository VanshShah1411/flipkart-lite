import React from "react";
import { useSelector } from "react-redux";
import BillDetails from "./BillDetails";
import BillDetailsPlaceholder from "./BillDetailsPlaceholder";
import CheckoutItem from "./CheckoutItem";
import CheckoutItemPlaceholder from "./CheckoutItemPlaceholder";

const Checkout = () => {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);

  if (!cart.length) {
    return <div>no items to show</div>;
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
      {products.length ? (
        <BillDetails cart={cart} />
      ) : (
        <BillDetailsPlaceholder />
      )}
    </div>
  );
};

export default Checkout;
