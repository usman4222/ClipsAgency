"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "How do I sign up?",
    answer: "Sign up process details will be provided here.",
  },
  {
    question: "How does this help me as a podcast creator?",
    answer:
      "Information about benefits for podcast creators will be provided here.",
  },
  {
    question: "Why don't I just hire a freelancer?",
    answer:
      "Comparison between our service and freelancers will be provided here.",
  },
  {
    question: "When does my month start?",
    answer: "Details about subscription period will be provided here.",
  },
  {
    question: "How do I communicate feedback?",
    answer: "Information about feedback process will be provided here.",
  },
  {
    question: "How will you post my videos?",
    answer: "Details about video posting process will be provided here.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#080617] py-16 lg:py-24">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col justify-between">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Have More Questions?
            </h2>
            <div className="flex flex-col justify-between">
              <p className="text-xl text-gray-300">
                Need more information?
                <br /> Book a 30 mins discovery call.
              </p>
              <span className="block">Book a 30 mins discovery call.</span>
              <Link
                href="#"
                className="inline-block rounded-xl w-fit bg-[#d1f14c] px-6 py-3 text-lg font-medium text-black transition-colors hover:bg-[#d1f14c]/90"
              >
                Book a call
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-800">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full items-center justify-between py-4 text-left text-[23px] leading-[28px] font-medium text-white  cursor-pointer"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  {faq.question}
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 shrink-0 transition-transform duration-200 bg-[#F5D1FF] text-[#0a0a16] p-1 rounded-full" />
                  ) : (
                    <Plus className="h-5 w-5 shrink-0 transition-transform duration-200 bg-[#F5D1FF] text-[#0a0a16] p-1 rounded-full " />
                  )}
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`grid transition-all duration-200 ease-in-out ${
                    openIndex === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-4 text-[16px] leading-[24px] text-gray-400">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
