import React from "react";

const OfferStamp = ({ sale, offer, desc }) => {
  return (
    <div className="w-full my-6 lg:my-10">
      <div className="bg-gray-100 p-4 w-full flex flex-col items-center">
        <div className="flex tracking-wider items-center ">
          <h1 className="text-lg lg:text-4xl font-bold border-r-4 pr-4">
            {sale}
          </h1>
          <p className="text-lg pl-4">
            upto{" "}
            <span className="text-lg lg:text-4xl font-bold">{offer}% Off</span>
          </p>
        </div>
        <p className="my-1 lg:my-2 lg:text-lg">{desc}</p>
      </div>
    </div>
  );
};

export default OfferStamp;
