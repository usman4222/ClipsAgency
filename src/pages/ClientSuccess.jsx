import { useState } from "react";
import { Play, X } from "lucide-react";
import CaseStudyCard from "../components/CaseStudyCard";
import TestimonialVideoCard from "../components/TestimonialVideoCard";

const testimonials = [
  {
    id: 1,
    name: "Abelardo Bandeira",
    designation: "Entrepreneur",
    profileImage: "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f791d42d2dabfa806b1ff_Abe.jpg",
    videoUrl: "https://player.vimeo.com/video/1019832195?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    id: 2,
    name: "Abelardo Bandeira",
    designation: "Entrepreneur",
    profileImage: "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f791d42d2dabfa806b1ff_Abe.jpg",
    videoUrl: "https://player.vimeo.com/video/1019832195?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    id: 3,
    name: "Abelardo Bandeira",
    designation: "Entrepreneur",
    profileImage: "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f791d42d2dabfa806b1ff_Abe.jpg",
    videoUrl: "https://player.vimeo.com/video/1019832195?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    id: 4,
    name: "Abelardo Bandeira",
    designation: "Entrepreneur",
    profileImage: "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f791d42d2dabfa806b1ff_Abe.jpg",
    videoUrl: "https://player.vimeo.com/video/1019832195?badge=0&autopause=0&player_id=0&app_id=58479",
  },
];

const caseStudies = [
  {
    id: 1,
    profileImage:
      "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6de56b76e3b2d676bec8_svenja.jpg",
    name: "John Doe",
    designation: "Content Creator",
    quote: "I’m getting so many requests I think I should stop posting videos",
    initialFollowers: 500,
    viewCount: 350,
    followersGained: 200,
    videoUrl:
      "https://player.vimeo.com/video/1035892706?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    id: 2,
    profileImage: "https://via.placeholder.com/150",
    name: "Jane Smith",
    designation: "Marketing Strategist",
    quote: "Amazing experience!",
    initialFollowers: 800,
    views: 15000,
    followersGained: 500,
    videoTitle: "Boosting Engagement",
    videoDuration: "7:45",
    videoProgress: 90,
  },
];

export default function ClientSuccess() {
  const [activeTab, setActiveTab] = useState("case-studies");
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="relative min-h-screen bg-purple-900 px-4 py-16">
      <div className="container mx-auto max-w-7xl text-center">
        <h2 className="mb-4 text-4xl font-bold text-white">Client Success</h2>
        <p className="text-lg text-gray-300">
          See what our clients have to say or explore our case studies.
        </p>

        {/* Toggle Buttons */}
        <div className="my-6 flex justify-center gap-4">
          <button
            onClick={() => setActiveTab("case-studies")}
            className={`rounded-full px-6 py-2 text-sm font-semibold ${
              activeTab === "case-studies"
                ? "bg-white text-purple-900"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            Case Studies
          </button>
          <button
            onClick={() => setActiveTab("testimonials")}
            className={`rounded-full px-6 py-2 text-sm font-semibold ${
              activeTab === "testimonials"
                ? "bg-yellow-300 text-purple-900"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            Testimonials
          </button>
        </div>

        {/* Content */}
        {activeTab === "testimonials" ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
