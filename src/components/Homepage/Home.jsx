import React from "react";
import noob from "../../../assets/images/noob.jpg";
import OfferStamp from "./OfferStamp";
import ProductCard from "../ProductCard";

import { useSelector } from "react-redux";
import SecondSection from "./SecondSection";
import PromoContainer from "./PromoContainer";
import EndsIn from "./EndsIn";
import PromoCard from "./PromoCard";

const Home = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="mb-10">
      <div className="hero-image">
        {/* Image */}
        <h1 className="text-white text-center text-3xl lg:text-5xl font-semibold">
          We sell products that fill your life with style.
        </h1>
      </div>

      <div className="flex justify-evenly lg:flex-row flex-col items-center">
        <SecondSection image={noob} />
        <SecondSection image={noob} />
        <SecondSection image={noob} />
      </div>

      <div>
        <OfferStamp
          sale="Todays Offer"
          offer="50"
          desc="Deals you cannot deny"
        />
        <div className="flex overflow-auto px-8">
          {products.slice(0, 4).map((product, i) => (
            <ProductCard product={product} key={i} />
          ))}
        </div>
        {/* <EndsIn /> */}
      </div>

      <div className=" my-8 py-8 lg:px-12 rounded-md">
        {/* Recent Search */}
        <h1 className="ml-4 mb-4 text-3xl lg:text-4xl font-bold">
          Recent Search
        </h1>
        <div className="flex overflow-auto">
          {products.slice(4, 8).map((product, i) => (
            <ProductCard product={product} key={i} />
          ))}
        </div>
      </div>
      <div className="mx-5 flex flex-wrap justify-evenly items-center">
        <PromoCard
          color="pink"
          heading="Top Selling Products"
          headColor="blue-500"
        />
        <PromoCard color="red" heading="Season Sale" headColor="gray-400" />
      </div>

      <div className=" my-8 py-8 lg:px-12 rounded-md">
        {/* Recommended */}
        <h1 className="ml-4 mb-4 text-3xl lg:text-4xl font-bold">
          Recommended
        </h1>
        <div className="flex overflow-auto">
          {products.slice(8, 12).map((product, i) => (
            <ProductCard product={product} key={i} />
          ))}
        </div>
      </div>

      <div className=" mt-8 py-8 lg:px-12 rounded-md">
        {/* Most Popular */}
        <h1 className="ml-4 mb-4 text-3xl lg:text-4xl font-bold">
          Most Popular
        </h1>
        <div className="flex overflow-auto">
          {products.slice(12, 16).map((product, i) => (
            <ProductCard product={product} key={i} />
          ))}
        </div>
      </div>

      <div className="mb-16">
        <PromoContainer />
      </div>

      {/* Another sale */}
      <div>
        <OfferStamp sale="Recommended" offer="35" desc="You may like" />
        <div className="flex overflow-auto px-8">
          {products.slice(0, 4).map((product, i) => (
            <ProductCard product={product} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
