import React from "react";
import { Link } from "react-router-dom";

const OrderItem = ({ item, qty }) => {
  return (
    <div className="key={index} flex justify-between items-start border-b-2 py-4 px-4 my-4 shadow-sm rounded-sm mt-2 bg-white">
      <div>
        {/* Title */}
        <h1 className="font-semibold">{item.title}</h1>
        {/* lg:price */}
        <p className="font-semibold">${item.price}</p>
        <p className="font-medium">Quantity : {qty}</p>
        {/* Btns -> view product | buy again */}
        <div>
          <Link
            className="text-blue-700 font-semibold text-sm pr-4 border-r-2 border-gray-400 "
            to="/"
          >
            View Product
          </Link>
          <Link className="text-blue-700 font-semibold text-sm pl-3" to="/">
            Buy Again
          </Link>
        </div>
        {/* icon + Delivered */}
        <p className="font-semibold mt-4">Delivered</p>
      </div>
      <div className="w-1/4 lg:w-40 bg-gray-700">
        {/* Image */}
        <img src={item.images[0]} alt={item.title} />
      </div>
    </div>
  );
};

export default OrderItem;
