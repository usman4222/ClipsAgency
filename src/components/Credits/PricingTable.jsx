import React, { useState } from "react";
import { motion } from "framer-motion";

const PricingTable = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      title: "[60 sec] - Talking Head",
      credits: "1 Credit",
      description:
        "A-roll content featuring you on camera, enhanced with professional captions, animations, and transitions for a clean, engaging look.",
      image:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/673c9c2f8fe34d00a19b865a_Abe%20Jr%20-%20Power%20of%20Gut%20Feeling.gif",
    },
    {
      title: "[60 sec] - Full Animation",
      credits: "3 Credits",
      description:
        "Fully animated video with high-quality motion graphics, voiceovers, and smooth transitions.",
      image:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/673c9c3b31591c889cd581a8_Steve%20Hill%20-%20when%20you%20hear%20dubai.gif",
    },
    {
      title: "[2-5 mins] - Long Form Talking Head",
      credits: "5 Credits",
      description:
        "Fully animated video with high-quality motion graphics, voiceovers, and smooth transitions.",
      image:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/673c9b22edfbfc73a8be2703_RadinXMarvin_1_optimized.gif",
    },
    { title: "[5-10 mins] - Long Form Talking Head", credits: "8 Credits" },
    { title: "[10-15 mins] - Long Form Talking Head", credits: "10 Credits" },
    { title: "[15-20 mins] - Long Form Talking Head", credits: "12 Credits" },
  ];

  return (
    <div className="flex justify-center items-center bg-[#080617] p-4">
      <div className="w-full max-w-4xl">
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-700 rounded-lg text-white">
            <thead>
              <tr className="bg-gray-900 text-left text-sm md:text-base">
                <th className="py-3 px-4 border-b border-gray-700">Plan</th>
                <th className="py-3 px-4 border-b border-gray-700 text-center">
                  Info
                </th>
                <th className="py-3 px-4 border-b border-gray-700 text-center">
                  Credits
                </th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan, index) => (
                <tr key={index} className="hover:bg-gray-800 transition">
                  <td className="py-4 px-4 border-b border-gray-700">
                    {plan.title}
                  </td>
                  <td className="py-4 px-4 border-b border-gray-700 text-center">
                    {index < 3 && ( // Show info icon only for the first three rows
                      <button
                        className="text-purple-400 cursor-pointer text-lg"
                        onClick={() => setSelectedPlan(plan)}
                      >
                        ℹ️
                      </button>
                    )}
                  </td>
                  <td className="py-4 px-4 border-b border-gray-700 text-center">
                    {plan.credits}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-transparent/30 backdrop-blur-sm bg-opacity-60 flex justify-center items-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6 relative"
          >
            <button
              className="absolute top-4 right-4 text-gray-700 hover:text-black cursor-pointer"
              onClick={() => setSelectedPlan(null)}
            >
              ✖
            </button>
            <div className="flex gap-4">
              <img
                src={selectedPlan.image}
                alt={selectedPlan.title}
                className=" rounded-lg"
              />
              <div className="flex justify-center items-center px-10">
                <div>
                  <h2 className="text-[27px] leading-[33px] font-bold">
                    {selectedPlan.title}
                  </h2>
                  <p className="text-black font-semibold mt-4 text-[15px] leading-[17px]">
                    {selectedPlan.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default PricingTable;
