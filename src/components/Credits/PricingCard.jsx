import React, { useState } from "react";
import { motion } from "framer-motion"; 

export default function PricingCard() {
  const [selected, setSelected] = useState(45);

  const pricingOptions = {
    24: {
      discount: "Save 5%",
      originalPrice: "USD 4,000",
      discountedPrice: "USD 3,800",
      features: [
        "Signature Editing Style",
        "World-Class Animations",
        "Dedicated Production Manager",
        "Expert Project Manager",
        "Chat directly in Slack",
        "Bonus Viral Templates",
        "Bonus 400+ Viral Hooks",
        "USD 5,000",
      ],
    },
    45: {
      discount: "Save 7%",
      originalPrice: "USD 6,750",
      discountedPrice: "USD 6,413",
      features: [
        "Signature Editing Style",
        "World-Class Animations",
        "Dedicated Production Manager",
        "Expert Project Manager",
        "Chat directly in Slack",
        "Bonus Viral Templates",
        "Bonus 400+ Viral Hooks",
        "USD 5,000",
      ],
    },
    60: {
      discount: "Save 10%",
      originalPrice: "USD 9,000",
      discountedPrice: "USD 8,100",
      features: [
        "Signature Editing Style",
        "World-Class Animations",
        "Dedicated Production Manager",
        "Expert Project Manager",
        "Chat directly in Slack",
        "Bonus Viral Templates",
        "Bonus 400+ Viral Hooks",
        "USD 5,000",
      ],
    },
  };

  return (
    <motion.div
      className="flex justify-center items-center bg-[#080617] px-3 md:px-0"
      initial={{ y: 50, opacity: 0 }} 
      whileInView={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.8, ease: "easeOut" }} 
      viewport={{ once: true }} 
    >
      <div className="bg-[#F5D0FE] text-black rounded-2xl px-6 py-10 w-full md:max-w-2xl shadow-lg mt-4">
        {/* Animated Heading */}
        <motion.h2
          className="text-[19px] leading-[21px] font-semibold text-center"
          initial={{ y: 20, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }} 
        >
          How many do you need?
        </motion.h2>

        {/* Selection Buttons */}
        <motion.div
          className="flex justify-center mt-4 space-x-2 md:space-x-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }, 
          }}
        >
          {Object.keys(pricingOptions).map((key) => (
            <motion.button
              key={key}
              onClick={() => setSelected(Number(key))}
              className={`relative px-4 py-2 text-[33px] md:text-[53px] leading-[60px] font-bold rounded-md transition-all cursor-pointer ${
                selected === Number(key) ? "text-black" : "text-gray-500"
              }`}
              variants={{
                hidden: { y: 20, opacity: 0 }, 
                visible: { y: 0, opacity: 1 }, 
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {key}
            </motion.button>
          ))}
        </motion.div>

        {/* Features List */}
        <motion.ul
          className="mt-6 mb-8 space-y-2 text-center text-[15px] leading-[17px] font-medium"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {pricingOptions[selected].features.map((feature, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { y: 20, opacity: 0 }, 
                visible: { y: 0, opacity: 1 }, 
              }}
              transition={{ duration: 0.8, ease: "easeOut" }} 
            >
              {feature}
            </motion.li>
          ))}
        </motion.ul>

        {/* Pricing */}
        <motion.div
          className="text-center mt-6 mb-10"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }} 
          viewport={{ once: true }} 
        >
          <p className="line-through text-gray-500 text-[15px] md:text-[22px] leading-[25px]">
            {pricingOptions[selected].originalPrice}
          </p>
          <p className="text-[28px] md:text-[38px] leading-[43px] font-bold">
            {pricingOptions[selected].discountedPrice}
          </p>
        </motion.div>

        {/* Purchase Button */}
        <motion.div
          className="mt-6 flex justify-center"
          initial={{ y: 20, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }} 
        >
          <button className="bg-[#E6FF57] text-black font-bold py-3 px-10 md:px-20 rounded-md">
            Purchase Credits
          </button>
        </motion.div>

        {/* Validity Info */}
        <motion.p
          className="text-[17px] leading-[19px] text-gray-500 text-center mt-5"
          initial={{ y: 20, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }} 
          viewport={{ once: true }}
        >
          5 Months Validity
        </motion.p>
      </div>
    </motion.div>
  );
}