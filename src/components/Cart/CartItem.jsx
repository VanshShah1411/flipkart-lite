import React from "react";
import { useDispatch } from "react-redux";

import {
  deleteCartItem,
  increaseCartItem,
  decreaseCartItem,
  updateTotal,
} from "../../actions/index";

const CartItem = ({ item, qty, price }) => {
  const dispatch = useDispatch();

  return (
    <li key={item.id} className="py-6 flex">
      <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-center object-cover"
        />
      </div>

      <div className="ml-4 flex-1 flex flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3 className="text-sm">{item.title}</h3>
            <p className="ml-4">${(price * qty).toFixed(2)}</p>
          </div>
        </div>
        <div className="flex-1 flex items-end justify-between text-sm">
          <p className="text-gray-500">
            <button
              className="items-center w-7 mx-2 border border-transparent rounded-xl text-lg font-medium text-black text-center hover:bg-gray-300"
              onClick={() => {
                dispatch(decreaseCartItem(item.id));
                dispatch(updateTotal(price * -1));
              }}
            >
              -
            </button>{" "}
            {qty}{" "}
            <button
              className="items-center w-7 mx-2 border border-transparent rounded-xl text-lg font-medium text-black text-center hover:bg-gray-300"
              onClick={() => {
                if (qty < 5) {
                  dispatch(increaseCartItem(item.id));
                  dispatch(updateTotal(price));
                }
              }}
            >
              +
            </button>
          </p>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={() => {
                dispatch(deleteCartItem(item.id));
                dispatch(updateTotal(price * -qty));
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
