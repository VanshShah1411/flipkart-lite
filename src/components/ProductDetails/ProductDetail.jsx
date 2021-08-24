import React from "react";

import FourOFour from "../FourOFour";

// layouts
import ImageContainer from "./layout/ImageContainer";
import DetailsContainer from "./layout/DetailsContainer";
import RelatedProducts from "./layout/RelatedProducts";
import ProductDetailsPlaceholder from "./ProductDetailsPlaceholder";
import Reviews from "./layout/Review/Reviews";

//redux
import { useSelector } from "react-redux";

//router
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const products = useSelector((state) => state.products);

  const { id } = useParams();
  const currentProduct = products.find((el) => el.id === +id);

  if (id > 50) {
    return <FourOFour />;
  }

  return (
    <div>
      {!products.length ? (
        <ProductDetailsPlaceholder />
      ) : (
        <>
          <div className="main-container lg:flex container px-4 lg:px-12 pt-10">
            <ImageContainer images={currentProduct.images} />
            <DetailsContainer currentProduct={currentProduct} />
          </div>
          <RelatedProducts />
          <Reviews />
        </>
      )}
    </div>
  );
};

export default ProductDetail;
