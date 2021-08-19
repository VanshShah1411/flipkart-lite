import React from "react";

const SizeOptions = () => {
  return (
    <div className="pb-5 border-b-2 border-gray-200 mb-4">
      <h1 className="text-lg tracking-wide font-semibold">Select Size</h1>
      <div className="my-4 flex">
        <button className="border border-black rounded-md mr-4 py-2 px-3.5 focus:text-white focus:bg-black cursor-pointer">
          S
        </button>
        <button className="border border-black rounded-md mr-4 py-2 px-3.5 focus:text-white focus:bg-black cursor-pointer">
          M
        </button>
        <button className="border border-black rounded-md mr-4 py-2 px-3.5 focus:text-white focus:bg-black cursor-pointer">
          L
        </button>
      </div>
    </div>
  );
};

export default SizeOptions;
