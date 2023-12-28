"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {};

const RecentBlog = (props: Props) => {
  return (
    <section id="blog">
      <div className="container mx-auto max-w-screen-xl">
        <div className="grid max-w-3xl grid-cols-1 py-20 lg:grid-cols-2 mx-auto">
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
              our blog
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
              Recent Updates
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
    </section>
  );
};

export default RecentBlog;
