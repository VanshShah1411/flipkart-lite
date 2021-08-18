import React from "react";

//Buttons
import AddToCart from "./Buttons/AddToCart";

// import {
//   deleteCartItem,
//   increaseCartItem,
//   decreaseCartItem,
// } from "../actions/index";

//redux
import { useSelector, useDispatch } from "react-redux";

//router
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const products = useSelector((state) => state.products);

  // need to make cart component
  // const cart = useSelector((state) => state.cart);
  // console.log(cart);

  const dispatch = useDispatch();

  const { id } = useParams();
  const currentProduct = products.find((el) => el.id === +id);

  return (
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 pt-10">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={currentProduct.image}
          />
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
              {currentProduct.title}
            </h1>
            <div class="flex mb-4">
              <span class="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                ))}
                <span class="text-gray-600 ml-3">5 Reviews</span>
              </span>
            </div>
            <p class="leading-relaxed mt-7">{currentProduct.description}</p>
            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div class="flex items-center">
                <span class="mr-3">Size</span>
                <div class="relative">
                  <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div class="flex">
              <span class="title-font font-medium text-2xl text-gray-900">
                ${currentProduct.price}
              </span>
              <AddToCart id={currentProduct.id} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
