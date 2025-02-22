import React from "react";
import { motion } from "framer-motion";

const VideoSection = () => {
    return (
        <div className="flex justify-center bg-[#080617]">
            <motion.div
                className="overflow-hidden py-16"
                initial={{ y: 50, opacity: 0 }} 
                whileInView={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.8, ease: "easeOut" }} 
                viewport={{ once: true }}
            >
                <iframe
                    src="https://player.vimeo.com/video/1023694654?badge=0&autopause=0&player_id=0&app_id=58479"
                    alt="Dr Vivien Case Study"
                    className="h-[650px] w-[100vw] object-cover"
                    allow="autoplay; fullscreen; picture-in-picture"
                    title="Dr Vivien Case Study"
                />
            </motion.div>
        </div>
    );
};

export default VideoSection;