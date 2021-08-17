import React from "react";

// Redux
import { useSelector } from "react-redux";

// Material UI
import ProductCard from "./ProductCard";

const Home = () => {
  const products = useSelector((state) => state.products);

  return (
    <div>
      <h1>Home Page</h1>
      <div className="product-listing">
        {products.map((product, ind) => (
          <ProductCard product={product} key={ind} />
        ))}
      </div>
    </div>
  );
};

export default Home;
