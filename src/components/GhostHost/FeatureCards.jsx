import { FaClock, FaChartLine, FaStar } from "react-icons/fa";

const FeatureCards = () => {
  return (
    <div className="bg-[#F5D1FF] to-black  mx-8 rounded-2xl px-4 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full py-10">
        <div className=" p-2 lg:p-6 rounded-lg flex flex-col items-starth-full">
          <FaClock className="text-2xl mb-2" />
          <h2 className="text-[27px] leading-[34px] font-bold mb-1">
            Win back your time. Focus  <br className="lg:block hidden" /> on your business
          </h2>
          <p className="text-[15px] leading-[17px] ">
            Automate your content creation.
          </p>
        </div>
        <div className=" p-2 lg:p-6 rounded-lg flex flex-col items-start">
          <FaChartLine className="text-2xl mb-2" />
          <h2 className="text-[27px] leading-[34px] font-bold mb-1">
            Grow on all social media  <br className="lg:block hidden" />channels
          </h2>
          <p className="text-[15px] leading-[17px] font-semibold">Get seen everywhere.</p>
        </div>
        <div className="p-2 lg:p-6 rounded-lg flex flex-col items-start">
          <FaStar className="text-2xl mb-2" />
          <h2 className="text-[27px] leading-[34px] font-bold mb-1">
            Get more leads to your  <br className="lg:block hidden" /> business
          </h2>
          <p className="text-[15px] leading-[17px] font-semibold">
            Automate your content creation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
