import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CaseStudyCard from "../components/CaseStudyCard";

const slides = [
  "Slide 1",
  "Slide 2",
  <CaseStudyCard key="case-study" />, // Ensure unique key for component
];

const CustomCarousel = () => {
  return (
    <div className="w-full relative">
      <Swiper
        modules={[Navigation]}
        loop={true}
        slidesPerView="auto" // Adjusts based on content
        spaceBetween={20}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          1920: { slidesPerView: 3, spaceBetween: 30 },
          1028: { slidesPerView: 2, spaceBetween: 30 },
          990: { slidesPerView: 1, spaceBetween: 0 },
        }}
        className="multiple-slide-carousel swiper-container"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="w-auto flex justify-center">
            {typeof slide === "string" ? (
              <div className="bg-indigo-50 rounded-2xl h-96 w-auto flex justify-center items-center">
                <span className="text-2xl font-semibold text-indigo-600">
                  {slide}
                </span>
              </div>
            ) : (
              slide
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomCarousel;
