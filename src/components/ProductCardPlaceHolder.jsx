import React from "react";

const ProductCardPlaceHolder = () => {
  let color = "gray";
  return (
    //   Dark theme me blue color and light me gray
    <div
      className={`border border-${color}-300 shadow rounded-md p-4 w-80 m-4`}
    >
      <div className={`animate-pulse flex flex-col `}>
        <div className={`rounded-md bg-${color}-400 h-56`}></div>
        <div className={`flex-1 space-y-2 pt-4`}>
          <div className={`h-4 bg-${color}-400 rounded w-3/4`}></div>
          <div className={`h-4 bg-${color}-400 rounded`}></div>
          <div className={`h-4 bg-${color}-400 rounded w-5/6`}></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardPlaceHolder;
