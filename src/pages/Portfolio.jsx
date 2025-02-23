import React, { useEffect } from "react";
import { Heading } from "../components/Heading";
import TestimonialVideoCard from "../components/TestimonialVideoCard";

const Portfolio = () => {
  const testimonials = [
    {
      id: 1,
      name: "Abelardo Bandeira",
      designation: "Entrepreneur",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f791d42d2dabfa806b1ff_Abe.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1019832195?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 2,
      name: "Abelardo Bandeira",
      designation: "Entrepreneur",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f791d42d2dabfa806b1ff_Abe.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1019832195?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 3,
      name: "Abelardo Bandeira",
      designation: "Entrepreneur",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f791d42d2dabfa806b1ff_Abe.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1019832195?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 4,
      name: "Abelardo Bandeira",
      designation: "Entrepreneur",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f791d42d2dabfa806b1ff_Abe.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1019832195?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 5,
      name: "Abelardo Bandeira",
      designation: "Entrepreneur",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f791d42d2dabfa806b1ff_Abe.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1019832195?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 6,
      name: "Abelardo Bandeira",
      designation: "Entrepreneur",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f791d42d2dabfa806b1ff_Abe.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1019832195?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 7,
      name: "Abelardo Bandeira",
      designation: "Entrepreneur",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f791d42d2dabfa806b1ff_Abe.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1019832195?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 8,
      name: "Abelardo Bandeira",
      designation: "Entrepreneur",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f791d42d2dabfa806b1ff_Abe.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1019832195?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 9,
      name: "Abelardo Bandeira",
      designation: "Entrepreneur",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f791d42d2dabfa806b1ff_Abe.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1019832195?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 10,
      name: "Abelardo Bandeira",
      designation: "Entrepreneur",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f791d42d2dabfa806b1ff_Abe.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1019832195?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 11,
      name: "Abelardo Bandeira",
      designation: "Entrepreneur",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f791d42d2dabfa806b1ff_Abe.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1019832195?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 12,
      name: "Abelardo Bandeira",
      designation: "Entrepreneur",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f791d42d2dabfa806b1ff_Abe.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1019832195?badge=0&autopause=0&player_id=0&app_id=58479",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" bg-[#080617] mt-24 animate-gradient">
      <Heading
        title="Portfolio"
        description="Strategically Crafted Branded Signature Edits Uniquely Designed for Our Partners and Their Audiences"
      />
      <div className="flex justify-center items-center py-32 ">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {testimonials.map((testimonial) => (
            <TestimonialVideoCard
              key={testimonial.id}
              name={testimonial.name}
              designation={testimonial.designation}
              profileImage={testimonial.profileImage}
              videoUrl={testimonial.videoUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
