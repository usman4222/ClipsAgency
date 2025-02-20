import BeforeAfterSection from "../../components/Credits/BeforeAfterSection";
import FloatingVideoCards from "../../components/Credits/FloatingVideoCards";
import HowItWorks from "../../components/Credits/HowItWorks";
import PricingCard from "../../components/Credits/PricingCard";
import PricingTable from "../../components/Credits/PricingTable";
import ScrollAnimation from "../../components/Credits/ScrollAnimation";
import SignatureVideoSection from "../../components/Credits/SignatureVideoSection";
import { Heading } from "../../components/Heading";
import FAQSection from "../../components/PowerPod/FAQSection";
import Podcasts from "../../components/PowerPod/Podcasts";

export default function Credits() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#080617]">
      <div className="mx-auto flex  flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8 mb-32">
        <h2 className="mb-6 max-w-3xl text-2xl font-bold text-white sm:text-3xl md:text-[70px] leading-[78px] pt-20 pb-6">
          Create your own
          <span className="block"> Video editing style</span>
        </h2>
        <p className="max-w-xl text-[27px] leading-[30px] text-white/90">
          Stop copying other peoples styles.
          <span className="block"> It's time to have your own</span>
        </p>
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[528px] leading-[528px]">
          Credits
        </h1>
      </div>
      <SignatureVideoSection />
      <BeforeAfterSection />

      <div className="mt-48">
        <Heading
          title={
            <>
              Loved By <br /> Top Entrepreneurs
            </>
          }
        />
      </div>
      <Podcasts />
      <Heading
        title={
          <>
            50M+ of <br /> Organic Views
          </>
        }
      />
      <FloatingVideoCards />
      <Heading
        title={
          <>
            Unlock A $5K <br /> Branding Bonus!
          </>
        }
      />
      <div className="flex justify-center">
        <img
          src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67556a267fa59365e2cd5e75_Book%20Comp_1_optimized.gif"
          alt="book"
          className="w-[600px] bg-red-500"
        />
      </div>
      <p className=" text-center text-[27px] leading-[30px] text-white/90">
        When you partner with us, you’ll receive a complimentary Signature
        Branding Exercise—
        <span className="block">
          {" "}
          valued at $5,000—designed exclusively for you. It’s our way of
          ensuring your videos not
        </span>
        <span className="block">
          {" "}
          only stand out but also stay true to your unique brand.
        </span>
      </p>

      <div className="mt-48">
        <Heading
          title="Credits Pricing"
          description={
            <>
              <p>
                "Buy Credits Once, Use Them When <br /> You Need—It’s That
                Simple"
              </p>
            </>
          }
        />
      </div>
      <PricingCard />
      <Heading title="Credit System" description="Your Credits, Your Way" />
      <PricingTable />
      <div className="mt-20">
        <Heading
          title="How It Works"
          description="Your All-Access Pass to Editing Excellence"
        />
      </div>
      <ScrollAnimation />
      <FAQSection />
    </section>
  );
}
