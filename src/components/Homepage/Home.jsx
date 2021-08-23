import React from "react";
import OfferStamp from "./OfferStamp";
import ProductCard from "../ProductListing/ProductCard";

import { useSelector } from "react-redux";
import SecondSection from "./SecondSection";
import PromoContainer from "./PromoContainer";
import ProductCardPlaceHolder from "../ProductListing/ProductCardPlaceHolder";
import EndsIn from "./EndsIn";
import PromoCard from "./PromoCard";

const Home = () => {
  const products = useSelector((state) => state.products);
  const arr = [
    {
      image:
        "https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Buy outstanding products",
    },
    {
      image:
        "https://images.unsplash.com/photo-1491336477066-31156b5e4f35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk3fHxmYXNoaW9uJTIwbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Professional Clothes for you!",
    },
    {
      image:
        "https://images.pexels.com/photos/2866077/pexels-photo-2866077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Full flexing in college",
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
      <div className="mx-5 lg:mx-20 flex flex-wrap justify-evenly items-center">
        <PromoCard
          image="https://cdn.discordapp.com/attachments/877090379307028480/879238118639796224/1.png"
          heading="Top Selling Products"
          headColor="blue-500"
        />
        <PromoCard
          image="https://cdn.discordapp.com/attachments/877090379307028480/879238139573587979/2.png"
          heading="Season Sale"
          headColor="gray-400"
        />
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
