import React, { useEffect, useState } from "react";
import Carousel from "./LandingSections/Carousel";
import { motion } from "framer-motion";


const HeroSection = () => {
  const [gradient, setGradient] = useState("");

  const colors = [
    [8, 6, 23],      
    [168, 93, 188],   
  ];

  let step = 0;
  let colorIndices = [0, 1];
  const gradientSpeed = 0.0015;

  const updateGradient = () => {
    const c0_0 = colors[colorIndices[0]];
    const c0_1 = colors[colorIndices[1]];

    const istep = 1 - step;
    const r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    const g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    const b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    const color1 = `#${((r1 << 16) | (g1 << 8) | b1)
      .toString(16)
      .padStart(6, "0")}`;

    const r2 = Math.round(istep * c0_1[0] + step * c0_0[0]);
    const g2 = Math.round(istep * c0_1[1] + step * c0_0[1]);
    const b2 = Math.round(istep * c0_1[2] + step * c0_0[2]);
    const color2 = `#${((r2 << 16) | (g2 << 8) | b2)
      .toString(16)
      .padStart(6, "0")}`;

    setGradient(`radial-gradient(circle at center, ${color1} -10%, ${color2})`);

    step += gradientSpeed;
    if (step >= 1) {
      step %= 1;
      colorIndices[0] = colorIndices[1];
      colorIndices[1] = (colorIndices[1] + 1) % colors.length;
    }
  };

  useEffect(() => {
    const interval = setInterval(updateGradient, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{ background: gradient }}
      className="relative min-h-[60vh] overflow-hidden px-4 pt-24 pb-10"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl text-center">
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