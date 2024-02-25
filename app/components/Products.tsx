import { Product } from "@/data/types";
import React from "react";
import ProductCard from "./ProductCard";
import Heading from "./Headind";

type Props = {};

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Algo salió mal");
  }
  return res.json();
};

const Products = async (props: Props) => {
  const products: Product[] = await getData();
  console.log(products);
  return (
    <section id="products" className="container mx-auto max-w-screen-xl py-20">
      <Heading />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
        {products.map((prod) => (
          <div key={prod.id}>
            <ProductCard products={prod} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
