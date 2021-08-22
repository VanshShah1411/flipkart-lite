import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import UserReview from "./UserReview";
import ProgressBarContainer from "./ProgressBarContainer";

const Reviews = () => {
  return (
    <div className="bg-gray-100 px-4 py-8 w-full lg:px-6">
      <div className="bg-white w-full lg:flex lg:justify-around lg:items-center border shadow-sm rounded-md px-4 py-8 pb-16">
        {/* ---- */}
        <div className="lg:w-5/12">
          <div className="my-4">
            {/* h1 - Customer Reviews */}
            <h1 className="text-2xl font-bold text-gray-900">
              Customer Reviews
            </h1>
            {/* stars and total no. of reviews */}
            <div className="w-full flex items-center justify-between lg:justify-start my-2">
              <div className="w-1/4 flex items-center justify-between">
                {[...Array(4)].map((_, i) => (
                  <i key={i} className="text-yellow-500 fas fa-star"></i>
                ))}
                <i class="far fa-star"></i>
              </div>
              <span className="w-2/4 text-gray-600 ml-2 text-xs font-semibold">
                Based on 1624 Reviews
              </span>
            </div>
          </div>
          {/* ---- */}

          {/* progress bars */}
          {[...Array(5)].map((_, i) => (
            <ProgressBarContainer key={i} percent={i} />
          ))}

          {/* ---- */}
          <div className="mt-6 flex flex-col">
            {/* Share ur thoughts and btn */}
            <h1 className="text-lg font-semibold text-gray-900">
              Share your thoughts
            </h1>
            <p className="text-sm text-gray-500 leading-5">
              If you've used this product, share your thoughts with other
              customers
            </p>
            <button className="my-4 py-2 border-2 text-center font-semibold rounded shadow hover:bg-gray-100">
              Write a review
            </button>
          </div>
          {/* ---- */}
        </div>
        {/* ---- */}
        {/* ---- */}
        <div className="lg:w-5/12 lg:h-96 overflow-y-auto">
          {[...Array(5)].map((_, i) => (
            <UserReview key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
