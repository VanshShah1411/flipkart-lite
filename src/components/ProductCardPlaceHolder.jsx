import React from "react";

const ProductCardPlaceHolder = () => {
  return (
    //   Dark theme me blue color and light me gray
    <div className="border border-gray-300 shadow rounded-md p-4 w-full">
      <div className="animate-pulse flex flex-col ">
        <div className="rounded-md bg-gray-400 h-56"></div>
        <div className="flex-1 space-y-2 pt-4">
          <div className="h-4 bg-gray-400 rounded w-3/4"></div>
          <div className="h-4 bg-gray-400 rounded"></div>
          <div className="h-4 bg-gray-400 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardPlaceHolder;
