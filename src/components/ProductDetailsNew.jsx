import React from "react";

const CartIcon = () => {
  return <span></span>;
};

const ProductDetailsNew = () => {
  return (
    <div className="main-container lg:flex container px-5 pt-10">
      {/* Image */}
      <div className="lg:w-1/2 lg:px-8 mx-auto flex lg:flex-col flex-wrap">
        <img
          className="w-full lg:h-96 h-64 object-contain object-center rounded bg-gray-200"
          src="https://fabrx.co/preview/ui-kit-pro-v3/assets/images/placeholders/placeholder-125.png"
          alt="ded"
        />

        {/* Demo image preview */}
        <div className="w-full lg:w-3/4 flex my-2">
          <img
            className="lg:w-1/2 w-full mr-2 lg:h-28 h-28 object-contain object-center rounded bg-gray-50 filter grayscale"
            src="https://fabrx.co/preview/ui-kit-pro-v3/assets/images/placeholders/placeholder-125.png"
            alt="ded"
          />
          <img
            className="lg:w-1/2 w-full mr-2 lg:h-28 h-28 object-contain object-center rounded bg-gray-100"
            src="https://fabrx.co/preview/ui-kit-pro-v3/assets/images/placeholders/placeholder-125.png"
            alt="ded"
          />
          <img
            className="lg:w-1/2 w-full mr-2 lg:h-28 h-28 object-contain object-center rounded bg-gray-50 filter grayscale"
            src="https://fabrx.co/preview/ui-kit-pro-v3/assets/images/placeholders/placeholder-125.png"
            alt="ded"
          />
        </div>
      </div>
      {/* Details Container */}
      <div className="lg:w-1/2 mt-5 lg:mt-0">
        <div className="lg:w-4/5 flex items-center -ml-1">
          {/* Ratings */}
          {[...Array(5)].map((star, i) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span>(1,000)</span>
        </div>

        {/* Title and desc */}
        <div className="pb-5 border-b-2 border-gray-200 mt-2 mb-4">
          {/* Title */}
          <h1 className="mb-2 text-2xl tracking-wide font-semibold text-gray-900">
            Koda grand sofa
          </h1>
          {/* Short desc */}
          <p className="mb-2 text-lg tracking-wide font-normal text-gray-600">
            {" "}
            New modern stylist fashionable men's wearholder bag maxcan weather
            holder.
          </p>
          {/* Price */}
          <h1 className="text-2xl tracking-wide font-light text-black-600">
            $240.00
          </h1>
        </div>

        {/* Color */}
        <div className="pb-5 border-b-2 border-gray-200 mb-4">
          <h1 className="text-lg tracking-wide font-semibold">Color</h1>
          <div className="flex my-4 ">
            <button className="w-8 h-8 mr-8 rounded-full bg-green-400 cursor-pointer focus:ring-4 "></button>
            <button className="w-8 h-8 mr-8 rounded-full bg-blue-400 cursor-pointer focus:ring-4 "></button>
            <button className="w-8 h-8 mr-8 rounded-full bg-gray-400 cursor-pointer focus:ring-4 "></button>
          </div>
        </div>

        {/* Size */}
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

        {/* Quantity + Add to cart */}
        <div className=" pb-5 border-b-2 border-gray-200 mb-4">
          <div className="flex justify-center align-center">
            <div className="border w-2/6 flex justify-center">
              <button className="w-full py-3 hover:bg-gray-500">-</button>
              <button className="w-full text-center">0</button>
              <button className="w-full py-3 hover:bg-gray-500">+</button>
            </div>
            <button className="w-4/6 ml-10 text-white text-center bg-black hover:bg-gray-900">
              Add to cart
            </button>
          </div>
          <div className="mt-6 flex items-center ">
            <div
              className="mr-3 flex items-center cursor-pointer 
        hover:text-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span>Add to Favorite</span>
            </div>
            <div
              className="mr-3 flex items-center cursor-pointer 
        hover:text-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              <span>Share</span>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      {/* Additional Info */}
      {/* Reviews */}
      {/* Related Products */}
    </div>
  );
};

export default ProductDetailsNew;
