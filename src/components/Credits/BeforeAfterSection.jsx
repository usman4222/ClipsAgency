import React from "react";

const BeforeAfterSection = () => {
  return (
    <div>
      <div className="mb-20 text-center">
        <h1 className="mb-8 md:mb-6 text-4xl md:text-[61px] md:leading-[67px] font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
          Turn your raw <br />
          videos into visual
          <br /> masterpieces
        </h1>
      </div>
      <div className=" flex flex-col justify-center items-center p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Before Card */}
          <div className=" p-4 rounded-xl flex flex-col items-center w-full md:w-[300px] lg:w-[350px]">
            <img
              src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/674f1442d40cd4619b2093fd_D_Raw.gif"
              alt="Before GIF"
              className="rounded-lg w-full"
            />
            <p className="text-white w-full text-left mt-2 text-sm font-semibold">
              Before
            </p>
          </div>

          {/* After Card */}
          <div className=" p-4 rounded-xl flex flex-col items-center w-full md:w-[300px] lg:w-[350px]">
            <img
              src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/674f1461921154edc8a4a8ef_D_Final.gif"
              alt="After GIF"
              className="rounded-lg w-full"
            />
            <p className="text-white w-full text-left mt-2 text-sm font-semibold">
              After
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSection;
