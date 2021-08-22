import React from "react";

// Icons
import { HeartIcon } from "@heroicons/react/outline";
import { ShareIcon } from "@heroicons/react/outline";
import { ShoppingCartIcon } from "@heroicons/react/outline";

// redux
import { useDispatch } from "react-redux";
import { addToCart, toggleCart, updateTotal } from "../../../actions/index";

// layout components
import Ratings from "./Ratings";
import ColorOptions from "./ColorOptions";
import SizeOptions from "./SizeOptions";
import DisclosureContainer from "./DisclosureContainer";
import { Link } from "react-router-dom";

const DetailsContainer = ({ currentProduct }) => {
  const dispatch = useDispatch();

  return (
    <div className="lg:w-1/2 mt-5 lg:mt-0">
      <Ratings />

      {/* Title and desc */}
      <div className="pb-5 border-b-2 border-gray-200 mt-2 mb-4">
        {/* Title */}
        <h1 className="mb-2 text-4xl tracking-wide font-semibold text-gray-900">
          {currentProduct.title}
        </h1>

        {/* Short desc */}
        <p className="mb-2 text-lg tracking-wide font-normal text-gray-600">
          {currentProduct.description.split(" ").slice(0, 3).join(" ")}
        </p>

        {/* Price */}
        <h1 className="text-2xl tracking-wide font-light text-black-600">
          ${currentProduct.price}
        </h1>
      </div>

      <ColorOptions />
      <SizeOptions />

      {/* Buy Now + Add to cart */}
      <div className="pb-5 border-b-2 border-gray-200 mb-4">
        <div className="flex justify-center items-center">
          <Link
            to="/checkout"
            className="w-2/6 py-4 text-white text-center rounded-sm shadow-sm bg-indigo-600 hover:bg-indigo-700 flex justify-center items-center"
            onClick={() => {
              dispatch(addToCart(currentProduct.id));
              dispatch(updateTotal(currentProduct.price));
            }}
          >
            Buy Now
          </Link>
          <button
            className="w-4/6 ml-5 py-4 text-white text-center rounded-sm shadow-sm bg-black hover:bg-gray-700 flex justify-center items-center"
            onClick={() => {
              dispatch(addToCart(currentProduct.id));
              dispatch(updateTotal(currentProduct.price));
              dispatch(toggleCart());
            }}
          >
            <ShoppingCartIcon className="w-4 h-4 mr-2" />
            Add to cart
          </button>
        </div>

        {/* Add to Favorites and share */}
        <div className="mt-6 flex items-center ">
          <div
            className="mr-3 flex items-center cursor-pointer 
            hover:text-blue-500"
          >
            <HeartIcon className="h-4 w-4 mr-2" />
            <span>Add to Favorite</span>
          </div>
          <div
            className="mr-3 flex items-center cursor-pointer 
            hover:text-blue-500"
          >
            <ShareIcon className="h-4 w-4 mr-2" />
            <span>Share</span>
          </div>
        </div>
      </div>

      <DisclosureContainer
        title={"Description"}
        desc={currentProduct.description}
      />
      <DisclosureContainer
        title={"Additional Info"}
        desc={currentProduct.description}
      />
    </div>
  );
};

export default DetailsContainer;
