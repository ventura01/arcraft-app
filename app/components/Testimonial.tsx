"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { testimonialContent } from "@/data/data";
import "swiper/css";
import Image from "next/image";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

type Props = {};

const Testimonial = (props: Props) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(null);
  const [isBeginning, setIsBeginning] = useState(null);
  const sliderRef = useRef<SwiperRef | null>(null!);

  // useEffect(() => {
  //   setIsEnd(sliderRef.current?.swiper.isEnd);
  //   setIsBeginning(sliderRef.current?.swiper.isBeginning);
  // }, []);
  //! metodo 1
  // const prevHandler = () => {
  //   if (!sliderRef.current) return;
  //   sliderRef.current.swiper.slidePrev();
  // };
  // const nextHandler = () => {
  //   if (!sliderRef.current) return;
  //   sliderRef.current.swiper.slideNext();
  // };
  //! metodo 2
  // const prevHandler = useCallback(() => {
  //   if (!sliderRef.current) return;
  //   sliderRef.current.swiper.slidePrev();
  // });
  // const nextHandler = useCallback(() => {
  //   if (!sliderRef.current) return;
  //   sliderRef.current.swiper.slideNext();
  // });

  return (
    <section id="testimonial" className="bg-[#f3f5f7] py-20">
      <div className="container mx-auto max-w-screen-xl overflow-y-visible">
        <div className="container mx-auto max-w-sm">
          <article>
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
              {testimonialContent.heading.title}
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
              {testimonialContent.heading.subTitle}
            </motion.h2>
          </article>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.9, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className=""
        >
          <Swiper
            ref={sliderRef}
            speed={700}
            spaceBetween={30}
            onSlideChange={(swiper) => setSliderIndex(swiper.activeIndex)}
            className="relative z-50 mb-7 mt-20 flex items-center py-32"
          >
            {testimonialContent.testimonials.map((elem, index) => (
              <SwiperSlide className="bg-white" key={elem.name}>
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="">
                    <Image
                      src={elem.img}
                      width={379}
                      height={320}
                      alt={elem.name}
                      className="w-full object-cover object-center"
                    />
                  </div>
                  <div className="relative flex flex-col justify-center gap-y-6 px-4 lg:col-start-2 lg:col-end-4 lg:px-16">
                    <div>
                      <span className="absolute top-2 text-[200px] text-violet-600">
                        &ldquo;
                      </span>
                    </div>
                    <blockquote className="">{elem.quote}</blockquote>
                    <div className=""></div>
                    <div className="flex gap-x-3">
                      <strong className="text-sm">{elem.name}</strong>
                      <span>&mdash;</span>
                      <span className="text-sm text-gray-500">
                        {elem.jobTitle}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 0.9, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="flex gap-x-3">
            <div
              // onClick={prevHandler}
              className={`${
                isBeginning === true
                  ? "!cursor-pointer bg-gray-300 text-gray-600 opacity-30"
                  : "bg-violet-600 text-white opacity-100"
              } group relative top-0 inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full transition-all duration-300 ease-in-out`}
            >
              <CaretLeft
                size={32}
                className={`text-primary text-3xl transition-all duration-300 ease-in-out group-hover:text-white ${
                  isBeginning === true
                    ? "group-hover:text-gray-600"
                    : "group-hover:text-white"
                }`}
              />
            </div>
            <div
              // onClick={nextHandler}
              className={`${
                isEnd === true
                  ? "!cursor-pointer bg-gray-300 text-gray-600 opacity-30"
                  : "bg-violet-600 text-white opacity-100"
              } group relative top-0 inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full transition-all duration-300 ease-in-out`}
            >
              <CaretRight
                size={32}
                className={`text-primary text-3xl transition-all duration-300 ease-in-out group-hover:text-white ${
                  isEnd === true
                    ? "group-hover:text-gray-600"
                    : "group-hover:text-white"
                }`}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
//! CaretRight
