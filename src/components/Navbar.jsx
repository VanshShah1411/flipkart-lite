import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleCart } from "../actions/index";

const SubNavElems = ({ text }) => {
  return (
    <li className="border-r-2 hover:text-purple-600 cursor-pointer px-10 my-2">
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
  ];
  return (
    <div className="hidden lg:block md:hidden">
      <div className="flex justify-center bg-gray-900 text-white">
        <ul className="flex flex-wrap justify-center sm:font-small list-style-none">
          {elems.map((elem, i) => (
            <SubNavElems key={i} text={elem} />
          ))}
          <li className="hover:text-blue-500 cursor-pointer px-10 my-2">
            Beauty
          </li>
        </ul>
      </div>
    </div>
  );
};

const NavLink = ({ to, name, classes }) => {
  return (
    <Link to={to} className={classes}>
      {name}
    </Link>
  );
};

const Navbar = () => {
  const [toggleNavbar, settoggleNavbar] = useState(false);
  const dispatch = useDispatch();

  const lgLinkClasses =
    "mr-5 w-1/4 hover:text-indigo-200 cursor-pointer navlinks";
  const sm = "py-2 w-full hover:text-indigo-200 cursor-pointer";

  return (
    <header className="text-gray-600 body-font sticky top-0 z-10 shadow-sm">
      <div className="mx-auto bg-black text-white flex flex-wrap p-5 pb-0 justify-between sm:flex-row md:flex-row items-center">
        <Link
          to="/"
          className=" flex title-font font-medium items-center text-gray-900  cursor-pointer"
        >
          <img
            className="rounded-full w-10"
            src="https://cdn.discordapp.com/attachments/877090379307028480/879236481489715220/LogoMakr-9ARqEe.png"
            alt="logo"
          />
          <span className="ml-3 text-xl text-white hover:text-indigo-200">
            Rowdy Store
          </span>
        </Link>
        <nav className="hidden lg:block md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex  items-center text-base justify-center">
          <NavLink to="/products" name="Products" classes={lgLinkClasses} />
          <NavLink to="/checkout" name="Checkout" classes={lgLinkClasses} />
          <NavLink to="/orders" name="Orders" classes={lgLinkClasses} />
          <NavLink to="/" name="About" classes={lgLinkClasses} />
        </nav>
        <div className="flex items-center">
          <button
            className="inline-flex items-center border-0 py-2 px-3 focus:outline-none lg:bg-gray-700 hover:bg-purple-500 rounded text-base"
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
          <button
            className="lg:hidden inline-flex items-center border-0 ml-2 py-3 px-4 focus:outline-none hover:bg-purple-500 rounded text-base"
            onClick={() => settoggleNavbar(!toggleNavbar)}
          >
            <i className="fa-solid fa-chevron-down"></i>
          </button>
        </div>
        <div
          className={`transition-all ease-out duration-500 motion-reduce:transition-none motion-reduce:transform-none lg:hidden ${
            toggleNavbar ? " h-44" : "opacity-0 h-0"
          } w-2/3 mx-auto mt-2`}
        >
          <div className="flex flex-col items-center transition-all ease-out duration-500  w-full space-y-2 text-center text-md">
            <NavLink
              to="/products"
              name="Products"
              classes={"border-b-2 " + sm}
            />
            <NavLink
              to="/checkout"
              name="Checkout"
              classes={"border-b-2 " + sm}
            />
            <NavLink to="/orders" name="Orders" classes={"border-b-2 " + sm} />
            <NavLink to="/" name="About" classes={sm} />
          </div>
        </div>
      </div>
      <SubNavbar />
    </header>
  );
};

export default Navbar;
