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
  follower,
}) {
  return (
    <div className=" flex items-center justify-center">
      <div className="max-w-[310px] md:max-w-lg  lg:max-w-4xl xl:max-w-6xl bg-[#F5D1FF] rounded-3xl p-8 flex flex-col lg:flex-row gap-8">
        {/* Left Content */}
        <div className="flex-1 xl:space-y-14">
          {/* Profile Section */}
          <div className="flex gap-5 items-center">
            <img
              src={profileImage}
              alt="profile"
              className="h-10 w-10 md:h-20 md:w-20 xl:h-24 xl:w-24 rounded-full object-cover"
            />
            <div className="flex flex-col text-left">
              <h3 className="text-[20px] lg:text-[25px] xl:text-[35px] md:leading-[35px] font-semibold">
                {name}
              </h3>
              <p className="text-[14px] text-left lg:text-[17px] xl:text-[23px] md:leading-[23px] xl:mt-1">
                {designation}
              </p>
              <span className="hidden lg:block rounded-full mt-3 bg-[#e7fe54] px-3 py-1 w-fit text-[16px] font-semibold">
                {followersGained}+
              </span>
            </div>
          </div>

          {/* Quote */}
          <blockquote className="text-3xl lg:text-[36px] xl:text-[46px] xl:leading-[52px] mb-5 xl:mb-0 mt-5 xl:mt-0 font-bold text-left">{`"${quote}"`}</blockquote>

          {/* Starting Point */}

          {/* Stats */}
          <div className="flex flex-col gap-6">
            <p className="text-gray-700 text-left mt-3 text-[23px] leading-[26px] font-medium">
              Started with {initialFollowers} Followers
            </p>
            <div className="flex md:gap-32 gap-14 mt-10">
              <div className="flex flex-col ">
                <div className="rounded-full bg-[#e7fe54] w-fit p-2 mb-3">
                  <div className="rounded-full bg-black p-1">
                    <BiPlus className="h-5 w-5 text-[#e7fe54]" />
                  </div>
                </div>
                <div>
                  <div className="text-lg text-left md:text-[35px] leading-[39px] font-bold text-[#080617]">
                    {viewCount}
                  </div>
                  <div className="text-[23px] leading-[23px] text-left text-[#080617]">
                    Views
                  </div>
                </div>
              </div>
              <div className="flex flex-col ">
                <div className="rounded-full bg-[#e7fe54] w-fit p-2 mb-3">
                  <div className="rounded-full bg-black p-1">
                    <BiPlus className="h-5 w-5 text-[#e7fe54]" />
                  </div>
                </div>
                <div>
                  <div className="text-lg text-left md:text-[35px] leading-[39px] font-bold text-[#080617]">
                    {follower}
                  </div>
                  <div className="text-[23px] leading-[23px] text-left text-[#080617]">
                    Followers <br /> gained
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Video Player */}
        <div className=" md:w-[400px] w-full flex md:justify-end justify-center overflow-hidden rounded-2xl">
          <div className="relative">
            <iframe
              src={videoUrl}
              title={`${name} Case Study`}
              className="md:w-[330px] md:h-[580px] w-[250px] h-[450px] object-cover rounded-lg"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              height="500px"
              width="full"
              style={{ borderRadius: "14px" }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}