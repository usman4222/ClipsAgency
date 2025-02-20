import { useEffect } from "react";
import { Heading } from "../Heading";

const ScrollAnimation = () => {
  useEffect(() => {
    const callback = function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeIn");
        } else {
          entry.target.classList.remove("animate-fadeIn");
        }
      });
    };

    const observer = new IntersectionObserver(callback);
    const targets = document.querySelectorAll(".js-show-on-scroll");
    targets.forEach((target) => {
      target.classList.add("opacity-0");
      observer.observe(target);
    });
  }, []);

  return (
    <div className="p-4">
      <div className=" js-show-on-scroll flex flex-col items-center text-center">
        <h2 className="mb-6 text-4xl font-bold tracking-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]">
          Purchase Your Credits
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-lg text-white">
          Access a world-class editing team and tackle all your video <br />{" "}
          challenges with our credit system.
        </p>
        <div className="w-[2px] h-24 bg-[#F5D1FF] js-show-on-scroll "></div>
      </div>
      <div className=" js-show-on-scroll flex flex-col items-center text-center mt-8">
        <h2 className="mb-6 text-4xl font-bold tracking-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]">
          Submit Your Raw Footage
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-lg text-white">
          Submit your requests on your dashboard. Relax and let our team do<br />{" "}
          their thing.
        </p>
        <div className="w-[2px] h-24 bg-[#F5D1FF] js-show-on-scroll"></div>
      </div>
      <div className=" js-show-on-scroll flex flex-col items-center text-center mt-8">
        <h2 className="mb-6 text-4xl font-bold tracking-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]">
          Approve your Branding
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-lg text-white">
          We’ll create a unique visual style for your videos. Once approved,<br />{" "}
          we’ll send you a sample edit to review.
        </p>
        <div className="w-[2px] h-24 bg-[#F5D1FF] js-show-on-scroll"></div>
      </div>
      <div className=" js-show-on-scroll flex flex-col items-center text-center mt-8">
        <h2 className="mb-6 text-4xl font-bold tracking-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]">
          Receive your Videos assets
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-lg text-white">
          Once the sample is approved, we get straight to work on your full<br />{" "}
          batch of videos. Expect consistent, high-quality edits.
        </p>
        <div className="w-[2px] h-24 bg-[#F5D1FF] js-show-on-scroll"></div>
      </div>
      <div className=" js-show-on-scroll flex flex-col items-center text-center mt-8 mb-5">
        <h2 className="mb-6 text-4xl font-bold tracking-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]">
          Purchase Your Credits
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-lg text-white">
          Access a world-class editing team and tackle all your video <br />{" "}
          challenges with our credit system.
        </p>
      </div>
    </div>
  );
};

export default ScrollAnimation;
