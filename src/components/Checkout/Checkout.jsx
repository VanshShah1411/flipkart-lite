import React, { useState } from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "./CheckoutItem";
import ConfirmModal from "./ConfirmModal";

const Checkout = () => {
  const [address, setAddress] = useState("");
  const [open, setOpen] = useState(false);

  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  const subtotal = useSelector((state) => state.total);

  const shipping = 2.0;
  console.log(subtotal);
  const tax = subtotal * 0.06;
  const total = Number(subtotal + shipping + tax);

  const handleOpen = () => {
    if (address) {
      setOpen(!open);
    }
  };

  if (!cart.length) {
    // When nothing to show, render a beautiful 404 type page
    return <div>No items in cart</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start px-10">
      {/* Cart Items Container */}
      <div className="w-full lg:overflow-y-auto px-2 my-2 cart-container">
        {/* Cart Items  */}
        {products.length ? (
          !cart.length ? (
            <div>
              <h1>Nothing to show</h1>
            </div>
          ) : (
            cart.map((item) => (
              <CheckoutItem id={item.id} qty={item.qty} key={item.id} />
            ))
          )
        ) : (
          ""
        )}
      </div>

      {/* Order Details */}
      <div className="container h-full rounded-lg bg-gray-200 p-4 mx-4 my-2 lg:max-w-lg">
        <h2 className="text-lg font-bold text-gray-900 pb-5">Order Summary</h2>
        <h2 className="w-full flex justify-between text-md font-medium text-gray-500 py-2 border-b-2 border-gray-200">
          Subtotal{" "}
          <span className="font-semibold text-gray-900">
            ${total.toFixed(2)}
          </span>
        </h2>
        <h2 className="w-full flex justify-between text-md font-medium text-gray-500 py-2 border-b-2 border-gray-200">
          Shipping Estimate{" "}
          <span className="font-semibold text-gray-900">
            ${shipping.toFixed(2)}
          </span>
        </h2>
        <h2 className="w-full flex justify-between text-md font-medium text-gray-500 py-2 border-b-2 border-gray-200">
          Tax Estimate{" "}
          <span className="font-semibold text-gray-900">${tax.toFixed(2)}</span>
        </h2>
        <h2 className="w-full flex justify-between text-xl font-semibold text-gray-900 py-2 border-b-2 border-gray-200">
          Order Total <span>${total.toFixed(2)}</span>
        </h2>
        <div className="mt-5 col-span-6 sm:col-span-3">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <button
          to="/checkout"
          className="w-full my-5 px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          onClick={handleOpen}
        >
          Place Order
        </button>
      </div>
      <ConfirmModal
        cart={cart}
        open={open}
        setOpen={setOpen}
        address={address}
        total={total}
      />
    </div>
  );
};

export default Checkout;
