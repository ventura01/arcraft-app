"use client";

import Image from "next/image";
import React from "react";
import { products } from "@/data/data";
import Button from "./UI/Button";

type Props = {};
interface ProductCardProps {
  products: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ products }) => {
//   console.log(products.images[0].image);
  return (
    <div className="cursor-pointer rounded-md border-[1.2px] border-slate-100 p-5 transition hover:scale-105">
      <div className="flex w-full flex-col gap-1">
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            className="h-full w-full object-cover"
            width={300}
            height={300}
            src={products.images[0].image}
            alt={products.name}
          />
        </div>
        <div className="flex flex-col gap-y-2 py-5">
          <h2 className="text-lg uppercase text-slate-700 font-bold">{products.brand}</h2>
          {/* <h3>{products.name}</h3> */}
          <p className="text-sm text-slate-700">{products.description.substring(0, 36) + "..."}</p>
          <p className="text-xs text-slate-400 uppercase">{products.category}</p>
          <div><span>{products.price}</span></div>
          <div className="mt-5"><Button title="VER PRODUCTO" btnType="button" buttonStyles="bg-violet-500 text-white text-xs"/></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
