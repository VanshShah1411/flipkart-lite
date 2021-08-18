import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, toggleCart } from "../../actions/index";

const AddToCart = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <button
      className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
      onClick={() => {
        dispatch(addToCart(id));
        dispatch(toggleCart());
      }}
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
