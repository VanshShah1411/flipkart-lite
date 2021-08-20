import React from "react";

const ImageContainer = ({ image }) => {
  return (
    <div className="lg:w-1/2 lg:px-8 mx-auto flex lg:flex-col flex-wrap">
      {/* Image */}
      <img
        className="w-full lg:h-96 h-64 object-contain object-center rounded bg-white shadow-md"
        src={image}
        alt="ded"
      />

      {/* Demo image preview */}
      <div className="w-full lg:w-3/4 flex justify-around my-4">
        <img
          className="lg:w-1/2 cursor-pointer mr-2 lg:h-28 h-16 object-contain object-center rounded bg-gray-50 filter grayscale"
          src={image}
          alt="ded"
        />
        <img
          className="lg:w-1/2 cursor-pointer mr-2 lg:h-28 h-16 object-contain object-center rounded bg-gray-100"
          src={image}
          alt="ded"
        />
        <img
          className="lg:w-1/2 cursor-pointer mr-2 lg:h-28 h-16 object-contain object-center rounded bg-gray-50 filter grayscale"
          src={image}
          alt="ded"
        />
      </div>
    </div>
  );
};

export default ImageContainer;
