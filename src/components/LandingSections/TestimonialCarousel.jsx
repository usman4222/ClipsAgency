import React from "react";
import img1 from "../../images/DrVivien.jpg";
import { Plus, Play, Volume2 } from "lucide-react";

const TestimonialCarousel = () => {
  return (
    <div className="bg-black  ">
      <div className="bg-[#f5d1ff] rounded-3xl flex mx-auto max-w-4xl ">
        <div className="flex flex-col">
          <div className="flex items-center gap-7">
            <img
              src={img1}
              alt="Dr Vivien"
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <h3 className="text-[23px] leading-[23px] font-semibold">
                Dr Vivien Moris
              </h3>
              <p className="text-[15px] leading-[15px] font-normal py-2">
                Plastic Surgeon
              </p>
            </div>
          </div>
          <span className="rounded-full mt-3 bg-[#e7fe54] px-3 py-1 text-sm font-semibold">
            137k+
          </span>

          <div>
            <blockquote className="text-2xl font-medium leading-relaxed text-gray-900">
              "This is an amazing company. They helped me with the content ideas
              and the results are amazing"
            </blockquote>

            <p className="text-sm text-gray-600">Started with 2.5K Followers</p>
          </div>

          <div className="flex justify-between">
            <div>
              <div className="rounded-full bg-green-100 p-2">
                <Plus className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <div className="text-xl font-bold">136K+</div>
                <div className="text-sm text-gray-600">Followers Gained</div>
              </div>
            </div>
            <div>
              <div className="rounded-full bg-green-100 p-2">
                <Plus className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <div className="text-xl font-bold">136K+</div>
                <div className="text-sm text-gray-600">Followers Gained</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="">
            <iframe
              src="https://player.vimeo.com/video/1024229575?badge=0&autopause=0&player_id=0&app_id=58479"
              alt="Dr Vivien Case Study"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
