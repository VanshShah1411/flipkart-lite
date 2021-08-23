import React from "react";
import { Link } from "react-router-dom";

const SecondSection = ({ image, title }) => {
  return (
    <div className="mt-6 h-96 w-72 md:w-64 md:h-80 lg:w-72 second-section-card shadow rounded-md relative hover:filter hover:grayscale hover:blur-md hover:contrast-200 overflow-hidden cursor-pointer">
      <img className="w-full h-full object-cover" src={image} alt={title} />
      <p className="absolute top-0 left-0 p-2 text-center text-md w-full bg-gray-800 text-white ">
        {title}
      </p>
      {/* text */}
      <button className="absolute bottom-2 left-1/2 transfrom -translate-x-1/2 px-3 lg:px-4 py-1 md:py-4 lg:py-2 text-center transform bg-black text-white shadow rounded-md hover:bg-gray-900">
        <Link to="/products">
          Shop now <i className="fa-solid fa-chevron-right"></i>
        </Link>
      </button>
      {/* shop now */}
    </div>
  );
};

export default SecondSection;
