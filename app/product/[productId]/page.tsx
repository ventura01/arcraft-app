import React from "react";
import ProductDetail from "./ProductDetail";
import { getProducts, products } from "@/data/data";

interface ParamsProps {
  productId: number;
}

const Product = async ({ params }: { params: ParamsProps }) => {
  console.log("params", params);
  // const { productId } = params;
  // const products = await getProducts();
  // console.log(product)
  return <div>{/* <ProductDetail product={product} /> */}</div>;
};

export default Product;
