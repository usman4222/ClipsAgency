import React from "react";

const TestimonialVideoCard = ({
  videoUrl,
  profileImage,
  name,
  designation,
}) => {
  return (
    <div className="bg-white rounded-3xl w-fit px-3 py-3 ">
      <div className=" w-fit ">
        <iframe
          src={videoUrl}
          title={`${name} Case Study`}
          className="md:w-[250px] md:h-[450px] w-[250px] h-[450px] object-cover rounded-lg"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          height="500px"
          width="full"
          style={{ borderRadius: "14px",  }}
        ></iframe>

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
