import React from "react";
import { StarIcon } from "@heroicons/react/solid";

const RelatedProducts = () => {
  return (
    <div className="my-10">
      <h1 className="mb-4 mx-2 lg:mx-16 pb-4 border-b-2 text-xl tracking-wide font-semibold">
        Related Products
      </h1>
      <div className="flex lg:flex-row lg:px-12 px-6 flex-wrap justify-between items-center">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="w-full lg:w-1/5 my-3 px-4 py-4 hover:bg-gray-50 cursor-pointer"
          >
            <img
              className="bg-gray-200 h-2/6 rounded-md"
              src="https://fabrx.co/preview/ui-kit-pro-v3/assets/images/placeholders/placeholder-125.png"
              alt="ded"
            />
            {/* Ratings */}
            <div className="flex">
              {[...Array(5)].map((star, i) => (
                <StarIcon className="h-4 w-5 my-1" key={i} />
              ))}
            </div>
            {/* Title */}
            <h1 className="text-lg tracking-wide font-semibold text-gray-900">
              Koda grand sofa
            </h1>
            {/* Price */}
            <h1 className="text-sm tracking-wide font-light text-black-600">
              $240.00
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
