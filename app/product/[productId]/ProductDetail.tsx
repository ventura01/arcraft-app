"use client";

import Button from "@/app/components/UI/Button";
import { formatPrice } from "@/app/components/UI/formatPrice";
import { Product } from "@/data/types";
import { ShoppingCart } from "@phosphor-icons/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const router = useRouter()
  return (
    <div className="container mx-auto grid max-w-screen-xl grid-cols-1 py-0 md:py-20 md:grid-cols-2">
      {product.image && (<div>
        <Image
          src={product.image}
          className="object-cover "
          height={500}
          width={500}
          alt={product.brand}
        />
      </div>)}
      <div className="mx-auto max-w-2xl p-5 pt-14 md:p-10 md:pt-0">
        <h1 className="text-4xl font-bold text-gray-700">{product?.brand}</h1>
        <hr className="my-3 w-[30%]" />
        <p className="text-justify text-gray-500">{product?.description}</p>
        <hr className="my-3 w-[30%]" />
        <p className="text-sm font-semibold text-gray-700">
          CATEGORíA:{" "}
          <span className="font-light text-gray-500">{product?.category}</span>
        </p>
        <p
          className={`${
            product.inStock ? "text-teal-600" : "text-rose-500"
          } text-sm font-semibold`}
        >
          {product?.inStock ? "En Stock" : "Sin Stock"}
        </p>
        <hr className="my-3 w-[30%]" />
        <div className="mt-10">
          <span className="text-2xl font-bold text-gray-700">
            {formatPrice(product?.price)}
          </span>
        </div>
        <div className="py-10">
          <Button
            title="REGRESAR"
            btnType="button"
            buttonStyles="bg-gray-300 text-gray-500 text-xs w-full hover:text-white hover:bg-violet-500"
            handleClick={() => router.push('/')}
          >
            {/* <ShoppingCart size={24} weight="fill" /> */}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
