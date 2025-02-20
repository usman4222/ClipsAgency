import { useEffect, useState } from "react";

const HowItWorks = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getOpacity = (offset) => {
    return Math.min(1, Math.max(0, (scrollY - offset) / 100));
  };

  return (
    <div className="relative bg-black text-white min-h-screen flex flex-col items-center justify-center py-20">
      <h2 className="text-4xl font-bold">How It Works</h2>
      <p className="text-lg mt-2">Your All-Access Pass to Editing Excellence</p>
      <div className="mt-10 relative flex flex-col items-center">
        <div className="h-[400px] w-[2px] bg-gray-600 absolute top-10"></div>
        <div className="h-[400px] w-[2px] bg-blue-500 absolute top-10" style={{ height: `${scrollY / 2}px` }}></div>
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold">Purchase Your Credits</h3>
          <p>Access a world-class editing team and tackle all your video challenges with our credit system.</p>
        </div>
        <div className="mt-20 text-center" style={{ opacity: getOpacity(200) }}>
          <h3 className="text-2xl font-bold">Submit Your Raw Footage</h3>
          <p>Submit your requests on your dashboard. Relax and let our team do their thing.</p>
        </div>
        <div className="mt-20 text-center" style={{ opacity: getOpacity(400) }}>
          <h3 className="text-2xl font-bold">Approve Your Branding</h3>
          <p>Review the edits and ensure they match your brand before finalizing.</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
