import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleCart } from "../actions/index";

const SubNavElems = ({ text }) => {
  return (
    <li className="border-r-2 hover:text-blue-500 cursor-pointer px-10 my-2">
      {text}
    </li>
  );
};
export const SubNavbar = () => {
  const elems = [
    "Top offers",
    "Groceries",
    "Mobiles",
    "Fashion",
    "Electronics",
    "Home",
    "Appliances",
    "Travel",
    "Toys",
  ];
  return (
    <div className="flex justify-center mb-4">
      <ul className="flex flex-wrap justify-center sm:font-small list-style-none">
        {elems.map((elem, i) => (
          <SubNavElems key={i} text={elem} />
        ))}
        <li className="hover:text-blue-500 cursor-pointer px-10 my-2">
          Beauty
        </li>
      </ul>
    </div>
  );
};

const Navbar = () => {
  const toggleCartState = useSelector((state) => state.toggleCart);
  const dispatch = useDispatch();

  return (
    <header className="text-gray-600 body-font mb-6">
      <div className="mx-auto bg-indigo-600 text-white flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className=" flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer"
        >
          <img
            className="rounded-full w-10"
            src="https://cdn.discordapp.com/attachments/753151975570276352/753853919427428352/pika.webp"
            alt="logo"
          />
          <span className="ml-3 text-xl text-white hover:text-indigo-200">
            FlipCart Lite
          </span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link
            to="/checkout"
            className="mr-5 hover:text-indigo-200 cursor-pointer "
          >
            Checkout
          </Link>
          <Link
            to="/orders"
            className="mr-5 hover:text-indigo-200 cursor-pointer "
          >
            Previous Orders
          </Link>
          <Link to="./#" className="mr-5 hover:text-indigo-200 cursor-pointer ">
            Third Link
          </Link>
          <Link to="./#" className="mr-5 hover:text-indigo-200 cursor-pointer ">
            Fourth Link
          </Link>
        </nav>
        <button
          className="inline-flex items-center border-0 py-2 px-3 focus:outline-none hover:bg-indigo-400 rounded text-base mt-4 md:mt-0"
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
