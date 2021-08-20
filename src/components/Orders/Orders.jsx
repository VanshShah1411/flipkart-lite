import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className="m-4 px-2 py-6 border rounded-sm">
      <div>
        {/* h1 - order history */}
        <h1 className="text-3xl font-bold">Order history</h1>
        {/* some text */}
        <p className="text-sm text-gray-500 py-2">
          Check the status of recent orders, manage returns, and download
          invoices.
        </p>
      </div>

      {/* one order container  */}
      <div className="mt-10 ">
        <div className="lg:flex px-4 py-6 bg-gray-200 lg:items-start lg:justify-between  rounded-md">
          {/* date placed */}
          <div className="flex flex-col lg:flex-row">
            <div className="p-4 border-b-2 lg:border-0 flex flex-row lg:flex-col justify-between">
              <h1 className="font-semibold">Date placed</h1>
              <p>January 22, 2021</p>
            </div>
            {/* order no. */}
            <div className="p-4 border-b-2 flex flex-row lg:border-0 lg:flex-col justify-between">
              <h1 className="font-semibold">Ordered number</h1>
              <p>xyzabc123</p>
            </div>
            {/* Total Amount */}
            <div className="p-4 border-b-2 flex flex-row lg:border-0 lg:flex-col justify-between">
              <h1 className="font-semibold">Total amount</h1>
              <p>$238.00</p>
            </div>
          </div>
          <div>
            {/* Btn view order */}
            <button className="w-full lg:w-32 font-semibold py-2 lg:mx-2 mt-4 bg-white border-2 shadow-sm">
              View Order
            </button>

            {/* Btn view invoice */}
            <button className="w-full lg:w-32 font-semibold py-2 lg:mx-2 my-4  bg-white border-2 shadow-sm">
              View Invoice
            </button>
          </div>
        </div>

        {/* Ordered Cart */}
        {[...Array(5)].map((item, index) => (
          <div className="key={index} flex justify-between items-start border-b-2 py-4 px-4 my-4 shadow-sm rounded-sm mt-2 bg-white">
            <div>
              {/* Title */}
              <h1 className="font-semibold">Kohona Sofa</h1>
              {/* lg:price */}
              <p className="font-semibold">$230.00</p>
              {/* Btns -> view product | buy again */}
              <div>
                <Link
                  className="text-blue-700 font-semibold text-sm pr-4 border-r-2 border-gray-400 "
                  to="/"
                >
                  View Product
                </Link>
                <Link
                  className="text-blue-700 font-semibold text-sm pl-3"
                  to="/"
                >
                  Buy Again
                </Link>
              </div>
              {/* icon + Delivered */}
              <p className="font-semibold mt-4">Delivered</p>
            </div>
            <div className="w-1/4 lg:w-1/5 bg-gray-700">
              {/* Image */}
              <img
                src="https://fabrx.co/preview/ui-kit-pro-v3/assets/images/placeholders/placeholder-125.png"
                alt="ded"
              />
            </div>
          </div>
        ))}
        {/* Ordered Cart Close */}
      </div>
      {/* order container close */}
    </div>
  );
};

export default Orders;
