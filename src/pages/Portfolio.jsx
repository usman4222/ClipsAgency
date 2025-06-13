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
      name: "Carine Bouery",
      designation: "Coach",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205f1d310cb0bd1bdbd623_AK.jpg",
      videoUrl:
        "https://player.vimeo.com/video/897533327?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 3,
      name: "Carole Semaan",
      designation: "Skin Care",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6d21388c19d059612b0c_ajmal.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1024251310?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 4,
      name: "Chris Velkovski",
      designation: "Entrepreneur",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672086b4b670001f8224ed32_Chris%20V.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1019847364?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 5,
      name: "Chris Velkovski",
      designation: "Entrepreneur",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f78fa1894853479d15b1f_Carine.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1019845065?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 6,
      name: "Dr. Dunia Ezzeddine",
      designation: "Dentist",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672086b4b670001f8224ed32_Chris%20V.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1024282968?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 7,
      name: "Dr Medhat",
      designation: "Pediatrician",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6ec5abb55d6a79ab658b_dunia.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1024285137?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 8,
      name: "Dr.Diana Chehab",
      designation: "Cosmetic Dentist",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/6720577b1055a4940102a304_dr.medhat.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1019847959?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 9,
      name: "Dr.Diana Chehab",
      designation: "Cosmetic Dentist",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f78c81894853479d13778_Diana.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1019845382?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 10,
      name: "Dr. Ghinwa Ghamloush",
      designation: "Business Consultant",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7851088e730229452945_Ghinwa.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1019845224?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 11,
      name: "Dr Lindsey",
      designation: "Acupuncturist",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f78e3f439fbf6048e6bbb_Dr%20Lindsey.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1019849815?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 12,
      name: "Dr Nail Dia",
      designation: "Entrepreneur",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7796607f6c4341edc031_Nail.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1019850164?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 13,
      name: "Dr Vivien Moris",
      designation: "Plastic Surgeon",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205d08310cb0bd1bda4bca_vivien.jpg",
      videoUrl:
        "https://player.vimeo.com/video/897533461?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 14,
      name: "Entropy",
      designation: "Martial Arts School",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7862c7c288397a853faf_Entropy.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1019848218?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 15,
      name: "Exquis",
      designation: "Jewelry",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f78a82abd0241d7cd7f01_Exquis.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1019848835?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 16,
      name: "Fondako Media",
      designation: "Consulting Agency",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f776638cfe1b827beff1f_Fondako.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1019845517?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 17,
      name: "Mohamed Hafiz",
      designation: "Business Coach",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/6720871dfc600199c9c65e5f_Hafiz.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1024293482?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 18,
      name: "Hala Barghout",
      designation: "Entrepreneur",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f783fcafc3926c2536c82_Hala_alt.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1019845906?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 19,
      name: "KB Films",
      designation: "Infotainment",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f782956f5d1fb46137d77_KBFilms.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1019846339?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 20,
      name: "Khalifa Alsaadi",
      designation: "Infotainment",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f77e9e57cb1493b45c9e0_Khalifa.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1019847482?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 21,
      name: "Lamar Duffy",
      designation: "Entrepreneur",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7807d3741f92d132730b_Lamar.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1019849449?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 22,
      name: "Mahmoud Bartawi",
      designation: "Entrepreneur",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205c43ac0991a8522d53da_mahmoud%20bartawi.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1024283413?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 23,
      name: "Ninad Tipnis",
      designation: "Entrepreneur",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6d79bb8f8623b8773bbc_ninad.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1024256522?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 24,
      name: "Omar Meski",
      designation: "Entrepreneur",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7783e50f5c17563d1e3b_OM.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1024251254?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 25,
      name: "Omnia",
      designation: "Digital Agency",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f77553d27dc48dc401fb7_Omnia.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1019846575?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 26,
      name: "Rafif Taraya",
      designation: "Pediatric Dentist",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f233a5f18dae2e228ac95_rafif.jpg",
      videoUrl:
        "https://player.vimeo.com/video/908523246?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 27,
      name: "Rakan Alalami",
      designation: "Entrepreneur",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7744c404bc493a4f10c8_Rakan.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1019846688?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 28,
      name: "Riham Shamseddine",
      designation: "Nutritionist",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f777325e184c1e2fbef60_Riham.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1019853755?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 29,
      name: "Sekhar Mutha",
      designation: "Thought Leader",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205db2dec665b00f1cc878_Sekhar%20Mutha.jpg",
      videoUrl:
        "https://player.vimeo.com/video/897533701?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 30,
      name: "Steve Hill",
      designation: "Personal Coach",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7734c8213facd8c20a71_Steve.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1019846838?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 31,
      name: "Steve Hill",
      designation: "Personal Coach",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7734c8213facd8c20a71_Steve.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1019846943?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 32,
      name: "Sumayah Saadi",
      designation: "Entrepreneur",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f77221894853479cf8205_sumayyah.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1019850620?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 33,
      name: "Suzan Terzian",
      designation: "Holistic Nutritionist",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f76be32f450befd331ba6_Suzan.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1019847010?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 34,
      name: "svenja maltzahn",
      designation: "Entrepreneur",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6de56b76e3b2d676bec8_svenja.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1024282866?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 35,
      name: "Thera",
      designation: "Wellness Brand",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f769ae492a0a83dde8951_Thera.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1019845691?badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 36,
      name: "Thera",
      designation: "Wellness Brand",
      profileImage:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f769ae492a0a83dde8951_Thera.jpg",
      videoUrl:
        "https://player.vimeo.com/video/1019845793?badge=0&autopause=0&player_id=0&app_id=58479",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#080617] ">
      <div className="animate-gradient h-[200vh] pt-40" >
        <Heading
          title="Portfolio"
          description="Strategically Crafted Branded Signature Edits Uniquely Designed for Our Partners and Their Audiences"
        />
      </div>
      <div className="flex justify-center items-center py-32 ">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-[-1000px]">
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
