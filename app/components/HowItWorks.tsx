"use client";

import React from "react";
import { motion } from "framer-motion";
import { howItWorks } from "@/data/data";
import {
  BugDroid,
  Carrot,
  Coffee,
  Confetti,
  Dna,
  FlowerTulip,
  GlobeHemisphereWest,
} from "@phosphor-icons/react";
import Link from "next/link";

type Props = {};

const HowItWorks = (props: Props) => {
  return (
    <>
      <section id="howitworks" className="py-20">
        <div className="container mx-auto max-w-screen-xl">
          <div className="grid max-w-3xl grid-cols-1 py-20 lg:grid-cols-2 lg:items-end">
            <article>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="mb-5 block text-[12.5px] uppercase tracking-[3px] text-gray-400"
              >
                how it works
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.3, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="text-4xl text-gray-800"
              >
                Where Creativity Meets Structural Integrity
              </motion.h2>
            </article>
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="text-base leading-relaxed text-gray-500"
              >
                At arcraft we&apos;re dedicated to shaping environments that
                transcend mere structures, weaving stories and experiences into
                every design.
              </motion.p>
            </div>
          </div>
        </div>
        <div className="container mx-auto grid max-w-screen-xl grid-cols-1 gap-5 lg:grid-cols-3">
          {howItWorks.steps.map((step, index) => {
            index *= 0.2;
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: index, duration: 0.5 },
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                key={index}
                className="group relative overflow-hidden bg-white px-10 pb-20 pt-28 duration-300 hover:bg-[#fb2576] hover:shadow-xl"
              >
                <div>
                  <div className="">
                    <div className="flex gap-x-3">
                      <span className="text-gray-400 group-hover:text-white group-hover:opacity-20">
                        {step.number}
                      </span>
                      <div className="flex flex-col gap-y-5">
                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white">
                          {step.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-500 group-hover:text-white">
                          {step.description}
                        </p>
                        <div className="pt-5">
                          <Link
                            href={step.btn.href}
                            className="border-b-2 border-violet-500 pb-2 text-xs font-semibold uppercase tracking-widest text-gray-800 first-letter:capitalize group-hover:border-white group-hover:text-white"
                          >
                            {step.btn.label}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="absolute -top-[130px] left-3 text-[200px] font-semibold text-gray-100 group-hover:text-white group-hover:opacity-20">
                    {step.number}
                  </span>
                  <step.icon
                    size={42}
                    className="absolute right-10 top-10 fill-violet-500 group-hover:fill-white"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
      <section className="relative">
        <div className="absolute -top-64 -z-10 w-full bg-violet-700 pb-32 lg:pt-60">
          <div className="container mx-auto grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-2">
            {howItWorks.features.map((feat, index) => {
              index *= 0.2;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: index, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  key={index}
                  className="p-5"
                >
                  <div className="flex justify-start">
                    <div>
                      <feat.icon className="mr-3 h-8 w-8 fill-violet-50" />
                    </div>
                    <div className="flex flex-col gap-y-5">
                      <h3 className="text-lg font-semibold text-violet-50">
                        {feat.title}
                      </h3>
                      <p className="font-light text-violet-200">
                        {feat.description}
                      </p>
                      <div>
                        <Link
                          href={feat.btn.href}
                          className="border-b-2 border-violet-400 pb-2 text-xs font-semibold uppercase tracking-widest text-violet-50 hover:border-white"
                        >
                          {feat.btn.label}
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
// At arcraft we're dedicated to shaping environments that transcend mere structures, weaving stories and experiences into every design.
