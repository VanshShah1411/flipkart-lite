import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/index";

const Home = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  console.log(products);

  return (
    <div>
      <h1>Home Page</h1>
      {/* {products.map((product) => (
        <h1>{product.id}</h1>
      ))} */}
    </div>
  );
};

export default Home;
