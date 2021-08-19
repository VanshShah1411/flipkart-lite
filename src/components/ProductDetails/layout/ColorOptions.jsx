import React from "react";

const ColorOptions = () => {
  return (
    <div className="pb-5 border-b-2 border-gray-200 mb-4">
      <h1 className="text-lg tracking-wide font-semibold">Color</h1>
      <div className="flex my-4 ">
        <button className="w-8 h-8 mr-8 rounded-full bg-green-400 cursor-pointer focus:ring-4 "></button>
        <button className="w-8 h-8 mr-8 rounded-full bg-blue-400 cursor-pointer focus:ring-4 "></button>
        <button className="w-8 h-8 mr-8 rounded-full bg-gray-400 cursor-pointer focus:ring-4 "></button>
      </div>
    </div>
  );
};

export default ColorOptions;
