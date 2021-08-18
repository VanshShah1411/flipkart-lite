import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, toggleCart, updateTotal } from "../../actions/index";

const AddToCart = ({ id }) => {
  const products = useSelector((state) => state.products);
  const currProduct = products.find((el) => el.id === id);
  const dispatch = useDispatch();

  return (
    <button
      className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
      onClick={() => {
        dispatch(addToCart(id));
        dispatch(updateTotal(currProduct.price));
        dispatch(toggleCart());
      }}
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
