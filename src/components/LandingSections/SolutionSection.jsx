import React from "react";
import { motion } from "framer-motion";
import ServiceCards from "../ServiceCards";

const SolutionSection = () => {
  return (
    <div>
      <div className="bg-[#080617] px-4 pt-16 md:pt-24">
        <motion.div
          className="container mx-auto max-w-5xl text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.8, ease: "easeOut" }} 
          viewport={{ once: true }} 
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.25)] md:text-5xl lg:text-6xl xl:text-7xl">
            No-Brainer Solutions For
            <br />
            Brain-Wrecking Problems
          </h1>
          <p className="mx-auto max-w-2xl text-base text-white md:text-lg lg:text-xl">
            Transforming Real-Life Issues with Effective Solutions
          </p>
        </motion.div>
      </div>
      <ServiceCards />
    </div>
  );
};

export default SolutionSection;