import React from "react";
import ProductDetail from "./ProductDetail";
// import { getProducts, products } from "@/data/data";
import { product } from "@/data/product";

interface ParamsProps {
  productId: number;
}


const Product = async ({ params }: { params: ParamsProps }) => {
  console.log("params", params);
  const { productId } = params;
  
  return (
    <div>
      <ProductDetail product={product} />
    </div>
  );
};

export default Product;
