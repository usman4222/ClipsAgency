import React from "react";
import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <div className="flex justify-center items-center bg-[#080617] min-h-screen">
      <motion.div
        className="py-16"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div
          className="rounded-[16px]"
          style={{
            borderColor: "#A55ABD",
            animation: "glowPulse 5s infinite",
          }}
        >
          <iframe
            src="https://player.vimeo.com/video/1023694654?badge=0&autopause=0&player_id=0&app_id=58479"
            alt="Dr Vivien Case Study"
            className="md:w-[330px] md:h-[580px] w-[250px] h-[450px] object-cover rounded-[10px]"
            allow="autoplay; fullscreen; picture-in-picture"
            title="Dr Vivien Case Study"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default VideoSection;
