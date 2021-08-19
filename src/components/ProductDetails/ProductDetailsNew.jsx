import React, { Fragment } from "react";

import ImageContainer from "./layout/ImageContainer";
import DetailsContainer from "./layout/DetailsContainer";
import RelatedProducts from "./layout/RelatedProducts";
//redux
import { useSelector } from "react-redux";

//router
import { useParams } from "react-router-dom";

const ProductDetailsNew = () => {
  const products = useSelector((state) => state.products);
  console.log(products);

  if (products.length === 0) {
    return <div className="flex items-center justify-center">Loading...</div>;
  }

  const { id } = useParams();

  const currentProduct = products.find((el) => el.id === +id);

  return (
    <div>
      <div className="main-container lg:flex container px-4 lg:px-12 pt-10">
        <ImageContainer image={currentProduct.image} />
        <DetailsContainer currentProduct={currentProduct} />
      </div>
      <RelatedProducts />
    </div>
  );
};

export default ProductDetailsNew;
