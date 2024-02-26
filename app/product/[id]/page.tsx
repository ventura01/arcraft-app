import Button from "@/app/components/UI/Button";
import ButtonBack from "@/app/components/UI/ButtonBack";
import { formatPrice } from "@/app/components/UI/formatPrice";
import { Product } from "@/data/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
// import { Product } from "@/data/types";

interface ParamsProps {
  id: string;
}

const getData = async (id: string) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Algo salió mal");
  }
  return res.json();
};

const ProductDetail = async ({ params }: { params: ParamsProps }) => {
  console.log("params", params);
  const { id } = params;
  const sinleProduct: Product = await getData(id);
  console.log(sinleProduct);
  return (
    <div className="container mx-auto grid max-w-screen-xl grid-cols-1 py-0 md:grid-cols-2 md:py-20">
      {sinleProduct.image && (
        <div>
          <Image
            src={sinleProduct.image}
            className="object-cover "
            height={500}
            width={500}
            priority
            alt={sinleProduct.brand}
          />
        </div>
      )}
      <div className="mx-auto max-w-2xl p-5 pt-14 md:p-10 md:pt-0">
        <h1 className="text-4xl font-bold text-gray-700">
          {sinleProduct?.brand}
        </h1>
        <hr className="my-3 w-[30%]" />
        <p className="text-justify text-gray-500">
          {sinleProduct?.description}
        </p>
        <hr className="my-3 w-[30%]" />
        <p className="text-sm font-semibold text-gray-700">
          CATEGORíA:{" "}
          <span className="font-light text-gray-500">
            {sinleProduct?.category}
          </span>
        </p>
        <p
          className={`${
            sinleProduct.inStock ? "text-teal-600" : "text-rose-500"
          } text-sm font-semibold`}
        >
          {sinleProduct?.inStock ? "En Stock" : "Sin Stock"}
        </p>
        <hr className="my-3 w-[30%]" />
        <div className="mt-10">
          <span className="text-2xl font-bold text-gray-700">
            {formatPrice(sinleProduct?.price)}
          </span>
        </div>
        <div className="py-10">
          <ButtonBack />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
