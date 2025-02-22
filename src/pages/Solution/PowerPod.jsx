import { Heading } from "../../components/Heading";
import FAQSection from "../../components/PowerPod/FAQSection";
import Podcasts from "../../components/PowerPod/Podcasts";
import { motion } from "framer-motion"; 

export default function PowerPod() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#080617]">
      <div className="mx-auto flex flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8 mb-32">
        {/* Animated Large Text */}
        <motion.h1
          className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[384px] leading-[307px]"
          initial={{ y: 100, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.8, ease: "easeOut" }} 
          viewport={{ once: true }} 
        >
          PowerPod
        </motion.h1>

        {/* Animated Heading */}
        <motion.h2
          className="mb-6 max-w-3xl text-2xl font-bold text-white sm:text-3xl md:text-[45px] leading-[50px] pt-20 pb-6"
          initial={{ y: 50, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Outsource Your Entire Podcast's
          <span className="block">Editing & Posting</span>
        </motion.h2>

        {/* Animated Paragraph */}
        <motion.p
          className="max-w-xl text-lg text-white/90 sm:text-xl"
          initial={{ y: 50, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }} 
        >
          If you're looking to improve the quality of your videos.
          <span className="block">This place is for you</span>
        </motion.p>
      </div>
      {/* <VideoPost /> */}
      <Heading
        title={
          <>
            Signature Styled <br /> Podcasts
          </>
        }
        description="Personal branding is not a nice-to-have anymore, it’s a must. And how you choose to show up says a lot about you."
      />
      <Podcasts />
      <FAQSection />
    </section>
  );
}
