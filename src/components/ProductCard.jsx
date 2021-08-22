import React from "react";

import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link
      key={product.id}
      to={`/product/${product.id}`}
      className="group shadow-lg bg-gray-100 px-8 lg:p-4 rounded-md m-4 w-80"
    >
      <div className="flex flex-col items-center">
        <img
          src={product.images}
          alt={product.title}
          className=" h-64 object-center rounded-lg object-contain group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 ml-2 text-xl font-semibold text-gray-900">
        {product.title.slice(0, 15) + "..."}
      </h3>
      <div className="mt-1 mb-4 ml-2 flex justify-between">
        <div className="flex items-center">
          <p className=" text-lg font-medium text-gray-900 mr-1">
            ${product.price}
          </p>
          <p className=" text-md text-gray-600 line-through">
            ${(product.price + (product.price % 7)).toFixed(2)}
          </p>
        </div>
        <div className="flex ml-1 items-center ">
          <i className="text-yellow-500 fas fa-star mr-1"></i>
          <p className="mr-1">4.8</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
