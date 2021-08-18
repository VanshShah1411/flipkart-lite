import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleCart } from "../actions/index";

const Navbar = () => {
  const toggleCartState = useSelector((state) => state.toggleCart);
  const dispatch = useDispatch();

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className=" flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer"
        >
          <img
            className="rounded-full w-10"
            src="https://cdn.discordapp.com/attachments/753151975570276352/753853919427428352/pika.webp"
            alt="logo"
          />
          <span className="ml-3 text-xl">FlipCart Lite</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900 cursor-pointer ">First Link</a>
          <a className="mr-5 hover:text-gray-900 cursor-pointer ">
            Second Link
          </a>
          <a className="mr-5 hover:text-gray-900 cursor-pointer ">Third Link</a>
          <a className="mr-5 hover:text-gray-900 cursor-pointer ">
            Fourth Link
          </a>
        </nav>
        <button
          className="inline-flex items-center bg-gray-100 border-0 py-2 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          onClick={() => dispatch(toggleCart())}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
