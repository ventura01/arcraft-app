"use client";

import Image from "next/image";
import React from "react";
import { products } from "@/data/data";
import Button from "./UI/Button";
import { formatPrice } from "./UI/formatPrice";
import { useRouter } from "next/navigation";
import { Product } from "@/data/types";

type Props = {};
interface ProductCardProps {
  products: Product;
}


const ProductCard: React.FC<ProductCardProps> = ({ products }) => {
  //   console.log(products.images[0].image);
  const router = useRouter();
  return (
    <div className="mx-4 min-h-[565px] cursor-pointer rounded-b-md shadow-md border-gray-300 bg-white rounded-t-md border-[1.2px] md:mx-0 md:rounded-t-md">
      <div className="flex w-full flex-col">
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            className="h-full w-full rounded-t-md md:rounded-t-md object-cover"
            width={300}
            height={300}
            priority
            src={products.image}
            alt={products.name}
          />
        </div>
        <div className="px-3">
          <div className="flex flex-col gap-y-2 py-3">
            <h2 className="text-lg font-bold uppercase text-slate-700">
              {products.brand}
            </h2>
            {/* <h3>{products.name}</h3> */}
            <p className="text-sm text-gray-700">
              {products.description.substring(0, 106) + "..."}
            </p>
            <p className="text-xs uppercase text-slate-400">
              {products.category}
            </p>
            <div className="flex self-end">
              <span className="font-semibold text-gray-700">
                {formatPrice(products.price)}
              </span>
            </div>
          </div>
          <div className="mt-2 mb-3">
            <Button
              title="VER PRODUCTO"
              btnType="button"
              buttonStyles="bg-gray-300 text-gray-500 text-xs w-full hover:text-white hover:bg-violet-500"
              handleClick={() => router.push(`/product/${products.id}`)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
