import { useEffect, useState } from "react";
import { Play, X } from "lucide-react";
import CaseStudyCard from "../components/CaseStudyCard";
import TestimonialVideoCard from "../components/TestimonialVideoCard";
import { Heading } from "../components/Heading";

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

export default function ClientSuccess() {
  const [activeTab, setActiveTab] = useState("case-studies");
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#080617]  px-4 py-16 mt-24">
      <div className="container mx-auto max-w-7xl text-center">
        <Heading
          title="Client Success"
          description="See what our clients have to say or explore our case studies."
        />
        {/* Toggle Buttons */}
        <div className="my-16 flex md:flex-row flex-col items-center justify-center gap-4">
          <button
            onClick={() => setActiveTab("case-studies")}
            className={`rounded-2xl w-fit px-6 md:px-12 py-3 text-sm font-semibold cursor-pointer ${
              activeTab === "case-studies" ? "bg-[#E7FE54]" : "bg-white"
            }`}
          >
            Case Studies
          </button>
          <button
            onClick={() => setActiveTab("testimonials")}
            className={`rounded-2xl w-fit px-6 md:px-12 py-3 text-sm font-semibold cursor-pointer ${
              activeTab === "testimonials" ? "bg-[#E7FE54]" : "bg-white"
            }`}
          >
            Testimonials
          </button>
        </div>

        {/* Content */}
        {activeTab === "testimonials" ? (
          <div className="flex justify-center items-center">
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
        ) : (
          <div className="flex flex-col items-center gap-6">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} {...caseStudy} />
            ))}
          </div>
        )}
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80">
          <div className="relative w-full max-w-2xl">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-4 -right-4 z-10 bg-white p-2 rounded-full"
            >
              <X className="h-6 w-6 text-purple-900" />
            </button>
            <video controls className="w-full rounded-lg">
              <source src={activeVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
