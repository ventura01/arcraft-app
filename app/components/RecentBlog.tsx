"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {};

const RecentBlog = (props: Props) => {
  return (
    <section id="blog">
      <div className="container mx-auto max-w-screen-xl">
        <div className="mx-auto grid max-w-3xl grid-cols-1 py-20 lg:grid-cols-2">
          <article className="mx-4 md:mx-0">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: true }}
              className="mb-5 block text-center text-[12.5px] uppercase tracking-[3px] text-gray-400 md:text-left"
            >
              nuestro blog
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.3, duration: 0.5 },
              }}
              viewport={{ once: true }}
              className="text-center text-4xl text-gray-800 md:text-left"
            >
              Actividades recientes
            </motion.h2>
          </article>
          <div className="mx-4 py-5 md:mx-0 md:py-0">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.4, duration: 0.5 },
              }}
              viewport={{ once: true }}
              className="text-base text-justify md:text-left leading-relaxed text-gray-500"
            >
              En nuestro blog, la moda es más que ropa; es una forma de
              expresión y creatividad. Te invitamos a explorar, inspirarte y
              compartir tu amor por la moda. Únete a nosotros mientras exploramos las
              últimas tendencias, celebramos la diversidad de estilos y nos
              sumergimos en el emocionante mundo de la moda.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentBlog;
