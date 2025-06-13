import React from "react";
import Carousel from "./LandingSections/Carousel";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] overflow-hidden px-4 pt-24 pb-10 animate-gradient mt-24">
      {/* Gradient Background */}
      <div className="absolute inset-0" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl text-center mt-10">
        <motion.h1
          className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.25)] md:text-5xl lg:text-6xl xl:text-7xl"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Supercharge Your Brand With Viral Signature Clips
        </motion.h1>

        <motion.p
          className="mx-auto max-w-xl text-base text-gray-200 md:text-lg lg:text-xl"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          If you're a busy creator with no time to edit or post consistently on
          social media but still recognize the need to grow your brand faster,
          then this is for you.
        </motion.p>
      </div>

      <Carousel />
    </section>
  );
};

export default HeroSection;
