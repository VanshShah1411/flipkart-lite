import React from "react";

const CheckoutItemPlaceholder = () => {
  return (
    <div className="border border-blue-300 shadow rounded-md p-4 w-full mx-auto">
      <div className="animate-pulse flex flex-col lg:flex-row lg:items-start items-center space-x-4">
        <div className="rounded-md bg-blue-400 h-40 w-40"></div>
        <div className="flex-1 space-y-4 mt-4 py-1 w-full space-y-2">
          <div className="h-4  rounded flex justify-between w-full">
            <div className="h-4 bg-blue-400 rounded w-1/4"></div>
            <div className="h-4 bg-blue-400 rounded w-1/4"></div>
            <div className="h-4 bg-blue-400 mr-8 rounded w-4"></div>
          </div>
          <div className="h-4 bg-blue-400 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItemPlaceholder;
