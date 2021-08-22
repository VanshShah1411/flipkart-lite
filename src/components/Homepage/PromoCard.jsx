import React from "react";

const PromoCard = ({ color, heading, headColor }) => {
  return (
    <div
      className={`sm:my-8 w-full lg:w-1/3 h-60 flex-col rounded-lg bg-${color}-200`}
    >
      <div className="ml-12 w-2/5 h-full flex flex-col justify-evenly font-poppins">
        <h1 className={`text-lg font-medium text-${headColor}`}>{heading}</h1>
        <p className="text-lg font-semibold text-black">
          Lorem ipsum dolor sit amet
        </p>
        <button className="px-10 py-4 bg-black text-white rounded-2xl">
          Shop now {">"}
        </button>
      </div>
    </div>
  );
};

export default PromoCard;
