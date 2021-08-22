import React from "react";

// Redux
import { useSelector } from "react-redux";

import ProductCard from "./ProductCard";
import ProductCardPlaceHolder from "./ProductCardPlaceHolder";

const Home = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="px-16 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
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
