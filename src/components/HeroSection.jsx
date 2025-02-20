import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-[#080617] relative min-h-[60vh] overflow-hidden px-4 pt-24 pb-10">
      {/* Gradient Background */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.25)] md:text-5xl lg:text-6xl xl:text-7xl">
          Supercharge Your Brand With
          Viral Signature Clips
        </h1>
        <p className="mx-auto max-w-xl text-base text-gray-200 md:text-lg lg:text-xl">
          If you're a busy creator with no time to edit or post consistently on social media but still recognize the
          need to grow your brand faster, then this is for you.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
