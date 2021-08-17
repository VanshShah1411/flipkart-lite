import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const { id } = useParams();
  const currentProduct = products.find((el) => el === +id);
  console.log(products);
  return <div>{currentProduct.title}</div>;
};

export default ProductDetail;
