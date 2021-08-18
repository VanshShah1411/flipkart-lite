import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../actions/index";

const AddToCart = ({ id }) => {
  // const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // console.log(cart);

  return (
    <button
      class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
      onClick={() => dispatch(addToCart(id))}
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
