import React from "react";
import { motion } from "framer-motion";

const VideoSection = () => {
    return (
        <div className="flex justify-center items-center bg-[#080617] min-h-screen">
            <motion.div
                className="relative overflow-hidden py-16"
                initial={{ y: 50, opacity: 0 }} 
                whileInView={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.8, ease: "easeOut" }} 
                viewport={{ once: true }}
                style={{
                    background: "radial-gradient(circle, rgba(166,91,190,0.5) 1%, rgba(8,6,23,1) 35%)",
                }}
            >
                <iframe
                    src="https://player.vimeo.com/video/1023694654?badge=0&autopause=0&player_id=0&app_id=58479"
                    alt="Dr Vivien Case Study"
                    className="h-[650px] w-[250px] md:w-[100vw] object-cover rounded-lg"
                    allow="autoplay; fullscreen; picture-in-picture"
                    title="Dr Vivien Case Study"
                />
            </motion.div>
        </div>
    );
};

export default VideoSection;
