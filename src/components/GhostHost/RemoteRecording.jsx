import React from "react";
import { Heading } from "../Heading";

const RemoteRecording = () => {
  const cards = [
    {
      title: "Green Screen",
      description: "Get unlimited setups",
      image:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/672b7b91f3c965d07c955295_Omar_green.gif",
    },
    {
      title: "Hire a Videographer",
      description: "Hire a professional to help you",
      image:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/672b7b91f0a3792de43be827_Comp%201_optimized.gif",
    },
    {
      title: "Shoot at Home",
      description: "Shoot at your home setup",
      image:
        "https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/672b7b9019975bd5a927c932_Lamar%202.gif",
    },
  ];

  return (
    <div>
      <Heading
        title={
          <>
            Seamless <br /> Remote Recording
          </>
        }
        description={
          <>
            Can’t make it to Dubai? No problem! Our seamless remote recording
            lets you capturehigh-quality content from anywhere – at home, in a
            studio, or with a green screen, all without travel
          </>
        }
      />
      <div className="flex justify-center items-center">
        <div className="container flex flex-wrap justify-between gap-6 p-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className=" text-white overflow-hidden shadow-lg  transition-transform transform hover:scale-105"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-[300px] object-cover rounded-2xl"
              />
              <div className="p-4 text-left">
                <h2 className="text-xl font-bold">{card.title}</h2>
                <p className="text-white">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RemoteRecording;
