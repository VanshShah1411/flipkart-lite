import React from "react";

const BillDetailsPlaceholder = () => {
  return (
    <div className="border border-blue-300 shadow rounded-md p-4 my-2 w-full mx-auto lg:max-w-lg">
      <div className="animate-pulse flex flex-col space-y-8 py-2 h-full">
        <div className="h-4 bg-blue-400 rounded w-1/3"></div>
        <div className="h-4 rounded w-full flex justify-between">
          <div className="h-4 rounded bg-blue-400 w-32"></div>
          <div className="h-4 rounded bg-blue-400 w-16"></div>
        </div>
        <div className="h-4 rounded w-full flex justify-between">
          <div className="h-4 rounded bg-blue-400 w-40"></div>
          <div className="h-4 rounded bg-blue-400 w-12"></div>
        </div>
        <div className="h-4 rounded w-full flex justify-between">
          <div className="h-4 rounded bg-blue-400 w-36"></div>
          <div className="h-4 rounded bg-blue-400 w-8"></div>
        </div>
        <div className="h-4 rounded w-full flex justify-between">
          <div className="h-4 rounded bg-blue-400 w-40"></div>
          <div className="h-4 rounded bg-blue-400 w-20"></div>
        </div>
        <div className="rounded w-full my-4 space-y-4">
          <div className="h-4 rounded bg-blue-400 w-20"></div>
          <div className="h-4 rounded bg-blue-400 w-40"></div>
        </div>
        <div className="h-12 rounded bg-blue-400"></div>
      </div>
    </div>
  );
};

export default BillDetailsPlaceholder;
