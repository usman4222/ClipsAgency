import React from "react";
import { motion } from "framer-motion";
import Box from "../../assets/gif3.gif";
import video from "../../assets/gif2.gif";
import rocket from "../../assets/gif1.gif";

export default function BrandingSection() {
  return (
    <section className="bg-[#080617] px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }} 
        >
          <h1 className="mb-8 md:mb-6 text-4xl md:text-[61px] md:leading-[67px] font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Branding, Content &<br />
            Systems.
          </h1>
          <p className="mx-auto max-w-3xl text-base text-gray-400 md:text-lg">
            What happens when a branding agency who is obsessed with systems and
            frameworks, decides to dive in the world content creation? you get
            the clips agency.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <motion.div
            className="text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} 
            viewport={{ once: true }} 
          >
            <div className="mb-6 flex justify-center">
              <img src={Box} alt="Box" className="w-32 h-32" />
            </div>
            <h2 className="mb-4 text-xl font-bold text-white md:text-3xl">
              Nothing is unbranded
            </h2>
            <p className="mx-auto max-w-sm text-gray-400">
              In the world of branding, it's a runway. Will you sizzle and steal
              the show, or will you be lost in the background?
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            className="text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }} 
          >
            <div className="mb-6 flex justify-center">
              <img src={video} alt="Video" className="w-32 h-32" />
            </div>
            <h2 className="mb-4 text-xl font-bold text-white md:text-3xl">
              Videos that drive engagements.
            </h2>
            <p className="mx-auto max-w-sm text-gray-400">
              Level up your online game with videos that don't just snag
              attention but set sparks flying in your audience.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            className="text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }} 
            viewport={{ once: true }} 
          >
            <div className="mb-6 flex justify-center">
              <img src={rocket} alt="Box" className="w-32 h-32" />
            </div>
            <h2 className="mb-4 text-xl font-bold text-white md:text-3xl">
              Removing all the headaches.
            </h2>
            <p className="mx-auto max-w-sm text-gray-400">
              Say adios to the hassle, and time consuming tasks in content
              creation. Embrace a process that's all about doing more with less
              fuss.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}