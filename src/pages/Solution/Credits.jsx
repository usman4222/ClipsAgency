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
import { motion } from "framer-motion";

export default function Credits() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#080617] mt-24">
      <div className="mx-auto flex flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8 mb-32 animate-gradient">
        {/* Animated Heading */}
        <motion.h2
          className="mb-6 max-w-3xl text-2xl font-bold text-white sm:text-3xl md:text-[70px] md:leading-[78px] pt-20 pb-6"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Create your own
          <span className="md:block"> Video editing style</span>
        </motion.h2>

        {/* Animated Paragraph */}
        <motion.p
          className="max-w-xl text-[27px] leading-[30px] text-white/90"
          initial={{ y: 50, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} 
          viewport={{ once: true }} 
        >
          Stop copying other peoples styles.
          <span className="md:block"> It's time to have your own</span>
        </motion.p>

        {/* Animated Large Text */}
        <motion.h1
          className="md:mb-6 font-bold tracking-tight text-white  text-[25vw] leading-[328px] md:leading-[528px]"
          initial={{ y: 50, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }} 
          viewport={{ once: true }}
        >
          Credits
        </motion.h1>
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
          className="w-[600px] "
        />
      </div>
      <p className=" text-center px-4 md:text-[27px] leading-[30px] text-white/90">
        When you partner with us, you’ll receive a complimentary Signature
        Branding Exercise—
        <span className="md:block">
          {" "}
          valued at $5,000—designed exclusively for you. It’s our way of
          ensuring your videos not
        </span>
        <span className="md:block">
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
