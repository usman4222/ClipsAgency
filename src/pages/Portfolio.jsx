import React, { useEffect } from "react";
import { Heading } from "../components/Heading";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-[100vh] bg-[#080617] mt-24">
      <Heading
        title="Portfolio"
        description="Strategically Crafted Branded Signature Edits Uniquely Designed for Our Partners and Their Audiences"
      />
    </div>
  );
};

export default Portfolio;
