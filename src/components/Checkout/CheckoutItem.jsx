import React from "react";
import { XIcon } from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CheckoutItem = ({ id, qty }) => {
  const products = useSelector((state) => state.products);

  const item = products.find((el) => el.id === id);

  return (
    <div className="p-5 h-2/5 flex border ">
      <img
        className="w-40 h-full rounded-md border"
        src="https://fabrx.co/preview/ui-kit-pro-v3/assets/images/placeholders/placeholder-125.png"
      />
      <div className="w-full flex flex-col p-4 justify-between">
        <div className="w-full flex justify-between">
          <div>
            <Link to={`/product/${id}`} className="font-medium text-gray-600 ">
              {item.title.slice(0, 20) + "..."}
            </Link>
            <h2 className="font-medium text-700">${item.price}</h2>
          </div>
          <div className="font-medium text-gray-900">
            Quantity: <span className="font-semibold text-gray-700">{qty}</span>
          </div>
          <div>
            <button type="button" className="p-0 text-gray-400">
              <XIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="flex">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="green"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          In Stock
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
