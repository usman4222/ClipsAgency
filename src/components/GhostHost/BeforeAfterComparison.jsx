import React from "react";

const BeforeAfterComparison = () => {
  const comparisons = [
    {
      before: "https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/673d93a5ebab3c93180a30c7_D1.gif",
      after: "https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/673d93a7c557f00f71ca7ce0_D2.gif",
    },
    {
      before: "https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/673d93a78a7aaf3c1187e179_H1.gif",
      after: "https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/674f15df8484a9f8a335ed4c_H2_2.gif",
    },
    {
      before: "https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/673d93a7b32ff6cc59d9a009_V1.gif",
      after: "https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/674f15de154a95f707e31d31_V2_2.gif",
    },
    {
      before: "https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/673d93a7b9053b1820922971_G1.gif",
      after: "https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/673d93a6b32ff6cc59d99fad_G2.gif",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-[#080617] py-10">
      {/* Labels */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <span className="bg-yellow-300 text-black px-3 py-1 text-sm font-bold rounded-full">
          Before
        </span>
        <span className="bg-yellow-300 text-black px-3 py-1 text-sm font-bold rounded-full">
          With Us
        </span>
      </div>

      {/* Cards */}
      {comparisons.map((item, index) => (
        <div key={index} className="flex  gap-6 mt-10">
          {/* Before Card */}
          <div className="relative rounded-2xl shadow-lg overflow-hidden max-w-[280px] sm:max-w-[300px] px-5">
            <img src={item.before} alt="Before" className="w-full h-auto" />
          </div>

          {/* After Card */}
          <div className="relative rounded-2xl shadow-lg overflow-hidden max-w-[280px] sm:max-w-[300px] px-5">
            <img src={item.after} alt="With Us" className="w-full h-auto" />
            {/* Overlay Text */}
            <h3 className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-bold">
              Dentists Are Going
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BeforeAfterComparison;
