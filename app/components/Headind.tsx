"use client";

import React, { useRef } from "react";
import { delay, motion, useScroll, useTransform } from "framer-motion";

type Props = {};

const Heading = (props: Props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // const img1 = useTransform(scrollYProgress, [0, 1], ["30%", "-10%"]);
  // const img2 = useTransform(scrollYProgress, [0, 1], ["100%", "-250%"]);
  return (
    <section className="relative pb-10" ref={ref}>
      <div className="container mx-auto max-w-screen-xl">
        <article className="container mx-auto max-w-lg mb-20">
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
        
      </div>
    </section>
  );
};

export default Heading;
