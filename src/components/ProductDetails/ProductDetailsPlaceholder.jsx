import React from "react";

const ProductDetailsPlaceholder = () => {
  return (
    <div className="lg:flex justify-center items-center container">
      <div className="border border-blue-300 shadow rounded-md ">
        <div className="animate-pulse flex">
          <div className="rounded-full bg-blue-400 h-12 w-12"></div>
          <div className="flex-1 py-1">
            <div className="h-4 bg-blue-400 rounded w-3/4"></div>
            <div className="h-4 bg-blue-400 rounded"></div>
            <div className="h-4 bg-blue-400 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPlaceholder;
