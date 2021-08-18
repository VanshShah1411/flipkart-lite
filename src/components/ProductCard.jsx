import React from "react";
// Buttons
import AddToCart from "./Buttons/AddToCart";

import { Link } from "react-router-dom";

const ProductCard = ({ product, ind }) => {
  return (
    <Link
      key={product.id}
      to={`/product/${product.id}`}
      className="group shadow-xl"
    >
      <div className="p-4 w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-5 xl:aspect-h-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-center object-contain group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
    </Link>
  );
};

export default ProductCard;
