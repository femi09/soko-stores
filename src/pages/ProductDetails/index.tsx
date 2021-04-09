import React from "react";
import RelatedProducts from "./RelatedProducts";
import Product from "./Product";
import "./index.css";

const ProductDetails = () => {
  return (
    <div className="product_details">
      <Product />
      <RelatedProducts />
    </div>
  );
};

export default ProductDetails;
