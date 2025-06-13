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
      "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/680296859f31d028e8d2e9d4_vennre%20dp.jpg",
    videoUrl:
      "https://player.vimeo.com/video/1073126053?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    id: 3,
    name: "Brenton Price",
    designation: "Entrepreneur",
    profileImage:
      "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/6720865799e3b5e1ff0902bf_Brenton%20Price.jpg",
    videoUrl:
      "https://player.vimeo.com/video/897535493?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    id: 4,
    name: "Chris Velkovski",
    designation: "Entrepreneur",
    profileImage:
      "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672086b4b670001f8224ed32_Chris%20V.jpg",
    videoUrl:
      "https://player.vimeo.com/video/897535512?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    id: 5,
    name: "Dr Medhat",
    designation: "Pediatrician",
    profileImage:
      "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/6720577b1055a4940102a304_dr.medhat.jpg",
    videoUrl:
      "https://player.vimeo.com/video/1073121653?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    id: 6,
    name: "Dr. Sara Alhammadi",
    designation: "Prosthodontist",
    profileImage:
      "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67025756be96d71592e4ed07_Ellipse%20235.svg",
    videoUrl:
      "https://player.vimeo.com/video/897535562?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    id: 7,
    name: "Leonard Josipovic",
    designation: "Plastic Surgeon",
    profileImage:
      "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f77f625e184c1e2fc52cd_Leo.jpg",
    videoUrl:
      "https://player.vimeo.com/video/1019832864?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    id: 8,
    name: "Dr.Diana Chehab",
    designation: "Cosmetic Dentist",
    profileImage:
      "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f78c81894853479d13778_Diana.jpg",
    videoUrl:
      "https://player.vimeo.com/video/1019832271?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    id: 9,
    name: "Dr Vivien Moris",
    designation: "Plastic Surgeon",
    profileImage:
      "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205d08310cb0bd1bda4bca_vivien.jpg",
    videoUrl:
      "https://player.vimeo.com/video/897537706?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    id: 10,
    name: "Fondako Media",
    designation: "Consulting Agency",
    profileImage:
      "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f776638cfe1b827beff1f_Fondako.jpg",
    videoUrl:
      "https://player.vimeo.com/video/1019833007?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    id: 11,
    name: "Mohamed Hafiz",
    designation: "Business Coach",
    profileImage:
      "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/6720871dfc600199c9c65e5f_Hafiz.jpg",
    videoUrl:
      "https://player.vimeo.com/video/897535536?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    id: 12,
    name: "Hala Barghout",
    designation: "Coach",
    profileImage:
      "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f783fcafc3926c2536c82_Hala_alt.jpg",
    videoUrl:
      "https://player.vimeo.com/video/1019832357?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    id: 13,
    name: "Dr Hassan Asad",
    designation: "Cosmetic Dentist",
    profileImage:
      "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7817d10bc61bb82169ab_Hassan.jpg",
    videoUrl:
      "https://player.vimeo.com/video/1019832578?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    id: 14,
    name: "Khalifa Alsaadi",
    designation: "Infotainment",
    profileImage:
      "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f77e9e57cb1493b45c9e0_Khalifa.jpg",
    videoUrl:
      "https://player.vimeo.com/video/1019832742?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    id: 15,
    name: "Leena Parwani",
    designation: "Investment Advisor",
    profileImage:
      "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672089790ae1a37f952ba7e5_Leena%20P.jpg",
    videoUrl:
      "https://player.vimeo.com/video/897543071?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    id: 16,
    name: "Mira Daher",
    designation: "Digital Consultant",
    profileImage:
      "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f77a51894853479cffa64_Mira.jpg",
    videoUrl:
      "https://player.vimeo.com/video/1019832926?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    id: 17,
    name: "Munir Al Deraawi",
    designation: "Real Estate",
    profileImage:
      "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/6802993f633d04d2385656d5_Munir.png",
    videoUrl:
      "https://player.vimeo.com/video/1073128813?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    id: 18,
    name: "Rakan Alalami",
    designation: "Entrepreneur",
    profileImage:
      "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7744c404bc493a4f10c8_Rakan.jpg",
    videoUrl:
      "https://player.vimeo.com/video/1019833075?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    id: 19,
    name: "Reem Alsayegh",
    designation: "Lawyer",
    profileImage:
      "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/680297f60fbb09399a58f021_reem.jpg",
    videoUrl:
      "https://player.vimeo.com/video/1073122801?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    id: 20,
    name: "Abelardo Bandeira",
    designation: "Entrepreneur",
    profileImage:
      "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f777325e184c1e2fbef60_Riham.jpg",
    videoUrl:
      "https://player.vimeo.com/video/1019833207?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    id: 21,
    name: "Riham Shamseddine",
    designation: "Nutritionist",
    profileImage:
      "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205db2dec665b00f1cc878_Sekhar%20Mutha.jpg",
    videoUrl:
      "https://player.vimeo.com/video/897540097?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    id: 22,
    name: "Sekhar Mutha",
    designation: "Thought Leader",
    profileImage:
      "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f76d256f5d1fb46123255_Shougg.jpg",
    videoUrl:
      "https://player.vimeo.com/video/1019833291?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    id: 23,
    name: "Shoug AlShirazi",
    designation: "Travel Influencer",
    profileImage:
      "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7734c8213facd8c20a71_Steve.jpg",
    videoUrl:
      "https://player.vimeo.com/video/1019833404?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    id: 24,
    name: "Steve Hill",
    designation: "Personal Coach",
    profileImage:
      "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f76be32f450befd331ba6_Suzan.jpg",
    videoUrl:
      "https://player.vimeo.com/video/897535580?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  // {
  //   id: 25,
  //   name: "Abelardo Bandeira",
  //   designation: "Entrepreneur",
  //   profileImage:
  //     "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6de56b76e3b2d676bec8_svenja.jpg",
  //   videoUrl:
  //     "https://player.vimeo.com/video/1073123168?badge=0&autopause=0&player_id=0&app_id=58479",
  // },
  // {
  //   id: 26,
  //   name: "Abelardo Bandeira",
  //   designation: "Entrepreneur",
  //   profileImage:
  //     "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/680296859f31d028e8d2e9d4_vennre%20dp.jpg",
  //   videoUrl:
  //     "https://player.vimeo.com/video/1073126053?badge=0&autopause=0&player_id=0&app_id=58479",
  // },
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
    <section className="relative min-h-screen bg-[#080617] py-16 ">
      <div className=" h-[200vh] text-center animate-gradient pt-24">
        <Heading
          title="Client Success"
          description="See what our clients have to say or explore our case studies."
        />
        {/* Toggle Buttons */}
        <div className="my-16 flex md:flex-row flex-col items-center justify-center gap-4">
          <button
            onClick={() => setActiveTab("case-studies")}
            className={`rounded-2xl w-fit px-6 md:px-12 py-3 text-sm font-semibold cursor-pointer ${activeTab === "case-studies" ? "bg-[#E7FE54]" : "bg-white"
              }`}
          >
            Case Studies
          </button>
          <button
            onClick={() => setActiveTab("testimonials")}
            className={`rounded-2xl w-fit px-6 md:px-12 py-3 text-sm font-semibold cursor-pointer ${activeTab === "testimonials" ? "bg-[#E7FE54]" : "bg-white"
              }`}
          >
            Testimonials
          </button>
        </div>
      </div>
      {/* Content */}
      <div className="mt-[-800px]">
        {activeTab === "testimonials" ? (
          <div className="flex justify-center items-center ">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
