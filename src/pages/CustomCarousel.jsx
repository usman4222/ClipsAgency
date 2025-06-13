import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SuccessStoriesCards from "../components/LandingSections/SuccessStoriesCards";

const caseStudies = [
  {
    id: 1,
    profileImage:
      "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6de56b76e3b2d676bec8_svenja.jpg",
    name: "svenja maltzahn",
    designation: "Entrepreneur",
    quote: "I’m getting so many requests I think I should stop posting videos",
    followersGained: "4.6K",
    initialFollowers: "0",
    viewCount: "350K",
    follower: "4.6K",
    videoUrl:
      "https://player.vimeo.com/video/1035892706?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    id: 2,
    profileImage:
      "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f769ae492a0a83dde8951_Thera.jpg",
    name: "Thera",
    designation: "Wellness Brand",
    quote:
      "The quality of work is amazing and the value we’re getting is great",
    followersGained: "52K",
    initialFollowers: "0",
    viewCount: "2M+",
    follower: "52.9K",
    videoUrl:
      "https://player.vimeo.com/video/1035891168?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    id: 3,
    profileImage:
      "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205db2dec665b00f1cc878_Sekhar%20Mutha.jpg",
    name: "Sekhar Mutha",
    designation: "Sekhar Mutha",
    quote:
      "You understood what I wanted to achieve, and with your team I was able to go online and grow my brand",
    followersGained: "102K",
    initialFollowers: "0",
    viewCount: "2M+",
    follower: "55K+",
    videoUrl:
      "https://player.vimeo.com/video/1024229606?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    id: 4,
    profileImage:
      "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67208d3c932b41a17159aea9_Tina%20C.jpg",
    name: "Tina Chagoury",
    designation: "Entrepreneur",
    quote:
      "What I do with you in 1 hour used to take me a full day on a TV set. I gained so much insights from our sessions",
    followersGained: "68K",
    initialFollowers: "33K",
    viewCount: "1.4M",
    follower: "64K",
    videoUrl:
      "https://player.vimeo.com/video/1024229673?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    id: 5,
    profileImage:
      "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67025756be96d71592e4ed07_Ellipse%20235.svg",
    name: "Dr. Sara Alhammadi",
    designation: "Prosthodontist",
    quote:
      "I’m like a puppet between your hands. It takes a village to do what you do. Really you have an amazing team",
    followersGained: "68K",
    initialFollowers: "4K",
    viewCount: "1.4M",
    follower: "64K",
    videoUrl:
      "https://player.vimeo.com/video/1024229631?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    id: 6,
    profileImage:
      "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205d08310cb0bd1bda4bca_vivien.jpg",
    name: "Dr Vivien Moris",
    designation: "Plastic Surgeon",
    quote:
      "This is an amazing company. They helped me with the content ideas and the results are amazing",
    followersGained: "137K",
    initialFollowers: "2.5k",
    viewCount: "13M",
    follower: "136K",
    videoUrl:
      "https://player.vimeo.com/video/1024229575?badge=0&autopause=0&player_id=0&app_id=58479",
  },
];

const CustomCarousel = () => {
  return (
    <div className="w-full mx-auto py-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1.3} // show partial next card
        autoplay={{ delay: 4000 }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
          1440: { slidesPerView: 1.5 },
          2560: { slidesPerView: 2 },

        }}
      >
        {caseStudies.map((caseStudy) => (
          <SwiperSlide key={caseStudy.id}>
            <SuccessStoriesCards {...caseStudy} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomCarousel;
