import React from "react";
import { motion } from "framer-motion";
import { Heading } from "../Heading";
import SuccessStoriesCarousel from "./SuccessStoriesCarousel";
import { Link } from "react-router-dom";
import CustomCarousel from "../../pages/CustomCarousel";

const SuccessStoriesSection = () => {
  return (
    <div className="bg-[#080617] pt-20">
      {/* Animated Heading */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Heading
          title="Success Stories"
          description="Clients don't just love us because we save them time. It's because we also get them results."
        />
      </motion.div>
      {/* Animated Button */}
      <Link to="/client-success">
        <motion.div
          className="flex justify-center pb-20 bg-[#080617]"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button className="rounded-2xl cursor-pointer bg-[#f5d1ff] px-6 py-1 md:px-8 md:py-2 text-base font-semibold text-gray-900 transition-colors hover:bg-purple-300 md:text-lg">
            View All Clients Success
          </button>
        </motion.div>
      </Link>
      {/* <SuccessStoriesCarousel /> */}
      <CustomCarousel/>
    </div>
  );
};

export default SuccessStoriesSection;
