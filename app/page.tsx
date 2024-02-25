// import Image from "next/image";

import About from "./components/About";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Products from "./components/Products";
import RecentBlog from "./components/RecentBlog";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      {/* <HowItWorks /> */}
      <Products />
      <Testimonial />
      <RecentBlog />
    </>
  );
}
