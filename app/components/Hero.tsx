"use client";

import React, { useRef } from "react";
import { delay, motion, useScroll, useTransform } from "framer-motion";
import Button from "./UI/Button";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgScroll1 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const imgScroll2 = useTransform(scrollYProgress, [0, 1], ["100%", "50%"]);
  return (
    <section ref={ref} className="mx-4 lg:mx-0">
      <div className="container mx-auto max-w-screen-xl">
        <div className="mx-auto grid w-full grid-cols-1 items-center justify-between lg:h-screen lg:min-h-[700px] lg:grid-cols-2">
          <div className="relative z-[3] py-10 lg:py-0 lg:left-28">
            <motion.span
              className="mb-5 inline-block text-[12.5px] tracking-[3px] text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              WELCOME
            </motion.span>
            <motion.h1
              className="mb-5 inline-block capitalize text-gray-800 text-4xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Where Creativity Meets Structural Integrity
            </motion.h1>
            <motion.p
              className="mb-10 w-auto max-w-xl text-base leading-relaxed text-gray-500 lg:mb-12 lg:w-screen lg:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Welcome to a world where creativity meets unwavering structural
              integrity. At arcraft, we believe that exceptional design goes
              hand in hand with meticulous engineering.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Button
                title="ver proyectos"
                buttonStyles="bg-violet-500 text-sm hover:bg-violet-400 text-white uppercase"
                btnType="button"
              />
            </motion.div>
          </div>
          <div>
            <motion.div
              className="relative z-[2] lg:right-28 bg-cover bg-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.4, duration: 0.5 },
              }}
              viewport={{ once: true }}
              style={{ y: imgScroll1 }}
            >
              <Image
                src="/img/hero-img-1-min.jpg"
                width={828}
                height={925}
                alt="hero-img"
                className=""
              />
            </motion.div>
            <motion.div
              className="absolute lg:left-[650px] bottom-0 z-[1] lg:bottom-[200px]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.4, duration: 0.5 },
              }}
              viewport={{ once: true }}
              style={{ y: imgScroll2 }}
            >
              <Image src="/img/dots.svg" width={250} height={250} alt="dots" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
// mx-auto h-auto w-full items-center justify-between lg:flex lg:h-screen lg:min-h-[700px] lg:w-10/12
