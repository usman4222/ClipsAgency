import React from "react";
import { Plus } from "lucide-react";

const SuccessStoryCard = ({
  imageSrc,
  name,
  title,
  followersCount,
  followersGained,
  viewCount,
  testimonialText,
  videoUrl,
}) => {
  return (
    <div className="bg-[#080617] px-4 py-6">
      <div className="bg-[#f5d1ff] rounded-3xl mx-auto max-w-4xl p-6 flex flex-col lg:flex-row gap-6">
        {/* Left Content */}
        <div className="flex flex-col flex-1">
          {/* Profile Section */}
          <div className="flex gap-5 items-center">
            <img
              src={imageSrc}
              alt={name}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <h3 className="text-[20px] md:text-[23px] font-semibold">
                {name}
              </h3>
              <p className="text-[14px] md:text-[15px] mt-1">{title}</p>
              <span className="hidden lg:block rounded-full mt-3 bg-[#e7fe54] px-3 py-1 w-fit text-sm font-semibold">
                {followersCount}
              </span>
            </div>
          </div>

          {/* Testimonial */}
          <blockquote className="text-[20px] md:text-[26px] lg:text-[30px] mt-8 md:mt-10 leading-[28px] md:leading-[33px] font-medium mb-12 md:mb-16 text-customColor">
            "{testimonialText}"
          </blockquote>

          {/* Stats Section */}
          <div className="flex flex-col">
            <p className="text-sm text-[#080617]">
              Started with 2.5K Followers
            </p>
            <div className="flex gap-8 mt-6 md:mt-8">
              {/* Followers Gained */}
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-[#e7fe54] w-fit p-2 mb-3">
                  <div className="rounded-full bg-black p-1">
                    <Plus className="h-5 w-5 text-[#e7fe54]" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg md:text-xl font-bold text-[#080617]">
                    {followersGained}
                  </div>
                  <div className="text-sm text-[#080617]">Followers Gained</div>
                </div>
              </div>

              {/* View Count */}
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-[#e7fe54] w-fit p-2 mb-3">
                  <div className="rounded-full bg-black p-1">
                    <Plus className="h-5 w-5 text-[#e7fe54]" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg md:text-xl font-bold text-[#080617]">
                    {viewCount}
                  </div>
                  <div className="text-sm text-[#080617]">View Count</div>
                </div>
              </div>

              <div className="block lg:hidden">
                <div className="flex flex-col items-center">
                  <div className="rounded-full bg-[#e7fe54] w-fit p-2 mb-3">
                    <div className="rounded-full bg-black p-1">
                      <Plus className="h-5 w-5 text-[#e7fe54]" />
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg md:text-xl font-bold text-[#080617]">
                      {followersCount}
                    </div>
                    <div className="text-sm text-[#080617]">View Count</div>
                  </div>
                </div>
              </div>

              {/* <span className="hidden lg:block rounded-full mt-3 bg-[#e7fe54] px-3 py-1 w-fit text-sm font-semibold">
                
              </span> */}
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="hidden md:block w-full lg:w-[45%]">
          <div className="overflow-hidden rounded-3xl">
            <iframe
              src={videoUrl}
              title={`${name} Case Study`}
              className="w-full h-[250px] md:h-[350px] lg:h-[450px] object-cover"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoryCard;
