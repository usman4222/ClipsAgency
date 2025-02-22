import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

export const Heading = ({ title, description }) => {
    return (
        <section className="bg-[#080617] px-4 pt-10">
            <div className="container mx-auto max-w-4xl text-center">
                {/* Animated Title */}
                <motion.h2
                    className="mb-6 text-4xl font-bold tracking-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.25)] md:text-5xl lg:text-6xl"
                    initial={{ y: 50, opacity: 0 }} 
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }} 
                    viewport={{ once: true }}
                >
                    {title}
                </motion.h2>

                {/* Animated Description */}
                <motion.p
                    className="mx-auto mb-12 max-w-xl text-base text-white md:text-lg lg:text-xl"
                    initial={{ y: 50, opacity: 0 }} 
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true }} 
                >
                    {description}
                </motion.p>
            </div>
        </section>
    );
};