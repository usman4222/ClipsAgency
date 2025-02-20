import { BiPlus } from "react-icons/bi";

export default function CaseStudyCard({
  profileImage,
  name,
  designation,
  quote,
  initialFollowers,
  viewCount,
  followersGained,
  videoUrl,
}) {
  return (
    <div className="min-h-screen p-4 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-gradient-to-br from-pink-200 to-purple-200 rounded-3xl p-8 flex flex-col lg:flex-row gap-8">
        {/* Left Content */}
        <div className="flex-1 space-y-32">
          {/* Profile Section */}
          <div className="flex items-start gap-4">
            <div className="relative">
              <img
                src={profileImage}
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              <span className="absolute -right-1 -bottom-1 bg-yellow-300 text-xs font-semibold px-2 py-0.5 rounded-full">
                {followersGained}+
              </span>
            </div>
            <div>
              <h2 className="text-2xl font-bold">{name}</h2>
              <p className="text-gray-700">{designation}</p>
            </div>
          </div>

          {/* Quote */}
          <blockquote className="text-3xl md:text-4xl font-bold leading-tight text-left">{`"${quote}"`}</blockquote>

          {/* Starting Point */}

          {/* Stats */}
          <div className="flex flex-col gap-6">
            <p className="text-gray-700 text-left font-medium">
              Started with {initialFollowers} Followers
            </p>
            <div className="flex gap-14 bg-red-300 mt-10">
              <div className="flex flex-col ">
                <div className="rounded-full bg-[#e7fe54] w-fit p-2 mb-3">
                  <div className="rounded-full bg-black p-1">
                    <BiPlus className="h-5 w-5 text-[#e7fe54]" />
                  </div>
                </div>
                <div >
                  <div className="text-lg text-left md:text-xl font-bold text-[#080617]">
                    {viewCount}
                  </div>
                  <div className="text-sm text-left text-[#080617]">View Count</div>
                </div>
              </div>
              <div className="flex flex-col ">
                <div className="rounded-full bg-[#e7fe54] w-fit p-2 mb-3">
                  <div className="rounded-full bg-black p-1">
                    <BiPlus className="h-5 w-5 text-[#e7fe54]" />
                  </div>
                </div>
                <div>
                  <p className="text-[35px] leading-[39px] text-left md:text-xl font-bold text-[#080617]">
                    {viewCount}
                  </p>
                  <div className="text-sm text-left text-[#080617]">View Count</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Video Player */}
        <div className="w-full lg:w-[400px]  overflow-hidden">
          <div className="overflow-hidden rounded-3xl">
            <iframe
              src={videoUrl}
              title={`${name} Case Study`}
              className="w-full h-[250px] md:h-[350px] lg:h-[600px] object-cover"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}
