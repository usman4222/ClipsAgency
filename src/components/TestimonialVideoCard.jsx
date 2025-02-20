import React from "react";

const TestimonialVideoCard = ({
  videoUrl,
  profileImage,
  name,
  designation,
}) => {
  return (
    <div className=" bg-white rounded-3xl w-auto py-6">
      <div className="flex flex-col justify-center items-center">
        <iframe
          src={videoUrl}
          className="h-[250px] md:h-[350px] lg:h-[450px] w-auto rounded-3xl overflow-hidden object-cover video"
          allowFullScreen
        />

        <div className="flex gap-4 w-full mt-4 px-6">
          <div>
            <img
              src={profileImage}
              alt="profile"
              className="h-12 w-12 rounded-full object-cover"
            />
          </div>
          <div className="">
            <h3 className="text-[15px] text-left font-bold">{name}</h3>
            <p className="text-left">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialVideoCard;
