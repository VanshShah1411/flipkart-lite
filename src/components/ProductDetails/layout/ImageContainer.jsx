import React, { useState } from "react";

const ImageContainer = ({ images }) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="lg:w-1/2 lg:px-8 mx-auto flex lg:flex-col flex-wrap">
      {/* Image */}
      <img
        className="w-full my-2 py-2 lg:h-96 h-64 object-contain object-center rounded bg-white shadow-md"
        src={images[selected]}
        alt="ded"
      />

      {/* Demo image preview */}
      <div className="w-full flex justify-evenly my-4">
        {images.map((image, index) => (
          <img
            key={index}
            className={`lg:w-1/2 cursor-pointer mr-2 lg:h-28 h-16 object-contain object-center rounded bg-gray-50 ${
              index === selected ? "ring-4" : ""
            }`}
            src={image}
            onClick={() => setSelected(index)}
            alt="ded"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageContainer;
