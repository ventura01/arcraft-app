"use client";

import React, { useRef } from "react";
import Button from "./UI/Button";
import Image from "next/image";
import { delay, motion, useScroll, useTransform } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const img1 = useTransform(scrollYProgress, [0, 1], ["30%", "-10%"]);
  const img2 = useTransform(scrollYProgress, [0, 1], ["100%", "-250%"]);
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
            acerca de
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
            Nosotros
          </motion.h2>
        </article>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="mx-auto flex max-w-md flex-col justify-center gap-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.5, duration: 0.5 },
              }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-gray-800"
            >
              Ofrecemos lo más innovador y lo que es tendencia en la moda.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.7, duration: 0.5 },
              }}
              viewport={{ once: true }}
              className="text-base leading-relaxed text-gray-500"
            >
              En Zulma Fashion, creemos en la moda como una forma de
              expresión personal. Nos dedicamos a ofrecerte
              una plataforma donde puedas descubrir tu estilo único y sentirte
              seguro de ti mismo en cada atuendo que elijas. Nuestro equipo de
              expertos en moda está siempre atento a las últimas tendencias y
              novedades del mundo de la moda, para asegurarnos de que encuentres
              las piezas perfectas que se adapten a tu estilo de vida y
              personalidad.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.9, duration: 0.5 },
              }}
              viewport={{ once: true }}
              className="pt-5"
            >
              <Button
                title="ver info"
                btnType="button"
                buttonStyles="bg-violet-500 text-white hover:bg-violet-400 uppercase text-sm"
              />
            </motion.div>
          </div>
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 1.3, duration: 0.5 },
              }}
              viewport={{ once: true }}
              style={{ y: img1 }}
              className="z-[5]"
              role="image"
            >
              <Image
                src="/img/about-img-1-min.jpg"
                width={500}
                height={750}
                alt="about-img"
                className="object-cover object-center"
              />
            </motion.div>
            {/* <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 1.2, duration: 0.5 },
              }}
              viewport={{ once: true }}
              style={{
                y: img2,
              }}
              className="absolute left-[800px] -z-10"
              role="image"
            >
              <Image
                src="/img/dots.svg"
                width={200}
                height={200}
                alt="dots-about-img"
                className=""
              />
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
