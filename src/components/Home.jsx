import React, { useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/index";

// Material UI
import ProductCard from "./ProductCard";

const Home = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

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
