import React from "react";
import { useSelector } from "react-redux";
import OrderComponent from "./OrderComponent";

const Orders = () => {
  const orders = useSelector((state) => state.orders);
  return (
    <div className="m-4 px-2 lg:px-6 lg:mx-16 py-6 border-2 rounded-sm">
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
      {[...orders].reverse().map((order, ind) => (
        <OrderComponent key={ind} order={order} />
      ))}
      {/* order container close */}
    </div>
  );
};

export default Orders;
