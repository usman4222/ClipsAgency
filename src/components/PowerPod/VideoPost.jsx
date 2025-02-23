import React from "react";

export default function VideoPost() {
  return (
    <div className="min-h-screen bg-[#080617]  flex justify-center items-center p-4">
      <div className="bg-[#F5D1FF] max-w-[600px] w-full rounded-3xl shadow-lg p-4">
        {/* User Info */}
        <div className="flex items-center gap-3 p-2">
          <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-white/20">
            <img
              src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672df1ad6ed1882cb7c3337d_uma.jpg"
              alt="Uma Thana profile"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-semibold text-black text-lg">Uma Thana</h2>
            <p className="text-sm text-black">@rawwithuma</p>
          </div>
        </div>

        {/* Video Content */}
        <div className="mt-3 rounded-xl overflow-hidden">
          <iframe
            className="w-[700px] h-[340px] aspect-video rounded-xl border"
            src="https://i.vimeocdn.com/video/1946820624-d4c3a88cf20c3540f252a190089e8c66696cf194469110740efc46c0a7d56281-d?mw=600&mh=338"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
