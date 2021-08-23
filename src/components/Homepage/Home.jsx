import React from "react";
import noob from "../../../assets/images/noob.jpg";
import OfferStamp from "./OfferStamp";
import ProductCard from "../ProductCard";

import { useSelector } from "react-redux";
import SecondSection from "./SecondSection";
import PromoContainer from "./PromoContainer";
import ProductCardPlaceHolder from "../ProductCardPlaceHolder";

const Home = () => {
  const products = useSelector((state) => state.products);
  const arr = [
    {
      image:
        "https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Tare zameen par",
    },
    {
      image:
        "https://images.unsplash.com/photo-1491336477066-31156b5e4f35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk3fHxmYXNoaW9uJTIwbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Professional Clothes for noobs",
    },
    {
      image:
        "https://images.pexels.com/photos/2866077/pexels-photo-2866077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Rowdy Rathore in college",
    },
  ];
  return (
    <div className="mb-10">
      <div className="hero-image">
        {/* Image */}
        <h1 className="text-white text-center text-3xl lg:text-5xl sm:px-3 font-semibold">
          We sell products that fill your life with style.
        </h1>
      </div>
      <div className="flex justify-evenly md:flex-row lg:flex-row flex-col items-center">
        {arr.map((item, i) => (
          <SecondSection key={i} title={item.title} image={item.image} />
        ))}
      </div>
      <div>
        <OfferStamp
          sale="Todays Offer"
          offer="50"
          desc="Deals you cannot deny"
        />
        <div className="flex overflow-auto px-8">
          {products.length
            ? products
                .slice(0, 4)
                .map((product, i) => <ProductCard product={product} key={i} />)
            : [...Array(4)].map((_, ind) => (
                <ProductCardPlaceHolder key={ind} />
              ))}
        </div>
      </div>
      {/* Ends in xyz */}
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
      <div className=" my-8 py-8 lg:px-12 rounded-md">
        {/* Recommended */}
        <h1 className="ml-4 mb-4 text-3xl lg:text-4xl font-bold">
          Recommended
        </h1>
        <div className="flex overflow-auto">
          {products.length
            ? products
                .slice(8, 12)
                .map((product, i) => <ProductCard product={product} key={i} />)
            : [...Array(4)].map((_, ind) => (
                <ProductCardPlaceHolder key={ind} />
              ))}
        </div>
      </div>
      <div className=" mt-8 py-8 lg:px-12 rounded-md">
        {/* Most Popular */}
        <h1 className="ml-4 mb-4 text-3xl lg:text-4xl font-bold">
          Most Popular
        </h1>
        <div className="flex overflow-auto">
          {products.length
            ? products
                .slice(12, 16)
                .map((product, i) => <ProductCard product={product} key={i} />)
            : [...Array(4)].map((_, ind) => (
                <ProductCardPlaceHolder key={ind} />
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
          {products.length
            ? products
                .slice(0, 4)
                .map((product, i) => <ProductCard product={product} key={i} />)
            : [...Array(4)].map((_, ind) => (
                <ProductCardPlaceHolder key={ind} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
