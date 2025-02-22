import React from "react";
import { Heading } from "../../components/Heading";
import Podcasts from "../../components/PowerPod/Podcasts";
import ScrollAnimation from "../../components/Credits/ScrollAnimation";
import BeforeAfterComparison from "../../components/GhostHost/BeforeAfterComparison";
import RemoteRecording from "../../components/GhostHost/RemoteRecording";
import CATSection from "../../components/LandingSections/CATSection";
import FAQSection from "../../components/PowerPod/FAQSection";
import FeatureCards from "../../components/GhostHost/FeatureCards";
import { motion } from "framer-motion"; 

const GhostHost = () => {
  return (
    <>
      <div className="bg-[#080617]">
        <div className="relative w-full h-fit md:h-auto overflow-hidden bg-[#080617]">
          {/* Background Text - GhostHost */}
          <motion.h1
            className="absolute w-full text-center text-white md:text-[150px] lg:text-[200px] xl:text-[250px] 2xl:text-[384px] lg:leading-[307px] font-bold"
            initial={{ y: "100%", opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            GhostHost
          </motion.h1>

          {/* Foreground Image */}
          <div className="flex justify-end max-w-full">
            <img
              src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/6750036db34d5c7c8475005c_GH6.png"
              alt="GhostHost"
              className="relative z-10 hidden md:block max-w-[70%] md:max-w-[70%]"
            />
          </div>

          {/* Content - Text and Paragraph */}
          <motion.div
            className="absolute flex justify-start w-full flex-col bottom-10 left-1/2 transform -translate-x-1/2 px-4 sm:px-6 lg:px-8"
            initial={{ x: "-100%", opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }} 
            viewport={{ once: true }} 
          >
            <h2 className="text-2xl font-bold text-white lg:text-[35px] xl:text-[45px] lg:leading-[50px]">
              Create 15 videos
              <span className="block"> in ±2 hours</span>
            </h2>
            <p className="max-w-xl text-[13px] xl:text-lg text-white/90 mt-4">
              If you’re a busy entrepreneur looking to
              <span className="block">
                put your content creation on autopilot,
              </span>
              <span className="block">then this is for you.</span>
            </p>
          </motion.div>
        </div>

        <Heading
          title={
            <>
              Get A Brand <br /> Makeover
            </>
          }
          description={
            <>
              Start showing up like a professional and gain <br /> more
              visibility and credibility.
            </>
          }
        />
        <BeforeAfterComparison />
        <Heading
          title={
            <>
              Signature Styled <br /> Podcasts
            </>
          }
          description="Personal branding is not a nice-to-have anymore, it’s a must. And how you choose to show up says a lot about you."
        />
        <Podcasts />
        <ScrollAnimation />
        <RemoteRecording />
        <CATSection />
        <FeatureCards />
        <FAQSection />
      </div>
    </>
  );
};

export default GhostHost;
