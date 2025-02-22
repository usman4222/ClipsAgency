import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import img1 from "../../images/DrVivien.jpg";
import CaseStudyCard from "../CaseStudyCard";

const SuccessStoriesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const successStories = [
    {
      profileImage: img1,
      name: "Dr Vivien Moris",
      designation: "Plastic Surgeon",
      initialFollowers: "137k+",
      followersGained: "136K+",
      viewCount: "13M+",
      quote:
        "This is an amazing company. They helped me with the content ideas and the results are amazing.",
      videoUrl:
        "https://player.vimeo.com/video/1024229575?badge=0&autopause=0&player_id=0&app_id=58479",
      follower: "136K+",
    },
    {
      profileImage: img1,
      name: "Dr John Doe",
      designation: "Dermatologist",
      initialFollowers: "120k+",
      followersGained: "115K+",
      viewCount: "10M+",
      quote:
        "Their strategy transformed my online presence. Highly recommended!",
      videoUrl:
        "https://player.vimeo.com/video/1024229575?badge=0&autopause=0&player_id=0&app_id=58479",
      follower: "115K+",
    },
    {
      profileImage: img1,
      name: "Dr Sarah Lee",
      designation: "Cosmetic Dentist",
      initialFollowers: "95k+",
      followersGained: "90K+",
      viewCount: "8M+",
      quote: "I saw tremendous growth thanks to their insights!",
      videoUrl:
        "https://player.vimeo.com/video/1024229575?badge=0&autopause=0&player_id=0&app_id=58479",
      follower: "90K+",
    },
    {
      profileImage: img1,
      name: "Dr Emily Clark",
      designation: "Aesthetic Surgeon",
      initialFollowers: "110k+",
      followersGained: "108K+",
      viewCount: "11M+",
      quote:
        "Their expertise helped me reach a wider audience effortlessly.",
      videoUrl:
        "https://player.vimeo.com/video/1024229575?badge=0&autopause=0&player_id=0&app_id=58479",
      follower: "108K+",
    },
    {
      profileImage: img1,
      name: "Dr William Brown",
      designation: "Orthopedic Surgeon",
      initialFollowers: "85k+",
      followersGained: "80K+",
      viewCount: "7M+",
      quote:
        "Their strategies made a significant impact on my online brand.",
      videoUrl:
        "https://player.vimeo.com/video/1024229575?badge=0&autopause=0&player_id=0&app_id=58479",
      follower: "80K+",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % successStories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? successStories.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-[#080617] text-white py-10 relative">
      <div className="max-w-7xl mx-auto overflow-hidden relative">
        <div className="flex items-center justify-center gap-4">
          <button onClick={prevSlide} className="text-3xl text-white">
            <BiChevronLeft />
          </button>
          <div className="w-80 h-auto flex justify-center">
            <CaseStudyCard {...successStories[currentIndex]} />
          </div>
          <button onClick={nextSlide} className="text-3xl text-white">
            <BiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesCarousel;