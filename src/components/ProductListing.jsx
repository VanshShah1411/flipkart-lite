import React from "react";

// Redux
import { useSelector } from "react-redux";

import ProductCard from "./ProductCard";
import ProductCardPlaceHolder from "./ProductCardPlaceHolder";

const Home = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className=" mx-auto py-16 sm:py-24 ">
      <div className="w-full flex flex-col items-center justify-center md:flex-row md:flex-wrap">
        {products.length
          ? products.map((product, ind) => (
              <ProductCard key={ind} product={product} />
            ))
          : [...Array(20)].map((_, ind) => (
              <ProductCardPlaceHolder key={ind} />
            ))}
      </div>
    </div>
  );
};

export default Home;
