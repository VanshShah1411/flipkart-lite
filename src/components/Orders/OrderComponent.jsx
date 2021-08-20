import React from "react";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";

const OrderComponent = ({ order }) => {
  const products = useSelector((state) => state.products);

  //   placeholder to be added here
  if (!products.length) {
    return <div>loading</div>;
  }

  return (
    <div className="mt-10 ">
      <div className="lg:flex px-4 py-6 bg-gray-200 lg:items-start lg:justify-between  rounded-md">
        {/* date placed */}
        <div className="flex flex-col lg:flex-row">
          <div className="p-4 border-b-2 lg:border-0 flex flex-row lg:flex-col justify-between">
            <h1 className="font-semibold">Date placed</h1>
            <p>{order.timestamp}</p>
          </div>
          {/* order no. */}
          <div className="p-4 border-b-2 flex flex-row lg:border-0 lg:flex-col justify-between">
            <h1 className="font-semibold">Ordered ID</h1>
            <p>{order.orderId}</p>
          </div>
          {/* Total Amount */}
          <div className="p-4 border-b-2 flex flex-row lg:border-0 lg:flex-col justify-between">
            <h1 className="font-semibold">Total amount</h1>
            <p>${order.total}</p>
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
      {order.cart.map((item, index) => {
        const qty = item.qty;
        const newItem = products.find((el) => el.id === item.id);
        return <OrderItem key={index} item={newItem} qty={qty} />;
      })}
      {/* Ordered Cart Close */}
    </div>
  );
};

export default OrderComponent;
