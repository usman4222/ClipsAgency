import { Heading } from "../../components/Heading";
import FAQSection from "../../components/PowerPod/FAQSection";
import Podcasts from "../../components/PowerPod/Podcasts";
import VideoPost from "../../components/PowerPod/VideoPost";

export default function PowerPod() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#080617]">
      <div className="mx-auto flex  flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8 mb-32">
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[384px] leading-[307px]">
          PowerPod
        </h1>
        <h2 className="mb-6 max-w-3xl text-2xl font-bold text-white sm:text-3xl md:text-[45px] leading-[50px] pt-20 pb-6">
          Outsource Your Entire Podcast's
          <span className="block">Editing & Posting</span>
        </h2>
        <p className="max-w-xl text-lg text-white/90 sm:text-xl">
          If you're looking to improve the quality of your videos.
          <span className="block">This place is for you</span>
        </p>
      </div>
      {/* <VideoPost /> */}
      <Heading
        title={
          <>
            Signature Styled <br /> Podcasts
          </>
        }
        description="Personal branding is not a nice-to-have anymore, it’s a must. And how you choose to show up says a lot about you."
        buttonText="View All Client Success"
      />
      <Podcasts />
      <FAQSection />
    </section>
  );
}
