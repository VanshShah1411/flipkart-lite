import React from "react";

import ImageContainer from "./layout/ImageContainer";
import DetailsContainer from "./layout/DetailsContainer";
import RelatedProducts from "./layout/RelatedProducts";
import ProductDetailsPlaceholder from "./ProductDetailsPlaceholder";
//redux
import { useSelector } from "react-redux";

//router
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const products = useSelector((state) => state.products);

  const { id } = useParams();
  const currentProduct = products.find((el) => el.id === +id);

  return (
    <div>
      {!products.length ? (
        <ProductDetailsPlaceholder />
      ) : (
        <>
          <div className="main-container lg:flex container px-4 lg:px-12 pt-10">
            <ImageContainer image={currentProduct.image} />
            <DetailsContainer currentProduct={currentProduct} />
          </div>
          <RelatedProducts />
        </>
      )}
    </div>
  );
};

export default ProductDetail;
