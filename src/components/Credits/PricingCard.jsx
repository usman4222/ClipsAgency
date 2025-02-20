import React, { useState } from "react";

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
    <div className="flex justify-center items-center bg-[#080617] ">
      <div className="bg-[#F5D0FE] text-black rounded-2xl px-6 py-10 w-full max-w-2xl  shadow-lg mt-4">
        <h2 className="text-[19px] leading-[21px] font-semibold text-center">
          How many do you need?
        </h2>

        {/* Selection Buttons */}
        <div className="flex justify-center mt-4 space-x-6">
          {Object.keys(pricingOptions).map((key) => (
            <button
              key={key}
              onClick={() => setSelected(Number(key))}
              className={`relative px-4 py-2 text-[53px] leading-[60px] font-bold rounded-md transition-all cursor-pointer ${
                selected === Number(key) ? "text-black" : "text-gray-500"
              }`}
            >
              {key}
              {/* {pricingOptions[key].discount && (
                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-300 text-xs px-2 py-1 rounded-md">
                  {pricingOptions[key].discount}
                </span>
              )} */}
            </button>
          ))}
        </div>

        {/* Features List */}
        <ul className="mt-6 mb-8 space-y-2 text-center text-[15px] leading-[17px] font-medium">
          {pricingOptions[selected].features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        {/* Pricing */}
        <div className="text-center mt-6 mb-10">
          <p className="line-through text-gray-500 text-[22px] leading-[25px]">
            {pricingOptions[selected].originalPrice}
          </p>
          <p className="text-[38px] leading-[43px] font-bold">
            {pricingOptions[selected].discountedPrice}
          </p>
        </div>

        {/* Purchase Button */}
        <div className="mt-6 flex justify-center">
          <button className="bg-[#E6FF57] text-black font-bold py-3 px-20 rounded-md">
            Purchase Credits
          </button>
        </div>

        {/* Validity Info */}
        <p className="text-[17px] leading-[19px] text-gray-500 text-center mt-5">
          5 Months Validity
        </p>
      </div>
    </div>
  );
}
