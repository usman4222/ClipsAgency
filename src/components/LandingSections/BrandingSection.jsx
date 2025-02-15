import Box from "../../assets/package.gif";
import Video from "../../assets/video.gif";

export default function BrandingSection() {
  return (
    <section className="bg-[#0D0B14] px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 text-center">
          <h1 className="mb-6 text-[61px] leading-[67px] font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Branding, Content &<br />
            Systems.
          </h1>
          <p className="mx-auto max-w-3xl text-base text-gray-400 md:text-lg">
            What happens when a branding agency who is obsessed with systems and
            frameworks, decides to dive in the world content creation? you get
            the clips agency.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <img src={Box} alt="img" className="w-32 h-32" />
              {/* <Box className="h-16 w-16 text-purple-400" strokeWidth={1} /> */}
            </div>
            <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
              Nothing is unbranded
            </h2>
            <p className="mx-auto max-w-sm text-gray-400">
              In the world of branding, it's a runway. Will you sizzle and steal
              the show, or will you be lost in the background?
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="relative w-32 h-32">
                <img src={Video} alt="img" className="w-full h-full" />
                <div className="absolute inset-0 bg-blue-500 mix-blend-multiply"></div>
              </div>
            </div>
            <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
              Videos that drive engagements.
            </h2>
            <p className="mx-auto max-w-sm text-gray-400">
              Level up your online game with videos that don't just snag
              attention but set sparks flying in your audience.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              {/* <Diamond className="h-16 w-16 text-purple-400" strokeWidth={1} /> */}
            </div>
            <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
              Removing all the headaches.
            </h2>
            <p className="mx-auto max-w-sm text-gray-400">
              Say adios to the hassle, and time consuming tasks in content
              creation. Embrace a process that's all about doing more with less
              fuss.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
