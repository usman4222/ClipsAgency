import React from "react";

const videoData = [
  {
    id: 1,
    name: "Abelardo Bandeira",
    role: "Entrepreneur",
    videoUrl: " https://i.vimeocdn.com/video/1773522868-aa7a355ef04cb4e9b58a8d2faf41e948cf3da68725587725e23120d91ded7d06-d?mw=300&mh=533", // Example YouTube link
    thumbnail: "/images/thumb1.jpg",
  },
  {
    id: 2,
    name: "Ahmad Khabier",
    role: "Real Estate",
    videoUrl: " https://i.vimeocdn.com/video/1773522868-aa7a355ef04cb4e9b58a8d2faf41e948cf3da68725587725e23120d91ded7d06-d?mw=300&mh=533",
    thumbnail: "/images/thumb2.jpg",
  },
  {
    id: 3,
    name: "Brenton Price",
    role: "Entrepreneur",
    videoUrl: " https://i.vimeocdn.com/video/1773522868-aa7a355ef04cb4e9b58a8d2faf41e948cf3da68725587725e23120d91ded7d06-d?mw=300&mh=533",
    thumbnail: "/images/thumb3.jpg",
  },
  {
    id: 4,
    name: "Chris Velkovski",
    role: "Founder @LuckyPunch",
    videoUrl: " https://i.vimeocdn.com/video/1773522868-aa7a355ef04cb4e9b58a8d2faf41e948cf3da68725587725e23120d91ded7d06-d?mw=300&mh=533",
    thumbnail: "/images/thumb4.jpg",
  },
];

const VideoCard = ({ video }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative w-full h-[200px] md:h-[250px] lg:h-[600px]">
        <iframe
          src={video.videoUrl}
            className="w-full h-[250px] md:h-[350px] lg:h-[600px] object-cover p-3"
          style={{ clipPath: "inset(0% round 16px)" }}
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-4 flex items-center space-x-3">
        <img
          src={video.thumbnail}
          alt={video.name}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h3 className="text-lg font-semibold">{video.name}</h3>
          <p className="text-gray-500 text-sm">{video.role}</p>
        </div>
      </div>
    </div>
  );
};

const VideoGrid = () => {
  return (
    <div className="bg-gradient-to-b from-purple-800 to-purple-900 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-white text-center text-3xl font-bold mb-6">
          Featured Interviews
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {videoData.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGrid;
