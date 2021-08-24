import React from "react";
import FourO from "../../assets/images/FourO.svg";

import { Link } from "react-router-dom";

const FourOFour = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center px-2 my-2 cart-container">
      <div className="mb-12 w-full text-center lg:w-5/12">
        <h1 className="text-2xl lg:text-3xl font-semibold my-4">
          Wrong pathway
        </h1>
        <Link className="text-sm lg:text-lg hover:text-blue-500" to="/">
          Go to Homepage to shop more products or check out your cart items!
        </Link>
      </div>
      <img className="lg:w-1/3" src={FourO} alt="ded" />
    </div>
  );
};

export default FourOFour;
