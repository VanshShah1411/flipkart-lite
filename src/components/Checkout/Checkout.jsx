import React from "react";
import { useSelector } from "react-redux";
<<<<<<< HEAD
import CartisEmpty from "./CartisEmpty";
=======
import BillDetails from "./BillDetails";
>>>>>>> feac9f7106c305a7b68fd18415ceab235a6eab03
import CheckoutItem from "./CheckoutItem";
import CheckoutItemPlaceholder from "./CheckoutItemPlaceholder";

const Checkout = () => {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
<<<<<<< HEAD
  const subtotal = useSelector((state) => state.total);

  const shipping = 2.0;

  const tax = subtotal * 0.06;
  const total = Number(subtotal + shipping + tax);

  const handleOpen = () => {
    if (address) {
      setOpen(!open);
    }
  };

  if (!cart.length) {
    // When nothing to show, render a beautiful 404 type page
    return <CartisEmpty />;
=======

  if (!cart.length) {
    return <div>no items to show</div>;
>>>>>>> feac9f7106c305a7b68fd18415ceab235a6eab03
  }

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start px-10">
      {/* Cart Items Container */}
      <div className="w-full lg:overflow-y-auto px-2 my-2 cart-container">
<<<<<<< HEAD
        {/* Cart Items  */}
        {products.length ? (
          !cart.length ? (
            <CartisEmpty />
          ) : (
            cart.map((item) => (
=======
        {products.length
          ? cart.map((item) => (
>>>>>>> feac9f7106c305a7b68fd18415ceab235a6eab03
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
