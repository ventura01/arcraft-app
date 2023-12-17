// import Image from "next/image";

import About from "./components/About";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <HowItWorks />
    </>
  );
}
