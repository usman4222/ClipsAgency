import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTASection() {
  // Scroll to top when component mounts

  return (
    <section className="relative min-h-[60vh] overflow-hidden px-4 pt-24">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[#080617]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center mb-32">
        {/* Animated Paragraph */}
        <motion.p
          className="mb-6 text-base text-gray-200 md:text-lg"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Take your brand to the next level
        </motion.p>
        {/* Animated Heading */}
        <motion.h2
          className="mb-8 text-3xl font-bold tracking-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.25)] md:text-5xl lg:text-5xl xl:text-6xl"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Have Some Questions?
          <br />
          Get In Touch
        </motion.h2>
        {/* Animated Button */} 
        <Link to="/submit-form">
          <motion.button
            className="rounded-2xl bg-[#e7fe54] px-4 py-1 md:px-6 md:py-2 text-base font-semibold text-gray-900 transition-all cursor-pointer hover:shadow-lg md:text-lg"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            Book a call
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
