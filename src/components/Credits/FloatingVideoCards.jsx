import React from "react";

export default function FloatingVideoCards() {
  const videos = [
    { id: 1, image: "https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/673d93a7c557f00f71ca7ce0_D2.gif", views: "270K", position: "top-8  left-60 md:left-10" },
    { id: 2, image: "https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/673d93a6b32ff6cc59d99fad_G2.gif", views: "100K", position: "top-0 left-0 md:left-52" },
    { id: 3, image: "https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/673d93a67542acff2424014e_H2.gif", views: "858K", position: "top-32 left-20 md:left-90" },
    { id: 4, image: "https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/673d93a6e9258cb7c67fde43_V2.gif", views: "239K", position: "md:top-0 top-[-60px] left-40 md:left-126" },
  ];

  return (
    <div className="relative min-h-screen bg-[#080617] flex justify-center items-center overflow-hidden">
      <div className="relative w-full md:max-w-4xl h-[500px]">
        {videos.map((video) => (
          <div
            key={video.id}
            className={`absolute ${video.position} bg-[#141020] rounded-xl overflow-hidden shadow-lg w-40 md:w-48 lg:w-56`}
          >
            <img
              src={video.image}
              alt="Video thumbnail"
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
