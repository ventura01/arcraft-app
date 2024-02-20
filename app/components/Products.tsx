"use client";

import React, { useRef } from "react";
import Button from "./UI/Button";
import Image from "next/image";
import { delay, motion, useScroll, useTransform } from "framer-motion";
import { products } from "@/data/data";
import ProductCard from "./ProductCard";

type Props = {};

const Products = (props: Props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // const img1 = useTransform(scrollYProgress, [0, 1], ["30%", "-10%"]);
  // const img2 = useTransform(scrollYProgress, [0, 1], ["100%", "-250%"]);
  return (
    <section id="about" className="relative py-20" ref={ref}>
      <div className="container mx-auto max-w-screen-xl">
        <article className="container mx-auto max-w-lg py-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="mb-5 block text-center text-[12.5px] uppercase tracking-[3px] text-gray-400"
          >
            Nuestros
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.3, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="text-center text-4xl text-gray-800"
          >
            Productos
          </motion.h2>
        </article>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-5">
          {products.map((product: any) => (
            <div key={product.id}><ProductCard products={product}/></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
