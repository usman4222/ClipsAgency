import React from "react";
import { motion } from "framer-motion"; 
import { AiOutlinePlayCircle as Circle, AiOutlineAudio as Mic } from "react-icons/ai";
import { TbWaveSine as WavyLine } from "react-icons/tb";

function ServiceCard({ title, description, ctaText, ctaLink, icon }) {
    return (
        <motion.div
            className="flex h-full flex-col rounded-2xl bg-[#f5d1ff] hover:bg-[#F1F1F1] transition-all ease-in cursor-pointer p-8"
            initial={{ y: 50, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.8, ease: "easeOut" }} 
            viewport={{ once: true }} 
        >
            <div className="mb-4 xl:mb-8 inline-flex h-15 w-15 md:h-20 md:w-20 items-center justify-center rounded-full bg-[#E6B3FF]">
                {icon}
            </div>
            <h2 className="mb-4 text-[30px] md:text-[40px] leading-[34px] md:leading-[44px] font-extrabold tracking-tight text-gray-900 lg:text-[40px] whitespace-pre-line" dangerouslySetInnerHTML={{ __html: title }}></h2>
            <p className="mb-8 flex-1 text-[15px] xl:text-lg text-black ">{description}</p>
            {/* Button with Link */}
            <a href={ctaLink} rel="noopener noreferrer">
                <button className="inline-flex w-fit items-center rounded-2xl cursor-pointer bg-[#E7FE54] px-4 py-2 md:px-6 md:py-3 text-[15px]  md:text-[20px] leading-[26px] font-extrabold text-black transition-colors ">
                    {ctaText}
                </button>
            </a>
        </motion.div>
    );
}

export default function ServiceCards() {
    const services = [
        {
            title: "Need\nEditing?",
            description: "A world-class editing team at your disposal. Turn your raw videos into visual masterpieces.",
            ctaText: "Explore Credits™",
            ctaLink: "/credits", 
            icon: <Circle className="h-12 w-12 md:h-14 md:w-14 text-black" />,
        },
        {
            title: "Need A-Z\nSupport?",
            description: "A complete done-for-you solution helping you create 15+ high-quality content in 2 hours of your time only.",
            ctaText: "Explore GhostHost™",
            ctaLink: "/ghosthost", 
            icon: <WavyLine className="h-12 w-12 md:h-14 md:w-14 text-black" />,
        },
        {
            title: "Have a\nPodcast?",
            description: "Outsource your podcast's signature editing and distribution.",
            ctaText: "Explore PowerPod™",
            ctaLink: "/powerpod", 
            icon: <Mic className="h-12 w-12 md:h-14 md:w-14 text-black" />,
        },
    ];

    return (
        <div className="bg-[#080617] px-4 pb-16 pt-16 md:pb-24">
            <div className="w-full">
                <motion.div
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.2 } },
                    }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { y: 50, opacity: 0 }, 
                                visible: { y: 0, opacity: 1 },
                            }}
                            transition={{ duration: 0.8, ease: "easeOut" }} 
                        >
                            <ServiceCard
                                title={service.title}
                                description={service.description}
                                ctaText={service.ctaText}
                                ctaLink={service.ctaLink} 
                                icon={service.icon}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
