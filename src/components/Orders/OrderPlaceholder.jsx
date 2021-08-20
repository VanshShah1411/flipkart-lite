import React from "react";

const OrderPlaceholder = () => {
  return (
    <div className="mx-8 my-8">
      <div className=" border border-blue-300 shadow rounded-md p-4 w-full">
        <div className="animate-pulse flex flex-col space-x-4">
          <div className="flex-1 space-y-4 py-1 px-4">
            <div className="h-4 bg-blue-400 rounded w-2/4 lg:w-1/4"></div>
            <div className="h-4 bg-blue-400 rounded w-4/6 lg:w-2/6"></div>
          </div>
          <div className="flex-1 space-y-4 lg:space-y-0 py-1 lg:flex lg:items-center lg:justify-between mt-5">
            <div className="flex justify-between w-full space-y-4 lg:space-y-0 lg:w-2/4 flex-col lg:flex-row">
              <div className="h-16 bg-blue-400 rounded w-full lg:w-48 "></div>
              <div className="h-16 bg-blue-400 rounded w-full lg:w-48"></div>
              <div className="h-16 bg-blue-400 rounded w-full lg:w-48"></div>
            </div>
            <div className="w-full lg:w-1/4 space-y-4 lg:space-y-0 flex justify-evenly flex-col lg:flex-row">
              <div className="h-10 bg-blue-400 rounded w-full lg:w-24"></div>
              <div className="h-10 bg-blue-400 rounded w-full lg:w-24"></div>
            </div>
          </div>
          <div className="flex-1 flex flex-col lg:flex-row lg:justify-between items-center mt-6 py-1">
            <div className="w-full space-y-2">
              <div className="h-4 bg-blue-400 rounded w-full lg:w-3/6"></div>
              <div className="h-4 bg-blue-400 rounded w-1/4 lg:w-1/6"></div>
              <div className="h-4 bg-blue-400 rounded w-2/6 lg:w-2/6"></div>
              <div className="h-4 bg-blue-400 rounded w-4/6 lg:w-2/6"></div>
              <div className="h-4 bg-blue-400 rounded w-2/6 lg:w-1/6"></div>
            </div>
            <div className="rounded-md my-2 bg-blue-400 h-28 w-full lg:w-1/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPlaceholder;
