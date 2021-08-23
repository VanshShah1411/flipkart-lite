import React from "react";
import { Link } from "react-router-dom";

const PromoCard = ({ image, heading, headColor }) => {
  return (
    <div className={`my-8 lg:w-5/12 h-full flex-col rounded-lg relative`}>
      <img src={image} />
      <div className="ml-8 py-4 w-48 lg:w-1/2 h-full flex flex-col text-sm lg:text-lg font-poppins justify-evenly items-start absolute top-0 promo-details">
        <h1 className={`font-bold text-${headColor}`}>{heading}</h1>
        <p className="font-semibold text-black">Lorem ipsum dolor sit amet</p>
        <Link
          to="/products"
          className="px-4 lg:px-10 text-center py-2 lg:py-4 bg-black text-white rounded-xl hover:bg-gray-900"
        >
          Shop now <i className="fa-solid fa-chevron-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default PromoCard;
