import React from "react";

import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link
      key={product.id}
      to={`/product/${product.id}`}
      className="group shadow-lg"
    >
      <div className="py-8 w-full h-60 bg-white rounded-lg ">
        <img
          src={product.images}
          alt={product.title}
          className="w-full h-full object-center object-contain group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 ml-2 text-lg text-gray-900">
        {product.title.split(" ").slice(0, 3).join(" ") + "..."}
      </h3>
      <p className="mt-1 mb-4 ml-2 text-lg font-medium text-gray-900">
        ${product.price}
      </p>
    </Link>
  );
};

export default ProductCard;
