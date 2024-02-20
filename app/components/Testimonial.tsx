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
  const [index, setIndex] = useState(0);
  const handleNext = () => {
    if (index === testimonialContent.testimonials.length - 1) {
      return setIndex(0);
    }
    setIndex(index + 1);
  };
  const handlePrev = () => {
    if (index === 0) {
      return setIndex(testimonialContent.testimonials.length - 1);
    }
    setIndex(index - 1);
  };
  return (
    <section id="testimonial" className="bg-[#f3f5f7] py-20">
      <div className="container mx-auto max-w-screen-xl overflow-y-visible">
        <div className="container mx-auto max-w-md">
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
        {/* MENU PEQUEÑO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 0.9, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className="flex justify-center md:hidden"
        >
          <div className="mx-4">
            <div className="relative mb-3 mt-20 rounded-xl border-2 bg-slate-700 px-5 pb-10 pt-16 shadow-xl">
              <div className="">
                <Image
                  src={testimonialContent.testimonials[index].img}
                  // fill
                  width={300}
                  height={300}
                  alt="Test-image"
                  loading="lazy"
                  className="absolute right-1/2 top-0 h-20 w-20 -translate-y-1/2 translate-x-1/2 transform rounded-full border-4 object-cover"
                />
              </div>
              <div>
                <p className="mb-5 text-gray-300">
                  {testimonialContent.testimonials[index].quote}
                </p>
                <h4 className="text-right text-lg font-medium capitalize text-indigo-500">
                  {testimonialContent.testimonials[index].name}
                </h4>
                <span className="block text-right text-sm text-indigo-300">
                  {testimonialContent.testimonials[index].jobTitle}
                </span>
              </div>
            </div>
            <div className="flex justify-center gap-x-3">
              <button
                onClick={handleNext}
                className="rounded-full bg-gray-700 px-3 py-3 text-indigo-300"
              >
                <CaretLeft size={16} />
              </button>
              <button
                onClick={handlePrev}
                className="rounded-full bg-gray-700 px-3 py-3 text-indigo-300"
              >
                <CaretRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>
        {/* MENU GRANDE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 0.9, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className="hidden justify-center md:flex"
        >
          <div className="grid grid-cols-3 gap-x-3">
            {testimonialContent.testimonials.map((test, index) => (
              <div key={index} className="flex gap-x-3">
                <div className="relative mb-3 mt-20 rounded-xl border-2 bg-slate-700 px-5 pb-10 pt-16 shadow-xl">
                      <div>
                        <Image
                          src={test.img}
                          // fill
                          width={300}
                          height={300}
                          alt="Test-image"
                          loading="lazy"
                          className="absolute right-1/2 top-0 h-20 w-20 -translate-y-1/2 translate-x-1/2 transform rounded-full border-4 object-cover"
                        />
                      </div>
                  <div>
                    <p className="mb-5 text-gray-300">
                      {test.quote}
                    </p>
                    <h4 className="text-right text-lg font-medium capitalize text-indigo-500">
                      {test.name}
                    </h4>
                    <span className="block text-right text-sm text-indigo-300">
                      {test.jobTitle}
                    </span>
                  </div>
                </div>
            
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
//! CaretRight
